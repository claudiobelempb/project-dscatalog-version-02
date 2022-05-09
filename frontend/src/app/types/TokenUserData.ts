// type RolesPros = 'ROLE_OPERATOR' | 'ROLE_STUDENT' | 'ROLE_INSTRUCTOR';

import { Role } from './Role';

export type TokenUserData = {
  exp: number;
  user_name: string;
  authorities: Role;
};
