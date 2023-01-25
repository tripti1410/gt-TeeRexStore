import { createSlice } from '@reduxjs/toolkit';

export const addTocart = createSlice({
  name: 'addToCart',
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    addProductToCart(state, payload) {
      const selectedProduct = payload.payload;
      const idProductSelected = state.selectedProducts.find(
        (product) => product.id === selectedProduct.id
      );
      if (idProductSelected) {
        state.selectedProducts.map((product) => {
          if (product.id === selectedProduct.id) {
            return {
              id: product.id,
              selectedQuantity: product.selectedQuantity++,
            };
          } else {
            return product;
          }
        });
      } else {
        const newProduct = { id: selectedProduct.id, selectedQuantity: 1 };
        state.selectedProducts.push(newProduct);
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
