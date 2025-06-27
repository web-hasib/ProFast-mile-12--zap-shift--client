import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation();
    const from = location.pathname
    if(loading){
        return <span className="loading text-primary loading-ring loading-xl"></span>
    }
    if(!user){
        return <Navigate state={{from}} to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;