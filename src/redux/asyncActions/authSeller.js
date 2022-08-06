import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs'
import http from '../../helpers/http';

// login
export const loginSeller = createAsyncThunk('authSeller/login', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('authSeller/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
    result.token = data.results.token
    return result
  } catch (e) {
    result.errorMsg = e.response.data.message
    return result
  }
})
// login

// register
export const registerSeller = createAsyncThunk('authSeller/register', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data } = await http().post('/authSeller/register', send, {
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
export const resetPasswordSeller = createAsyncThunk('authSeller/changePassword', async (request) => {
  const result = {}
  try {
    const send = qs.stringify(request)
    const { data }= await http().post('authSeller/change-password', send, {
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