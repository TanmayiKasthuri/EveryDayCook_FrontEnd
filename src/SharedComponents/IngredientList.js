import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientList = ({ ingredients }) => 
    {
        console.log(ingredients)
        return (
            <ul className='list-group'>
              {ingredients.map((ingredient, index) => (
                <IngredientItem key={index} ingredient={ingredient} />
                  // <IngredientItem key={index} ingredient="ingredient"/>
              ))}
            </ul>
          )
    };

export default IngredientList;
