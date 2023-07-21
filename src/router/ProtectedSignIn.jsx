import React from 'react'
import { Navigate } from 'react-router-dom'
import SignIn from '../pages/Signin'
import { LS } from '../utils/localStorageUtil'

const ProtectedSignIn = () => {
    const token = LS.get('token');
  
    const isLoggedIn = () => {
      return token
    };
  
    if (isLoggedIn()) {
      return <Navigate to={'/NotAllow'} />;
    }
  
    return <SignIn />;
  };

export default ProtectedSignIn