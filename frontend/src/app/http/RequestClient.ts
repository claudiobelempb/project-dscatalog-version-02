import { getLocalStorage } from 'app/utils/functions/getLocalStorage';
import { BASE_URL } from '../utils/request';
import Axios, { AxiosRequestConfig } from 'axios';
import { history } from '../utils/history';

const RequestClient = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: `Bearer ${
          getLocalStorage('@AuthUserLocalDsCatalogStorage').access_token
        }`,
      }
    : { ...config.headers };

  return Axios({ ...config, baseURL: BASE_URL, headers });
};

Axios.interceptors.request.use(
  function (config) {
    console.log('Request');
    return config;
  },
  function (error) {
    console.log('Request Error');
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  function (response) {
    console.log('Response');
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      history.push('/admin/auth/login');
    }
    console.log('Response error');
    return Promise.reject(error);
  },
);

export { RequestClient, history };
