import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

export const rootReducer = combineReducers({ cart: cartReducer });
