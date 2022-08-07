import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
  const token = useSelector((state)=> state.authCustomer.token)
  const token2 = useSelector((state)=> state.authSeller.token)
  if (token || token2){
    return children;
  }
  return <Navigate to='/' replace={true} state={{errorMsg: 'Not Login Yet'}} />
}

export default PrivateRoutes