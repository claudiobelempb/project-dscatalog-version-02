import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { isAuthenticated } from 'app/utils/functions/isAuthenticated';

type RequestAuthProps = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<RequestAuthProps> = ({ children }) => {
  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to={{ pathname: '/admin/auth/login' }} />
  );
};

export { PrivateRoute };
