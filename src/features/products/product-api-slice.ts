import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/data';

export const productListingSlice = createSlice({
  name: 'products',
  initialState: {
    products: PRODUCTS.map((product) => ({ ...product, selectedQuantity: 0 })),
    selectedFilters: {},
  },
  reducers: {
    addProductToProductListing(state, payload) {
      const selectedProduct = payload.payload;

      const idProductSelected = state.products.find(
        (product) => product.id === selectedProduct.id
      );
      if (idProductSelected) {
        state.products.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              ...product,
              selectedQuantity: product.selectedQuantity++,
            };
          } else {
            return { ...product, selectedQuantity: 1 };
          }
        });
      }
    },
    removeProductFromProductListing(state, payload) {
      const selectedProduct = payload.payload;

      const idProductSelected = state.products.find(
        (product) => product.id === selectedProduct.id
      );
      if (idProductSelected) {
        state.products.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              ...product,
              selectedQuantity: product.selectedQuantity--,
            };
          } else {
            return product;
          }
        });
      }
    },
    addFilter(state, payload) {
      const filter = payload.payload;
      if (
        Object.prototype.hasOwnProperty.call(
          state.selectedFilters,
          filter.filterName
        )
      ) {
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            [filter.filterName]: [
              ...state.selectedFilters[filter.filterName],
              filter.filterValue,
            ],
          },
        };
      } else {
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            [filter.filterName]: [filter.filterValue],
          },
        };
      }
    },
    removeFilter(state, payload) {
      const filter = payload.payload;
      const remainingFilters = [
        ...state.selectedFilters[filter.filterName],
      ].filter((item) => item !== filter.filterValue);

      if (remainingFilters.length <= 0) {
        delete state.selectedFilters[filter.filterName];
      } else {
        return {
          ...state,
          selectedFilters: {
            ...state.selectedFilters,
            [filter.filterName]: remainingFilters,
          },
        };
      }
    },
  },
});

export default productListingSlice.reducer;
export const {
  addProductToProductListing,
  removeProductFromProductListing,
  addFilter,
  removeFilter,
} = productListingSlice.actions;
