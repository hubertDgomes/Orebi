import { configureStore } from '@reduxjs/toolkit'
import addCart, { quantityMinus, quantityPlus }  from '../features/addToCartSlice'


export const store = configureStore({
  reducer: {
    cart : addCart,
    add: quantityPlus,
    remove: quantityMinus,
    
  },
})