import { isAuthenticated } from 'app/utils/functions/isAuthenticated';
import React from 'react';
import { Navigate } from 'react-router-dom';

type RequestAuthProps = {
  children: JSX.Element;
};

const RequestAuth: React.FC<RequestAuthProps> = ({ children }) => {
  const isAuth = true;

  if (isAuthenticated()) {
    return <Navigate to={'/admin'} />;
  } else {
    <Navigate to={'/admin/auth/login'} />;
    return children;
  }
};

export { RequestAuth };
