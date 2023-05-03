import React from 'react';
import Health2 from '../assets/Health2.jpg'
import Health3 from '../assets/Health3.png'
import Health4 from '../assets/Health4.jpeg'
import health1 from '../assets/health1.avif'
import { Container } from 'react-bootstrap';

const RightNavBar = () => {

      return (
            <Container className='d-flex flex-column bg-secondary p-2 rounded-2 mx-auto mt-5'>
                  <h3>Here is some Health tips for you</h3>

                  <h5 className='text-bold bg-info mt-5 mb-2 p-2 rounded-4'>Tips For Your Brain</h5>
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health2} alt="" />
                  <h5 className='text-bold bg-info mt-5 mb-2 p-2 rounded-4'>Valuable Health Tips</h5>
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health3} alt="" />
                  <h5 className='text-bold bg-info mt-5 mb-2 p-2 rounded-4'>Myths Uncovered</h5>
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health4} alt="" />
                  <h5 className='text-bold bg-info mt-5 mb-2 p-2 rounded-4'>Tips For Your Heart</h5>
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={health1} alt="" />
            </Container>
      );
};

export default RightNavBar;