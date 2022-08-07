import { createSlice } from '@reduxjs/toolkit'
import { loginSeller, registerSeller } from '../asyncActions/authSeller'

const initialState = {
  token: localStorage.getItem('token') || null,
  errorMsg: null,
  successMsg: null,
  email: null
}

const authSeller = createSlice({
  name: 'authSeller',
  initialState,
  reducers: {
    logoutSeller: (state, action) => {
      localStorage.removeItem('token')
      action.payload()
      return initialState
    },
    setEmailSeller: (state, action)=> {
      state.email = action.payload
    },
    deleteEmailSeller: (state, action) => {
      state.email = null
    }
  },
  extraReducers: (build) => {
    build.addCase(loginSeller.pending, (state) => {
      state.errorMsg = null
      state.successMsg = null
    })
    build.addCase(loginSeller.fulfilled, (state, action)=> {
      const token = action.payload?.token
      if (token) {
        state.token = token
        localStorage.setItem('token', token)
      } else {
        state.errorMsg = action.payload?.errorMsg
        state.successMsg = action.payload?.successMsg
      }
    })

    build.addCase(registerSeller.pending, (state) => {
      state.errorMsg = null;
      state.successMsg = null;
    })
    build.addCase(registerSeller.fulfilled, (state, action) => {
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    })
  }
})

export { loginSeller, registerSeller }
export const { logoutSeller, setEmailSeller, deleteEmailSeller } = authSeller.actions
export default authSeller.reducer