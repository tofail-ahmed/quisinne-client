import React from 'react';
import Health2 from '../assets/Health2.jpg'
import Health3 from '../assets/Health3.png'
import Health4 from '../assets/Health4.jpeg'
import health1 from '../assets/health1.avif'
import { Container } from 'react-bootstrap';

const RightNavBar = () => {
      return (
            <Container className='d-flex flex-column bg-secondary p-2 rounded-2'>

                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health2} alt="" />
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health3} alt="" />
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={Health4} alt="" />
                  <img style={{ width: '250px', height: '300px' }} className=' rounded-3 mt-2' src={health1} alt="" />
            </Container>
      );
};

export default RightNavBar;