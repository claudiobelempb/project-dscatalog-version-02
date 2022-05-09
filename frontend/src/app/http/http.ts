import { useNavigate, Navigate } from 'react-router-dom';
import { getLocalStorage } from 'app/utils/functions/getLocalStorage';
import { BASE_URL } from '../utils/request';
import Axios, { AxiosRequestConfig } from 'axios';
import { UserLocalStorage } from '../types/UserLocalStorage';

const http = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: `Bearer ${
          getLocalStorage<UserLocalStorage>('@AuthUserLocalDsCatalogStorage')
            .access_token
        }`,
      }
    : { ...config.headers };

  return Axios({ ...config, baseURL: BASE_URL, headers });
};

export { http };

// Axios.interceptors.request.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const navigate = useNavigate();
//     if (error.response.status === 401 || error.reposnse.status === 403) {
//       return navigate('/admin/auth');
//     }
//     return Promise.reject(error);
//   },
// );

// Axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const navigate = useNavigate();
//     if (error.response.status === 401 || error.reposnse.status === 403) {
//       return navigate('/admin/auth');
//     }
//     return Promise.reject(error);
//   },
// );
