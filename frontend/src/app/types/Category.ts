import { Product } from './Product';

export type Category = {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  products?: Product[];
};
