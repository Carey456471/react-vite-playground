import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { storages } from "./storages";
import { routes } from "./routes";

const apiBaseURL = "http://127.0.0.1:8000/";
const apiRoutes = {
  login: "api/login",
  logout: "api/logout",
};

const apiAxios = axios.create({
  baseURL: apiBaseURL,
});

apiAxios.interceptors.request.use(
    (request) => {
        console.log ("start api request: " + request.url)
    }
)

apiAxios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
        secureLocalStorage.removeItem(storages.TOKEN);
        secureLocalStorage.removeItem(storages.USER);
        window.location.href = "#" + routes.login;
    } else if (error.response.status == 403) {
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export {apiAxios, apiRoutes}
