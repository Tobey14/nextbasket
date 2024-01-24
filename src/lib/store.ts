"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import productSlice from './features/products/productSlice';
import cartSlice from './features/cart/cartSlice';
import wishListSlice from './features/wishList/wishListSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  wishList:wishListSlice
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch