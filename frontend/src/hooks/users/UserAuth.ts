import { setLocalStorage } from '../../app/utils/functions/setLocalStorage/index';
import qs from 'qs';
import { AxiosResponse } from 'axios';
import { CLEINT_ID, CLEINT_SECRET } from '../../app/utils/request';
import { http } from 'app/http/http';

type UserAuthProps = {
  username: string;
  password: string;
};

const UserAuth = async (user: UserAuthProps): Promise<UserAuthProps> => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${window.btoa(`${CLEINT_ID}:${CLEINT_SECRET}`)}`,
  };
  const data = qs.stringify({
    ...user,
    grant_type: 'password',
  });

  const response: AxiosResponse<UserAuthProps> = await http({
    method: 'POST',
    url: '/oauth/token',
    data,
    headers,
  });
  setLocalStorage('@AuthUserLocalDsCatalogStorage', response.data);
  return response.data;
};

export { UserAuth };
