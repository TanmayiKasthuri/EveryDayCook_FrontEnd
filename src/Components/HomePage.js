import React, { useEffect, useState } from 'react';
import RecipeList from '../SharedComponents/RecipeList';
import RecipeService from '../Services/RecipeService';
import SearchBar from '../SharedComponents/SearchBar';

const HomePage = () => 
    {
        const [recipes, setRecipes] = useState([]);
        const [filteredRecipes, setFilteredRecipes] = useState([]);
      
        useEffect(() => {
            const fetchRecipes = async () => {
                try {
                  const allRecipes = await RecipeService.getAllRecipes();
                //   console.log("called api");
                  setRecipes(allRecipes);
                  setFilteredRecipes(allRecipes);
                //   console.log(allRecipes);
                } catch (error) {
                  console.error('Failed to fetch recipes:', error);
                }
              };
          
              fetchRecipes();
        }, []);

        const handleSearch = (searchTerm) => {
            handleClear();
            console.log(searchTerm)
            const matchingRecipes = recipes.filter(recipe =>
              recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            console.log(matchingRecipes)
            setFilteredRecipes(matchingRecipes);
          };
        
        const handleClear = () => {
        setFilteredRecipes(recipes);
        };
      
        if (recipes.count == 0) {
          return <p>Loading...</p>;
        }
        return (
            <>
            <div className='container'>
            <h1 className="display-1">Welcome to Everyday Cook</h1>
            
                <SearchBar onSearch={handleSearch} onClear={handleClear} />


                {filteredRecipes.length > 0 ? (
                    <RecipeList recipes={filteredRecipes} />
                ) : (
                    <p>None Found</p>
                )}
            </div>

            </>
            
        )
    };

export default HomePage;
