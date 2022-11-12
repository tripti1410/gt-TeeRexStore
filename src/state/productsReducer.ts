import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from './data';

export const productsSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS,
  reducers: {},
});

export default productsSlice.reducer;
