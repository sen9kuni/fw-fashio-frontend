import { combineReducers } from '@reduxjs/toolkit';

import authCustomer from './authCustomer';
import authSeller from './authSeller';
import getAllProducts from './getProducts';

const reducer = combineReducers({
  authCustomer,
  authSeller,
  getAllProducts
})

export default reducer