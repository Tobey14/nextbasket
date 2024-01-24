'use-client'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {CartState} from '@/utils/interface';
import { Add, remove, minusOne, getCartFromLocalStorage } from '@/utils/cart';


const initialState = { 
    isOpen: false,
    cart: getCartFromLocalStorage() || [],
    favorites: [],
} as CartState

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleCart(state: CartState, action: PayloadAction<number>) {
      state.isOpen = action.payload;
    },
    getUserCart(state: CartState, action: PayloadAction<number>){   
        void(state.cart = getCartFromLocalStorage() || []);
    },
    addToCart(state: CartState, action: PayloadAction<number>){
        console.log({action})
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