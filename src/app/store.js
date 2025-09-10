import { configureStore } from '@reduxjs/toolkit'
import addCart  from '../features/addToCartSlice'


export const store = configureStore({
  reducer: {
    cart : addCart,
  },
})