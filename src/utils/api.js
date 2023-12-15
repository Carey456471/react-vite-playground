import axios from 'axios';

const apiBaseURL = 'your backend host';
const apiRoutes = {
  login: 'login',
  logout: 'logout'
};

const apiAxios = axios.create({
  baseURL: apiBaseURL
});

apiAxios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      console.log('Unauthorized');
    } else if (error.response.status == 403) {
      console.log('Forbidden');
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { apiAxios, apiRoutes };
