import { TypeUserLocalStorage } from '../../../types/TypeUserLocalStorage';
export const getLocalStorage = (name: string) => {
  const str = localStorage.getItem(name) ?? '{}';
  return JSON.parse(str) as TypeUserLocalStorage;
};
