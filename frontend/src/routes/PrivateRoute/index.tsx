import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'app/utils/functions/isAuthenticated';

type RequestAuthProps = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<RequestAuthProps> = ({ children }) => {
  const isAuth = isAuthenticated();

  if (!isAuth) {
    return <Navigate to={{ pathname: '/admin/auth/login' }} />;
  }

  return children;
};

export { PrivateRoute };
