'use-client'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@/utils/api';
import type { PayloadAction } from '@reduxjs/toolkit';
import {CounterState, Product} from '@/utils/interface';
import { addActiveProductToLocalStorage, getActiveProductFromLocalStorage } from '@/utils/localstorage';
const initialState = { 
    isLoading: false,  
    products:[],
    totalProducts:0,
    productFetchStatus:null,
    activeProduct: getActiveProductFromLocalStorage() || {
        category: '',
        id: 0,
        price: 0,
        thumbnail: '',
        title: '',
        discountPercentage: 0,
        images: [],
        rating: 1,
        stock: 0,
        description:'',
        brand:'',
        quantity:0,
    },
} as CounterState

export const fetchProducts = createAsyncThunk(
  '/products',
  async (data:number, thunkAPI: any) => {
    try {
        let url = `products/?limit=${data}&select=title,thumbnail,price,discountPercentage,category,rating`;
        let method = 'get'
        const response = await api.get(url)
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
    
  }
)

export const fetchSingleProduct = createAsyncThunk(
    '/products/1',
    async (data:number, thunkAPI: any) => {
      try {
        console.log('yes', {data})
          let url = `products/${data}`;
          let method = 'get'
          const response = await api.get(url)
          console.log(response);
          return response.data
      } catch (error) {
          console.log(error);
      }
      
    }
  )

const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setActiveProduct(state: CounterState, action: PayloadAction<Product>) {
      state.activeProduct = action.payload;
      addActiveProductToLocalStorage(action.payload);
    },
    
  },
  extraReducers: (builder: any) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fetchProducts.pending, (state: CounterState) => {
      state.isLoading = true;
      state.productFetchStatus = 'pending';
    })
    .addCase(fetchProducts.fulfilled, (state: CounterState, action: PayloadAction<number>) => {
        state.products = action.payload.products;
        state.isLoading = false;
        state.totalProducts = action.payload.total;
        state.productFetchStatus = 'fulfilled';
    })
    .addCase(fetchProducts.rejected, (state: CounterState, action: PayloadAction<number>) => {
          state.isLoading = false;
        state.productFetchStatus = 'failed';
    })
    .addCase(fetchSingleProduct.pending, (state: CounterState) => {
      state.isLoading = true;
      state.productFetchStatus = 'pending';
    })
    .addCase(fetchSingleProduct.fulfilled, (state: CounterState, action: PayloadAction<number>) => {
        state.isLoading = false;
        state.activeProduct = action.payload;
        addActiveProductToLocalStorage(action.payload);
        state.productFetchStatus = 'fulfilled';
    })
    .addCase(fetchSingleProduct.rejected, (state: CounterState, action: PayloadAction<number>) => {
          state.isLoading = false;
        state.productFetchStatus = 'failed';
    })
  },
})

export const { setActiveProduct } = productSlice.actions
export default productSlice.reducer