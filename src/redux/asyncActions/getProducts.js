import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getProducts = createAsyncThunk('products/all', async () => {
  const result = {}
  try {
    const { data } = await http().get('/allProducts')
    console.log(data);
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})