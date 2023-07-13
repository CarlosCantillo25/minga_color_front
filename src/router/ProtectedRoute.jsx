import React from 'react'
import { Navigate} from 'react-router-dom'
import Register from "../pages/Register"
import { LS } from '../utils/localStorageUtil'

const ProtectedRoute = () => {

   let token = LS.get('token')
    
    if(token){

        return <Navigate to={'/NotAllow'} />

    }
    return !token && <Register />
}

export default ProtectedRoute
