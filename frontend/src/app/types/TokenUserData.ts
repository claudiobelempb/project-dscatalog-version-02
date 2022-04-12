type RolesPros = 'ROLE_OPERATOR' | 'ROLE_STUDENT' | 'ROLE_INSTRUCTOR';

export type TokenUserData = {
  exp: number;
  user_name: string;
  authorities: RolesPros[];
};
