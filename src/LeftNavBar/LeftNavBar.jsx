import React from 'react';
import fenchcuisine1 from '../assets/fenchcuisine1.jpg'
import fenchcuisine2 from '../assets/fenchcuisine2.avif'
import fenchcuisine3 from '../assets/fenchcuisine3.avif'
import fenchcuisine4 from '../assets/fenchcuisine4.avif'
import fenchcuisine6 from '../assets/fenchcuisine6.jpg'
import fenchcuisine7 from '../assets/fenchcuisine7.jpg'


const LeftNavBar = () => {
      return (
            <div>
            <h2 className='fw-bold'>Here is some more recipe From <span className='text-warning'>Quisinne de French</span></h2>
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine1} alt="" />
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine2} alt="" />
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine3} alt="" />
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine4} alt="" />
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine6} alt="" />
            <img style={{width:"300px",height:'300px'}} className=' m-3 border border-3 rounded-4' src={fenchcuisine7} alt="" />

            </div>
      );
};

export default LeftNavBar;