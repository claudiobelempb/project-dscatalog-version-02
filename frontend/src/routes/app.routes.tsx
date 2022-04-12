import React from 'react';
import { useRoutes } from 'react-router-dom';

// import { Signin } from "../pages/Signin";
// import { List } from "../pages/List";
import Home from '../pages/Home';
import DashBoard from '../pages/DashBoard';
import HomeListProductPage from 'pages/HomeListProductPage';
import ProductDetail from 'pages/ProductDetail';
import DashboardListProductPage from 'pages/DashboardListProductPage';
import User from 'pages/User';
import Categories from 'pages/Categories';
import Auth from 'pages/Auth';
import NotFoundPage from 'pages/404';
import { PrivateRoute } from './PrivateRoute';
import Filme from 'pages/Movie';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/products', element: <HomeListProductPage /> },
    { path: '/products/:id', element: <ProductDetail /> },
    { path: '/movies', element: <Filme /> },
    {
      path: '/admin',
      element: (
        <PrivateRoute>
          <DashBoard />
        </PrivateRoute>
      ),
    },
    {
      path: '/admin/products',
      element: (
        <PrivateRoute>
          <DashboardListProductPage />
        </PrivateRoute>
      ),
    },
    {
      path: '/admin/categories',
      element: (
        <PrivateRoute>
          <Categories />
        </PrivateRoute>
      ),
    },
    {
      path: '/admin/users',
      element: (
        <PrivateRoute>
          <User />
        </PrivateRoute>
      ),
    },
    {
      path: '/admin/auth/login',
      element: <Auth />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
};

export { AppRoutes };
