import { TokenUserData } from './TokenUserData';

export type AuthUserData = {
  authenticated: boolean;
  tokenUserdata?: TokenUserData;
};
