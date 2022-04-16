import { PostType } from '../../app/types/PostType';
import axios, { AxiosResponse } from 'axios';

const PostFindById = async (id: string): Promise<PostType> => {
  const response: AxiosResponse<PostType> = await axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
    url: `/posts/${id}`,
  });

  return response.data;
};

export { PostFindById };
