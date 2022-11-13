import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page/error-page';
import ShoppingCart from './pages/shopping-cart/shopping-cart';
import { store } from './state/store';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import ProductListing from './pages/product-listing/product-listing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductListing />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />,
  },
]);

function BaseLayout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </React.StrictMode>
);
