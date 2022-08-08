import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

// login
export const loginCustomer = createAsyncThunk('authCustomer/login', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/login-costumer', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.token = data.result.token
    console.log(data);
    return result
  } catch (e) {
    result.errorMsg = e.response.data.message
    return result
  }
})
// login

// register
export const registerCustomer = createAsyncThunk('authCustomer/register', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/register-costumer', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})
// register

// reset pasword
export const resetPasswordCustomer = createAsyncThunk('authCustomer/changePassword', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data }= await http().post('authCustomer/change-password', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
})
// reset pasword

// get all address
export const getAllAddress = createAsyncThunk('authCustomer/get-all-address', async (token) => {
  const result = {}
  try {
    const { data } = await http(token).get('/address-costumer')
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})
// get all address

// get address by id
export const getAddresById = createAsyncThunk('authCustomer/get-address-by-id', async (param)=> {
  const result = {}
  const token = param.token
  const setId = param.id
  console.log(token);
  console.log(setId);
  try {
    const { data } = await http(token).get(`/address-costumer/${setId}`)
    return data
  } catch (e) {
    result.message = e.response.data?.message;
    return result
  }
})
// get address by id

