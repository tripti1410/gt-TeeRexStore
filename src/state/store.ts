import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsReducer';
import counterReducer from '../components/product-card/counter';
import filtersReducer from './filtersReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productCount: counterReducer,
    filters: filtersReducer,
  },
});
