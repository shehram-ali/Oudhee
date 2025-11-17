import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const getItemKey = (item) => item.code || item.id;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const key = getItemKey(item);

      const existing = state.cartItems.find((i) => getItemKey(i) === key);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const key = action.payload;
      const existing = state.cartItems.find((i) => getItemKey(i) === key);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter((i) => getItemKey(i) !== key);
      }
    },

    increaseQuantity: (state, action) => {
      const code = action.payload;
      const item = state.cartItems.find((i) => i.code === code);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const code = action.payload;
      const item = state.cartItems.find((i) => i.code === code);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
