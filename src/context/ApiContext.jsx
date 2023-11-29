import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { routes } from "../utils/routes";
import { storages } from "../utils/storages";

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
    // ----------------------------------------------------------------------------
    // variables
    // ----------------------------------------------------------------------------
    const baseURL = "http://127.0.0.1:8000";
    const apiRoutes = {
        login: "api/login",
        logout: "api/logout",
    };

    const [apiAxios, setApiAxios] = useState();
    const navigate = useNavigate();

    // ----------------------------------------------------------------------------
    // function
    // ----------------------------------------------------------------------------
    const setApiToken = (token) => {
        let newAxios = axios.create({
            baseURL: baseURL,
            headers: {
                Authorization: "Token " + token,
            },
        });

        newAxios.interceptors.response.use(
            (response) => {
                // Any status code that lie within the range of 2xx cause this function to trigger
                // Do something with response data
                return response;
            },
            (error) => {
                if (error.response.status == 401) {
                    secureLocalStorage.removeItem(storages.TOKEN);
                    secureLocalStorage.removeItem(storages.USER);
                    navigate(routes.login);
                }
                // Any status codes that falls outside the range of 2xx cause this function to trigger
                // Do something with response error
                return Promise.reject(error);
            }
        );
        setApiAxios(newAxios)
    };

    const createApiAxios = () => {
        setApiToken("")
    }
    // ----------------------------------------------------------------------------
    // export
    // ----------------------------------------------------------------------------
    const value = {
        apiRoutes,
        apiAxios,
        setApiToken
    }

    return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
};

export {ApiContext, ApiContextProvider}