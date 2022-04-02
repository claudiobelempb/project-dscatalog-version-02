import { Roles } from './Rules';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  roles: Roles[];
};
