import { Product } from '../../app/types/Product';
import { http } from 'app/http/http';
import { AxiosResponse } from 'axios';

const ProductFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<Product> = await http({
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
