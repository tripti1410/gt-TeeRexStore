import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from '../features/add-to-cart/add-to-cart-slice';
import filterSlice from '../features/filter/filter-slice';
import productListingSlice from '../features/products/product-api-slice';
import searchSlice from '../features/search/search-slice';

export const store = configureStore({
  reducer: {
    cart: addToCartReducer,
    filters: filterSlice,
    productListing: productListingSlice,
    searchInput: searchSlice,
  },
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
