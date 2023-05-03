import React from 'react';
import quisinneHomeBanner from '../../assets/quisinneHomeBanner.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import './HomeBanner.css'


const HomeBanner = () => {
      return (
            <Container>
                  {/* <img id='HomeBannerImg'  className='w-100' src={quisinneHomeBanner} alt="" /> */}
                  <div className='HomeBannerText mb-3'>
                        <Row>
                              <Col lg={6}>
                              </Col>
                              <Col lg={6}>

                                    <h1>Welcome To <span className='text-danger'>Quisinne De Fench</span></h1>
                                    <h4 className='text-white'>Eat Helathy, Stay Haelthy</h4>
                                    <h3>We Provide World's Best French Cuisine By world's Top Chefs</h3>
                              </Col>
                        </Row>




                  </div>

            </Container>
      );
};

export default HomeBanner;