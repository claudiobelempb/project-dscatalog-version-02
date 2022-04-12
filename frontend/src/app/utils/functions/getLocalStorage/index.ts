export const getLocalStorage = <T>(name: string): T => {
  const str = localStorage.getItem(name) ?? '{}';
  return JSON.parse(str) as T;
};
