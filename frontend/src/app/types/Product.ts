import { Category } from './Category';

export type Product = {
  id?: number;
  name: string;
  description?: string;
  price: number;
  imgUrl: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string | null;
  categories?: Category[];
};
