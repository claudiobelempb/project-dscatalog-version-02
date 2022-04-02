import React from 'react';
import { Navigate } from 'react-router-dom';

type RequestAuthProps = {
  children: JSX.Element;
};

const RequestAuth: React.FC<RequestAuthProps> = ({ children }) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={'/admin/auth/login'} />;
  }

  return children;
};

export { RequestAuth };
