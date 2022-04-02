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
import { RequestAuth } from 'app/http/RequestAuth';

const AppRoutes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/products', element: <HomeListProductPage /> },
    { path: '/products/:id', element: <ProductDetail /> },
    { path: '/admin', element: <DashBoard /> },
    {
      path: '/admin/products',
      element: (
        <RequestAuth>
          <DashboardListProductPage />
        </RequestAuth>
      ),
    },
    {
      path: '/admin/categories',
      element: (
        <RequestAuth>
          <Categories />
        </RequestAuth>
      ),
    },
    {
      path: '/admin/users',
      element: (
        <RequestAuth>
          <User />
        </RequestAuth>
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
  /*return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<DashBoard />} />
      <Route
        path="/admin/products"
        element={
          <RequestAuth>
            <Products />
          </RequestAuth>
        }
      />
      <Route
        path="/admin/categories"
        element={
          <RequestAuth>
            <Categories />
          </RequestAuth>
        }
      />
      <Route
        path="/admin/users"
        element={
          <RequestAuth>
            <User />
          </RequestAuth>
        }
      />
      <Route path="/admin/auth/login" element={<Auth />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );*/
};

export { AppRoutes };
