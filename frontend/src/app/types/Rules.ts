export type Roles = {
  id?: number;
  authority: 'ROLE_OPERATOR' | 'ROLE_STUDENT' | 'ROLE_INSTRUCTOR';
  status?: 'ENABLED' | 'DISABLED';
  createdAt?: string;
  updatedAt?: string;
};
