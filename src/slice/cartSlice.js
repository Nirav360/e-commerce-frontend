import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: [],
  subtotal: 0,
  shippingCharges: 0,
  tax: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductsInCart: (state, action) => {
      const cartPayload = action.payload;
      // const index = state.cartState.findIndex((i) => i.id === payload.id);
      // if (index !== -1) state.cartState[index] = payload;
      // else state.cartState.push(payload);
      // if (state.cartState.some((val) => val.id === payload.id)) return; //condition to not add same products in cart which is present in it.
      // state.cartState = [...state.cartState, payload];
      state.cartState = cartPayload.products;
      state.subtotal = cartPayload.bill;
      state.shippingCharges = 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total = state.subtotal + state.tax + state.shippingCharges;
    },
    removeProductsFromCart: (state, action) => {
      state.cartState = state.cartState.filter((i) => i.id !== action.payload);
    },
    calculatePrice: (state) => {
      // Function to calculate subtotal for a single item
      const calculateItemSubtotal = (item) => {
        return item.price * item.quantity;
      };

      // Function to calculate total subtotal for all items in the cart
      const calculateTotalSubtotal = () => {
        return state.cartState.reduce(
          (total, item) => total + calculateItemSubtotal(item),
          0
        );
      };
      state.subtotal = calculateTotalSubtotal();
      state.shippingCharges = 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total = state.subtotal + state.tax + state.shippingCharges;
    },
    resetCart: () => initialState,
  },
});

export const {
  addProductsInCart,
  removeProductsFromCart,
  calculatePrice,
  resetCart,
} = cartSlice.actions;
export const cartProducts = (state) => state.cart;
export default cartSlice.reducer;
