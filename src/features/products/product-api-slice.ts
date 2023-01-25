import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/data';

export const productListingSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS,
  reducers: {},
});

export default productListingSlice.reducer;
