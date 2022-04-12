import { Movies } from '../../app/types/Movies';
import axios, { AxiosResponse } from 'axios';

const MovieFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<Movies> = await axios({
    baseURL: 'https://api.b7web.com.br/',
    method: 'GET',
    url: '/cinema/',
  });

  return response;
};

export { MovieFindAll };
