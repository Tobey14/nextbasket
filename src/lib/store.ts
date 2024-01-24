"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import productSlice from './features/products/productSlice';
import cartSlice from './features/cart/cartSlice';

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

});