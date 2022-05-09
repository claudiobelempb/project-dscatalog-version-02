import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'app/utils/functions/isAuthenticated';
import { HasAnyRoles } from 'app/utils/functions/HasAnyRoles';
import { Role } from 'app/types/Role';

type RequestAuthProps = {
  children: JSX.Element;
  roles?: Role[];
};

const PrivateRoute: React.FC<RequestAuthProps> = ({ children, roles = [] }) => {
  return !isAuthenticated() ? (
    <Navigate to={{ pathname: '/admin/auth/login' }} />
  ) : !HasAnyRoles(roles) ? (
    <Navigate to={{ pathname: '/admin' }} />
  ) : (
    children
  );
};

export { PrivateRoute };
