import React, { useState } from 'react';
import RecipeList from '../SharedComponents/RecipeList';
import RecipeService from '../Services/RecipeService';

const RecipeFinder = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState({ allMatched: [], someMatched: [], oneMatched: [] });

  const parseIngredients = (input) => {
    return input.split(',').map(ingredient => ingredient.trim().toLowerCase());
  };
  
  const categorizeRecipes = (ingredients, recipes) => {
    const allMatched = [];
    const someMatched = [];
    const oneMatched = [];
  
    recipes.forEach(recipe => {
      const ingredientNames = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
      const matchedIngredients = []
      for(let i of ingredients)
        {
            for(let j of ingredientNames)
            {
                if(j.includes(i))
                {
                    matchedIngredients.push(j)
                }
            }
        }
    
      ingredients.filter(ing => ingredientNames.includes(ing));
      
      if (matchedIngredients.length === ingredients.length) {
        console.log("found")
        allMatched.push(recipe);
      } else if (matchedIngredients.length > 1) {
        someMatched.push(recipe);
      } else if (matchedIngredients.length === 1) {
        oneMatched.push(recipe);
      }
    });
  
    return {
      allMatched,
      someMatched,
      oneMatched
    };
  };
  

  const handleSearch = async () => {
    console.log(input)
    let parsedIngredients = parseIngredients(input);
    console.log(parsedIngredients)
    let recipes = await RecipeService.getAllRecipes();
    console.log(recipes)
    let categorizedResults = categorizeRecipes(parsedIngredients, recipes);
    console.log(categorizedResults)
    setResults(categorizedResults);
  };

  const handleClear = () => {
    setInput('');
    setResults({ allMatched: [], someMatched: [], oneMatched: [] });
  };

  return (
    <div className='container'>
      <h1 className='display-1'>Recipe Finder</h1>
      <h6 className='display-6'>Find the best recipes to cook with ingredients you have</h6>

      <span className="search-bar min-margin">
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter ingredients, comma separated" />
            <span class="input-group-text border-0 mouse-pointer" id="search-addon" onClick={handleSearch}>
                <i class="fas fa-search">Search</i>
            </span>
            <span class="input-group-text border-0 mouse-pointer" id="search-addon" onClick={handleClear}>
                <i class="fas fa-search">Clear</i>
            </span>
        </div>
    </span>
      
      <h2 className='display-4'>Recipes with All Ingredients</h2>
      {results.allMatched.length > 0 ? (
        <RecipeList recipes={results.allMatched} />
      ) : (
        <p>No recipes found with all the ingredients.</p>
      )}

      <h2 className='display-4'>Recipes with Some Ingredients</h2>
      {results.someMatched.length > 0 ? (
        <RecipeList recipes={results.someMatched} />
      ) : (
        <p>No recipes found with some of the ingredients.</p>
      )}

      <h2 className='display-4'>Recipes with One Ingredient</h2>
      {results.oneMatched.length > 0 ? (
        <RecipeList recipes={results.oneMatched} />
      ) : (
        <p>No recipes found with one ingredient.</p>
      )}
    </div>
  );
};

export default RecipeFinder;
