import React from 'react';

import './ActiveLink.css'
import { NavLink } from 'react-router-dom';



const ActiveLink = ({ to, children }) => {
      return (
            <NavLink
                  to={to}
                  className={({ isActive }) =>
                        isActive
                              ? "btn btn-danger mx-2"


                              : "btn btn-primary mx-2"
                  }
            >
                  {children}
            </NavLink>

      );
};

export default ActiveLink;
