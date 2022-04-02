import { Product } from '../../app/types/Product';
import { RequestClient } from 'app/http/RequestClient';
import { AxiosResponse } from 'axios';

const ProductFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<Product> = await RequestClient({
    method: 'GET',
    url: '/api/products/',
    params: {
      page: 0,
      size: 12,
    },
  });
  return response;
};

export { ProductFindAll };
