export const setLocalStorage = (name: string, obj: object) => {
  localStorage.setItem(name, JSON.stringify(obj));
};
