import { PostType } from '../../app/types/PostType';
import axios, { AxiosResponse } from 'axios';

const PostFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<PostType> = await axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
    url: '/posts',
  });

  return response;
};

export { PostFindAll };
