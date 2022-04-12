import jwtDecode from 'jwt-decode';

import { TokenUserData } from 'app/types/TokenUserData';
import { getLocalStorage } from '../getLocalStorage';
import { UserLocalStorage } from 'app/types/UserLocalStorage';
import { AuthUserLocalDsCatalogStorage } from 'app/utils/request';

export const getTokenData = (): TokenUserData | undefined => {
  const userLocalStorage = getLocalStorage<UserLocalStorage>(
    AuthUserLocalDsCatalogStorage,
  );

  try {
    return jwtDecode(userLocalStorage.access_token) as TokenUserData;
  } catch (error) {
    return undefined;
  }
};
