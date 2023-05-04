import React from 'react';
import Notfound from '../assets/NotFound.jpg'

const NotFound = () => {
      return (
            <div className='text-center'>
                  <h2 className='text-danger fw-bold fst-italic'>404 Error!!!!</h2>
                  <h4>Sorry, The page you trying to access seems not available</h4>
                  <img className='w-50' src={Notfound} alt="" />
            </div>
      );
};

export default NotFound;