import React from 'react'
import { Navigate } from 'react-router-dom'
import SignIn from '../pages/Signin'
import { LS } from '../utils/localStorageUtil'

const ProtectedSignIn = () => {

    const token = LS.get('token')
    
    if(token){

        return <Navigate to={'/NotAllow'} />

    }
    return !token && <SignIn />
}

export default ProtectedSignIn