import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../asyncActions/getProducts';

const initialState ={
  data: []
}

const getAllProducts = createSlice({
  name: 'products',
  initialState,
  reducers:{},
  extraReducers: (build)=> {
    build.addCase(getProducts.fulfilled, (state, action) => {
      // state.data = action.payload?.result
      if (action.payload.result) {
        state.data = action.payload?.result
      } else {
        state.data = []
      }
    })
  }
})

export { getProducts }
export default getAllProducts.reducer