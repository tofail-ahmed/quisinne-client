import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import chefDetailsbanner from '../assets/chefDetailsbanner.jpg'
import './ChefDetails.css'


const ChefDetails = () => {
      const chef = useLoaderData()
      const { chefName, chefPic, recipes, description, numRecipes, experienceYears } = chef
      return (
            <Container>

                  <div className='chefDetailsBannerText border border-4 rounded-4 d-flex my-3'>

                        <img style={{ width: "300px", height: "300px" }} className='rounded-4  border border-4 me-4' src={chefPic} alt="" />

                        <div>
                              <h1>{chefName}</h1>
                              <h6><span className='fw-bold text-info'>Short bio of {chefName}:</span>{description}</h6>
                              <p>Likes:9B</p>
                              <h5>Number Of Recipes:{numRecipes}</h5>
                              <p>Experienced of {experienceYears} Years</p>
                        </div>

                  </div>
                  <h3>Here Is Some Famous Recipes Of <span className='fw-bold text-info'>{chefName}</span></h3>
                  {recipes.map(recipe =>
                        <div>

                              <img style={{ height: '300px' }} className='w-25 rounded rounded-circle' src={recipe.recipe_pic} alt="" />

                              <div>
                                    <h2>Recipes: {recipe.recipeName}</h2>
                                    <p>cookingMethod:{recipe.cookingMethod}</p>
                                    <p>description:{recipe.description}</p>
                                    <h4>Ingredients</h4>
                                    <p>1.{recipe.ingredients[0]}</p>
                                    <p>2.{recipe.ingredients[1]}</p>
                                    <p>3.{recipe.ingredients[2]}</p>
                                    <p>4.{recipe.ingredients[3]}</p>
                                    <p>5.{recipe.ingredients[4]}</p>
                              </div>

                        </div>

                  )
                  }
            </Container>
      );
};

export default ChefDetails;