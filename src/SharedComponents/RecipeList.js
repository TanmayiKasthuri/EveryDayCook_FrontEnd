import React from 'react';
import RecipePage from '../Components/RecipePage';
import RecipeItem from './RecipeItem';


const RecipeList = ({ recipes }) => 
    {

        return (
            <>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {recipes.map((recipe, index) => (
                        <RecipeItem recipeProp={recipe}  key={recipe.id}/>
                    ))}
                </div>
            </>
            // <div className='recipe-list'>
            //   {recipes.map((recipe, index) => (
            //     <RecipePage recipeProp={recipe} showDetail={false} key={index}/>
            //   ))}
            // </div>
          )
    }
    ;

export default RecipeList;
