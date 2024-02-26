import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductsInCart: (state, action) => {
      const { payload } = action;
      if (state.cartState.some((val) => val.id === payload.id)) return; //condition to not add same products in cart which is present in it.
      state.cartState = [...state.cartState, payload];
    },
  },
});

export const { addProductsInCart } = cartSlice.actions;
export const cartProducts = (state) => state.cart.cartState;
export default cartSlice.reducer;
