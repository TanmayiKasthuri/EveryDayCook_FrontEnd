import ImageComponent from '../SharedComponents/ImageComponent';
import React, { useEffect, useState } from 'react';
import Tags from '../SharedComponents/Tags';
import AlternateIngredientList from '../SharedComponents/AlternateIngredientList';
import InstructionsCard from '../SharedComponents/InstructionsCard';
import RecipeService from '../Services/RecipeService';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({recipeProp}) => {

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {

    setRecipe(recipeProp)
    
  }, []);

  const navigate = useNavigate();
  const handleRecipeClick = () => {
        navigate(`/recipe/${recipe.id}`);
    };

  if (!recipe || recipe === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-page">
        <div class="col"  onClick={handleRecipeClick}>
            <div class="card h-100">
            {/* <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                alt={recipe.name} /> */}
                        {/* {
            recipe.image_url
                ? <ImageComponent image_url={recipe.image_url} />
                : <ImageComponent image_url="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" />
        } */}
                {
                    recipe.image_url 
                        ? <img src={recipe.image_url} className="card-img-top" alt={recipe.name} />
                        : <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt={recipe.name} />
                }
            <div class="card-body">
                <h5 class="card-title">{recipe.name}</h5>
                <p class="card-text"><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p class="card-text"><strong>Type:</strong> {recipe.type.map(text => text.slice(0, 1).toUpperCase() + text.slice(1)).join(", ")}</p>
                    <p class="card-text"><strong>Time Category:</strong> {recipe.timeCategory.slice(0, 1).toUpperCase() + recipe.timeCategory.slice(1)}</p>
                    <Tags tags={recipe.tags} />
            </div>
           
            <div class="card-footer mouse-pointer">
                <small class="text-muted">View Detailed Recipe</small>
            </div> 

            </div>
        </div>

    </div>
  );
};

export default RecipeItem;
