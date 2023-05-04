import React from 'react';
import quisinneHomeBanner from '../../assets/quisinneHomeBanner.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomeBanner.css'
import { FaFacebookF, FaWhatsappSquare, FaTwitterSquare } from "react-icons/fa";


const HomeBanner = () => {
      return (
            <Container>
                  {/* <img id='HomeBannerImg'  className='w-100' src={quisinneHomeBanner} alt="" /> */}
                  <div className='HomeBannerText mb-3'>
                        <Row>
                              <Col lg={6}>
                              </Col>
                              <Col lg={6}>

                                    <h3>Welcome To <br /> <h1 className='text-danger'>Quisinne De Fench</h1></h3>
                                    <h4 className='text-info'>Eat Helathy, Stay Haelthy</h4>
                                    <h3>We Provide World's Best French Cuisine By world's Top Chefs</h3>
                                    <div>
                                          <h4 className='text-white'>Find us on</h4>

                                          <div className='d-flex flex-column'>
                                                <h4 className='text-info btn btn-secondary w-50'>FaceBook <FaFacebookF></FaFacebookF></h4>
                                                <h4 className='text-info btn btn-secondary w-50'>Whatsapp <FaWhatsappSquare></FaWhatsappSquare></h4>
                                                <h4 className='text-info btn btn-secondary w-50'>Twitter <FaTwitterSquare></FaTwitterSquare></h4>
                                          </div>
                                          </div>
                              </Col>
                        </Row>




                  </div>

            </Container>
      );
};

export default HomeBanner;