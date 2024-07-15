import React from 'react';
import InstructionList from './InstructionList';
import IngredientList from './IngredientList';
//import './InstructionsCard.css';

const InstructionsCard = ({ ingredients, instructions }) => (


    <div class="container">
    <div class="row">
      <div class="col-sm">
      <h2>Ingredients</h2>
      <IngredientList ingredients={ingredients} />
      </div>
      <div class="col-sm">
      <h2>Instructions</h2>
      <InstructionList instructions={instructions} />
      </div>
    </div>
  </div>
);

export default InstructionsCard;
