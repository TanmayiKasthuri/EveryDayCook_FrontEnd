import ImageComponent from '../SharedComponents/ImageComponent';
import React, { useEffect, useState } from 'react';
import Tags from '../SharedComponents/Tags';
import AlternateIngredientList from '../SharedComponents/AlternateIngredientList';
import InstructionsCard from '../SharedComponents/InstructionsCard';
//import './RecipePage.css';
import RecipeService from '../Services/RecipeService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import InstructionService from '../Services/InstructionService';
import IngredientService from '../Services/IngredientService';

const RecipePage = ({showDetail, recipeProp}) => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [instructionForRecipe, setInstructionForRecipe] = useState([]);
  const [ingredientsForRecipe, setIngredientsForRecipe] = useState([]);

  useEffect(() => {
    //const fetchedRecipe = RecipeService.getRecipeById(id);
    // const fetchRecipe = async () => {
    //     //console.log(id)
    //     setRecipe(showDetail ? await RecipeService.getRecipeById(parseInt(id)) : recipeProp);
    //     //console.log(recipe)
    // }
    const fetchRecipes = async () => {
        try {
          const recipeResponse = await RecipeService.getRecipeById(parseInt(id));
          console.log("called api");
          console.log(recipeResponse);
          setRecipe(recipeResponse)
        } catch (error) {
          console.error('Failed to fetch recipes:', error);
        }
      };

    const fetchInstructions = async () => {
        try
        {
            const instructionsResponse = await InstructionService.getInstructionsByRecipeId(parseInt(id))
            console.log("called api");
            console.log(instructionsResponse);
            setInstructionForRecipe(instructionsResponse);
        }
        catch(err)
        {
            console.error(err)
        }
    }

    const fetchIngredients = async () => {
        try
        {
            const ingredientsResponse = await IngredientService.getIngredientsByRecipeId(parseInt(id))
            console.log("called api");
            console.log(ingredientsResponse);
            setIngredientsForRecipe(ingredientsResponse);
        }
        catch(err)
        {
            console.error(err)
        }
    }
  
        if(showDetail)
        {
            fetchRecipes();
            fetchInstructions();
            fetchIngredients();
        }
        else
        {
            setRecipe(recipeProp)
        }
    
  }, [id]);


  if (!recipe || recipe === null) {
    return <p>Loading...</p>;
  }
  console.log(recipe.image_url)

  return (
    <div className="recipe-page container">


    <div class="container">
    <div class="row">
        <div class="col-6">
        {/* <ImageComponent image_url={recipe.image_url} /> */}
        {
            recipe.image_url
                ? <ImageComponent image_url={recipe.image_url} />
                : <ImageComponent image_url="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" />
        }

        </div>
        <div class="col-6 align-middle margin-50-top">
        
        <h3 class="card-title display-1">{recipe.name}</h3><br></br>
                    <p class="card-text">Cuisine:<strong> {recipe.cuisine}</strong></p>
                        <p class="card-text">Dietery Information: <strong>{recipe.type.map(text => text.slice(0, 1).toUpperCase() + text.slice(1)).join(", ")}</strong></p>
                        <p class="card-text">Time Category: <strong>{recipe.timeCategory.slice(0, 1).toUpperCase() + recipe.timeCategory.slice(1)}</strong></p>
                        <Tags tags={recipe.tags} />
        </div>
    </div>
    </div>
    <InstructionsCard 
        ingredients={ingredientsForRecipe} 
        instructions={instructionForRecipe} 
        />

        {/* <div class="col">
            <div class="card h-100">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                alt={recipe.name} />
            <div class="card-body">
                <h5 class="card-title">{recipe.name}</h5>
                <p class="card-text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p class="card-text"><strong>Type:</strong> {recipe.type.map(text => text.slice(0, 1).toUpperCase() + text.slice(1)).join(", ")}</p>
                    <p class="card-text"><strong>Time Category:</strong> {recipe.timeCategory.slice(0, 1).toUpperCase() + recipe.timeCategory.slice(1)}</p>
                    <Tags tags={recipe.tags} />
            </div>

            </div>
        </div> */}

    </div>
  );
};

export default RecipePage;
