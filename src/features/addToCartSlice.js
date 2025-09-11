import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const addToCartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCart: (state,action) => {
      let allData = state.value.find(item=>item.title === action.payload.title)
      if(allData){
        allData.quantity += 1;
      }
      else{
        state.value.push({...action.payload,quantity:1})
      }
    },
    quantityPlus: (state,action)=>{
      let get = state.value.find(item=> item.title === action.payload)
      if(get){
        get.quantity += 1
      }
    },
    quantityMinus: (state,action)=>{
      let get = state.value.find(item=> item.title === action.payload)
      if(get && get.quantity > 0){
        get.quantity -= 1
      }
    },
  },
})

export const { addCart, quantityPlus, quantityMinus} = addToCartSlice.actions

export default addToCartSlice.reducer