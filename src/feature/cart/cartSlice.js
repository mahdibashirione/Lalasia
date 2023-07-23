import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("lalasiaCart")) || [],
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("lalasiaCart", JSON.stringify(state));
    },
    incrementItemCart: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      item.quantity += 1;
      localStorage.setItem("lalasiaCart", JSON.stringify(state));
    },
    dicrementItemCart: (state, action) => {
      const indexItem = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state[indexItem].quantity > 1) {
        state[indexItem].quantity -= 1;
        localStorage.setItem("lalasiaCart", JSON.stringify(state));
      }
    },
    removeItemCart: (state, action) => {
      const indexItem = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.length > 1) {
        state = state.splice(indexItem, 1);
        localStorage.setItem("lalasiaCart", JSON.stringify(state));
      } else {
        state = state.splice(indexItem, 1);
        localStorage.clear("lalasiaCart");
      }
    },
  },
});

export const {
  addToCart,
  incrementItemCart,
  removeItemCart,
  dicrementItemCart,
} = cartSlice.actions;
export default cartSlice.reducer;
