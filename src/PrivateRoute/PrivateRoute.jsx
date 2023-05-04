import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
      const {user,loading}=useContext(Authcontext)
      const location=useLocation()
      if(loading){
            return <div>Loading........</div>
      }
      if(user){
            return children
      }
      return (
            <Navigate to={'/login'} state={{from:location}} replace>Login</Navigate>
      );
};

export default PrivateRoute;