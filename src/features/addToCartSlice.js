import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const addToCartSlice = createSlice({
  name: 'counter',
  initialState:{
    value:[],
  },
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
  },
})

export const { addCart } = addToCartSlice.actions

export default addToCartSlice.reducer