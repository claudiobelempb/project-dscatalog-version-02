import React, { FC, ReactNode } from 'react';
import { Route } from 'react-router-dom';

type PrivateRouteProps = {
  path: string;
  element: ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = (
  props: PrivateRouteProps,
) => {
  const logado = true;

  return logado && <Route {...props} />;
};

export { PrivateRoute };
