import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
      const chef = useLoaderData()
      const { chefName, chefPic, recipes } = chef
      return (
            <div>
                  <h2>details comming soon......</h2>
                  <h1>{chefName}</h1>
                  <img src={chefPic} alt="" />
                  {recipes.map(recipe =>
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

                  )
                  }
            </div>
      );
};

export default ChefDetails;