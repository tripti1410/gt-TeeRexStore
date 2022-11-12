import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import ErrorPage from './pages/error-page/error-page';
import ShoppingCart from './pages/shopping-cart/shopping-cart';
import { store } from './state/store';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
