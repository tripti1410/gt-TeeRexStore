import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../app/data';

const abc = PRODUCTS.map((product) => ({ ...product, selectedQuanity: 0 }));
export const productListingSlice = createSlice({
  name: 'products',
  initialState: {
    products: abc,
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
              selectedQuanity: product.selectedQuanity++,
            };
          } else {
            return product;
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
              selectedQuanity: product.selectedQuanity--,
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

      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [filter.filterName]: [
            ...state.selectedFilters[filter.filterName],
          ].filter((item) => item !== filter.filterValue),
        },
      };
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
