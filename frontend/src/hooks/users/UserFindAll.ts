import { AxiosResponse } from 'axios';
import { RequestClient } from 'app/http/RequestClient';
import { User } from 'app/types/User';

const UserFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<User> = await RequestClient({
    withCredentials: true,
    method: 'GET',
    url: '/api/users/',
    params: {
      page: 0,
      size: 12,
    },
  });
  return response;
};

export { UserFindAll };
