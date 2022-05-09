import { Role } from './Role';

export type Roles = {
  id?: number;
  authority: Role[];
  status?: 'ENABLED' | 'DISABLED';
  createdAt?: string;
  updatedAt?: string;
};
