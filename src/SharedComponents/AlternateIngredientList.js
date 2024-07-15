import React from 'react';
import AlternateIngredientItem from './AlternateIngredientItem';

const AlternateIngredientList = ({ alternateIngredients }) => (
  <>
  <h2>Alternate Ingredients</h2>
  <ul>
    {Object.keys(alternateIngredients).map(key => (
      <AlternateIngredientItem key={key} original={key} alternatives={alternateIngredients[key]} />
    ))}
  </ul>
  </>

);

export default AlternateIngredientList;
