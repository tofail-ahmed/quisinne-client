import React, { useState } from 'react';
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import chefDetailsbanner from '../assets/chefDetailsbanner.jpg'
import './ChefDetails.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ChefDetails = () => {
      
      const chef = useLoaderData()
      const { chefName, chefPic, recipes, description, numRecipes, experienceYears } = chef
      const [clicked, setClicked] = useState(false)
      const handleAddToFavorite = () => {
            setClicked(true)
            toast("Added to favorite list!")
            
      }
      return (
            <Container>

                  <div className='chefDetailsBannerText border border-4 rounded-4 d-flex my-3'>
                        <Row>
                              <Col>
                                    <img style={{ width: "300px", height: "300px" }} className='rounded-4  border border-4 me-4' src={chefPic} alt="" />
                              </Col>
                              <Col>
                                    <div>
                                          <h1>{chefName}</h1>
                                          <h6><span className='fw-bold text-info'>Short bio of {chefName}:</span>{description}</h6>
                                          <p>Likes:9B</p>
                                          <h5>Number Of Recipes:{numRecipes}</h5>
                                          <p>Experienced of {experienceYears} Years</p>
                                    </div>
                              </Col>
                        </Row>
                  </div>
                  <h3 className='text-warning fw-bolder'>Here Is Some Famous Recipes Of <span className='fw-bold text-info'>{chefName}</span></h3>
                  {recipes.map(recipe =>
                        <div className='d-flex recipe-details my-4 p-3 rounded-3'>

                              <Row>
                                    <Col lg={6}>
                                          <div>
                                                <h2><span className='fw-bold'>Recipe:</span> {recipe.recipeName}</h2>
                                                <p><span className='fw-bold'>cookingMethod:</span>{recipe.cookingMethod}</p>
                                                <p><span className='fw-bold'>Recipe Description:</span>{recipe.description}</p>
                                                <h4>Ingredients</h4>
                                                <div className='d-flex g-2'>
                                                      <p>1.{recipe.ingredients[0]}</p>
                                                      <p>2.{recipe.ingredients[1]}</p>
                                                      <p>3.{recipe.ingredients[2]}</p>
                                                      <p>4.{recipe.ingredients[3]}</p>
                                                      <p>5.{recipe.ingredients[4]}</p>
                                                </div>
                                                <div className='d-flex align-item-center justify-content-between'>
                                                      <p>Rating:{recipe.rating}</p>
                                                      {
                                                            !clicked && <Button  onClick={handleAddToFavorite } className='btn btn-info'>Add to Favorite</Button>
                                                      }
                                                      
                                                </div>
                                          </div>
                                    </Col>
                                    <Col lg={6} className='text-center'>
                                          <img style={{ height: '300px', width: "300px" }} className=' rounded rounded-circle' src={recipe.recipe_pic} alt="" />
                                    </Col>
                              </Row>

                        </div>

                  )
                  }
                  <ToastContainer />
            </Container>
      );
};

export default ChefDetails;