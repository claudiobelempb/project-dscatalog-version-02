import React from 'react';
import { removeLocalStorage } from '../removeLocalStorage';
// import { Navigate } from 'react-router-dom';
import { AuthUserLocalDsCatalogStorage } from 'app/utils/request';

export const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  removeLocalStorage(AuthUserLocalDsCatalogStorage);
};
