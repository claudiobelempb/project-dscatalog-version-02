import { AxiosResponse } from 'axios';
import { http } from 'app/http/http';
import { User } from 'app/types/User';

const UserFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<User> = await http({
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
