import { combineReducers } from '@reduxjs/toolkit';

import authCustomer from './authCustomer';
import authSeller from './authSeller';

const reducer = combineReducers({
  authCustomer,
  authSeller
})

export default reducer