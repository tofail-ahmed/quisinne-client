import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      const {user,loading}=useContext(Authcontext)
      const location=useLocation()
      if(loading){
            return <div><div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div></div>
      }
      if(user){
            return children
      }
      return (
            <Navigate to={'/login'} state={{from:location.pathname}} replace>Login</Navigate>
      );
};

export default PrivateRoute;