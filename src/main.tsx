import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ErrorPage from './pages/error-page/error-page';
import ShoppingCart from './pages/shopping-cart/shopping-cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
