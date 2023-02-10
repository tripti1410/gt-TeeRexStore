import { createSlice } from '@reduxjs/toolkit';

export const addTocart = createSlice({
  name: 'addToCart',
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    addProductToCart(state, payload) {
      let selectedProduct = payload.payload.product;
      const idProductSelected = state.selectedProducts.find(
        (product) => product.id === selectedProduct.id
      );
      if (idProductSelected) {
        state.selectedProducts.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              ...product,
              selectedQuantity: product.selectedQuantity++,
            };
          } else {
            return product;
          }
        });
      } else {
        selectedProduct = {
          ...selectedProduct,
          selectedQuantity: 1,
        };

        state.selectedProducts.push(selectedProduct);
      }
    },
    removeProductFromCart(state, payload) {
      const selectedProduct = payload.payload;
      const idProductSelected = state.selectedProducts.find(
        (product) => product.id === selectedProduct.id
      );
      if (idProductSelected) {
        state.selectedProducts.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              id: product.id,
              selectedQuantity: product.selectedQuantity--,
            };
          } else {
            return product;
          }
        });
      }
    },
  },
});

export const { addProductToCart, removeProductFromCart } = addTocart.actions;
export default addTocart.reducer;
