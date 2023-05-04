import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
import { FaFacebookSquare,FaGithub,FaTwitterSquare,FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
      return (
            <div  className=' quisinne-footer mt-3 p-3 '>
                 <Container>
                  <Row>

                  <Col className='mx-auto'>
                  <h3>Quisinne de French</h3>
                  <h5>Getting in touch is Easy</h5>
                  <p>32/#3A,French Street,Paris</p>
                  <p>+991110000022</p>
                  <p>Quisinne@French.com</p>
                  <p className='fs-2'><FaFacebookSquare></FaFacebookSquare><FaInstagramSquare></FaInstagramSquare><FaGithub></FaGithub><FaTwitterSquare></FaTwitterSquare></p>
                  
                  </Col>
                  <Col>
                  <Form className='d-flex flex-column'>

                        <input className='my-3 w-50 rounded-2 p-2 fw-bold' type="text" name="" id="" placeholder='Name' />
                        <input className='my-3 w-50 rounded-2 p-2 fw-bold' type="email" name="" id="" placeholder='Email' />
                        <input className='my-3 w-50 rounded-2 p-2 fw-bold' type="phone" name="" id="" placeholder='Telephone' />
                        <input className='my-3 w-50 rounded-2 p-2 fw-bold' type="Comment" name="" id="" placeholder='Comment' />
                        <button className='btn btn-success w-25'>Submit</button>
                  </Form>
                  
                  </Col>
                  </Row>
                  </Container>
            </div>
      );
};

export default Footer;