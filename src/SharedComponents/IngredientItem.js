import React from 'react';

const IngredientItem = ({ ingredient }) => 
    {
        console.log("inside ingredient item component")
        console.log(ingredient)
        return (
            //   <li  className='list-group-item'></li>
            //   <li className="list-group-item">
            //     <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
            //     {ingredient}
            //   </li>
            
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"><input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />{ingredient.ingredient}</div>
              <small class="form-text text-muted">
              {ingredient.alternateIngredient.length == 0 ? <></> : <>Alternate Ingredient you can use: <strong> {ingredient.alternateIngredient.map(text => text.slice(0, 1).toUpperCase() + text.slice(1)).join(", ")}</strong></>}<br></br>
              </small>

            </div>
            <button class="badge badge-success rounded-pill">{ingredient.importance}</button>
            </li>
            )
    };

export default IngredientItem;
