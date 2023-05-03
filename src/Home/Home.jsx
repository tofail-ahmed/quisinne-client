import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RightNavBar from '../RightNavBar/RightNavBar';
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import HomeBanner from './HomeBanner/HomeBanner';
import { BsHandThumbsUp } from "react-icons/bs";


const Home = () => {
      const [chefs, setChefs] = useState([])
      useEffect(() => {
            fetch("http://localhost:5000/chefs/")
                  .then(res => res.json())
                  .then(data => setChefs(data))
      }, [])
      console.log(chefs);
      return (
            <Container >
                  <HomeBanner></HomeBanner>
                  <Row>
                        <Col lg={3}>
                              <RightNavBar></RightNavBar>
                        </Col>
                        <Col lg={6}>
                              <h2 className='text-center'>Some of Your Favorite Chefs are here</h2>
                              {
                                    chefs.map(chef => <div className='text-center d-flex border border-2 m-4 rounded-4  bg-info'>
                                          <img style={{ width: "300px", height: "300px" }} className='rounded-4  border border-4 me-4' src={chef.chefPic} alt="" />



                                          <div className=' d-flex flex-column align-items-start  my-auto'>
                                                <h2 className='my-3'>{chef.chefName}</h2>
                                                <h4 className='my-3'>Year Of experiences:{chef.experienceYears}</h4>
                                                <h5 className='my-3'>Numbers of Recipes:{chef.numRecipes}</h5>

                                                <div className='d-flex align-items-center justify-content-among'>
                                                      <p className='d-flex align-items-center 1'><BsHandThumbsUp></BsHandThumbsUp>9B</p>
                                                      <Button className='btn btn-warning flex-shrink-1'><Link className='text-dark text-decoration-none' to={`${chef.chef_id}`}>See Details</Link></Button>
                                                </div>
                                          </div>

                                    </div>

                                    )
                              }
                        </Col>
                        <Col lg={3}>
                              <LeftNavBar></LeftNavBar>
                        </Col>
                  </Row>

            </Container>
      );
};

export default Home;


// {
//       chefs.map(chef => <div className='text-center  '>
//             <h3>{chef.chefName}</h3>
//             <Button className='btn btn-warning'><Link to={`${chef.chef_id}`}>See Details</Link></Button>
//             <img className='w-50' src={chef.chefPic} alt="" />

//       </div>

//       )
// }



