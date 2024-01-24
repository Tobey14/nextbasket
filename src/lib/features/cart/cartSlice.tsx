'use-client'

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {CartState} from '@/utils/interface';
import { Add, remove, minusOne, getCartFromLocalStorage } from '@/utils/cart';


const initialState = { 
    isOpen: false,
    cart: getCartFromLocalStorage() || [],
} as CartState

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleCart(state: CartState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    getUserCart(state: CartState){   
        void(state.cart = getCartFromLocalStorage() || []);
    },
    addToCart(state: CartState, action: PayloadAction<number>){
        return Add(action.payload);
    },
    removeFromCart(state: CartState, action: PayloadAction<number>){
        return remove(action.payload);
    },
    minusOneFromCart(state: CartState, action: PayloadAction<number>){
        if(action.payload.quantity < 2){
            return;
        }
        return minusOne(action.payload);
    },
  },
  extraReducers: (builder: any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
  },
})

export const { toggleCart, getUserCart, addToCart, removeFromCart, minusOneFromCart } = cartSlice.actions
export default cartSlice.reducer;