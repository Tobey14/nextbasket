'use-client'

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {WishListState} from '@/utils/interface';
import { Add, remove, getWishListFromLocalStorage } from '@/utils/wishList';


const initialState = { 
    isOpen: false,
    wishList: getWishListFromLocalStorage() || [],
} as WishListState

const wishListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleWishList(state: WishListState, action: PayloadAction<number>) {
      state.isOpen = action.payload;
    },
    getUserWishList(state: WishListState, action: PayloadAction<number>){   
        void(state.wishList = getWishListFromLocalStorage() || []);
    },
    addToWishList(state: WishListState, action: PayloadAction<number>){
        return Add(action.payload);
    },
    removeFromWishList(state: WishListState, action: PayloadAction<number>){
        return remove(action.payload);
    },
  },
  extraReducers: (builder: any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
  },
})

export const { toggleWishList, getUserWishList, addToWishList, removeFromWishList } = wishListSlice.actions
export default wishListSlice.reducer;