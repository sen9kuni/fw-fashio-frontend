import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoutes({ children }) {
  const token = useSelector((state)=> state.authCustomer.token)
  if (token){
    return children;
  }
  return <Navigate to='/' replace={true} state={{errorMsg: 'You are not costumer'}} />
}

export default PrivateRoutes