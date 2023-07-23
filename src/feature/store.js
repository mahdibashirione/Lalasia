import { createStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import React from "react";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer);

export default store;
