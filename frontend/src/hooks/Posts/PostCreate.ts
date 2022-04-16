import { PostCreateType } from '../../app/types/PostType';
import axios, { AxiosResponse } from 'axios';

const PostCreate = async (post: PostCreateType): Promise<PostCreateType> => {
  const response: AxiosResponse<PostCreateType> = await axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'POST',
    url: '/posts',
    data: post,
  });

  return response.data;
};

export { PostCreate };
