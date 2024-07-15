import React from 'react';

const AlternateIngredientItem = ({ original, alternatives }) => (
  <li>
    {original}: {alternatives.join(', ')}
  </li>
);

export default AlternateIngredientItem;
