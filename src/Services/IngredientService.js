

const API_URL = "http://127.0.0.1:8000/api/recipes/";
const API_URL_SUFFIX = "?format=json";

const IngredientService = {


    async getIngredientsByRecipeId(id)
    {
        console.log(id)
        console.log(API_URL+id+API_URL_SUFFIX)
        try{
            const response=await fetch(API_URL+id+"/ingredients"+API_URL_SUFFIX);
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data)
          return data;
        } catch (error) {
          console.error(`Failed to fetch ingredients for recipe id - ${id}:`, error);
          return [];
        }
        //return RECIPES["recipes"][0];
    }
        //return RECIPES["recipes"][0];
        //return RECIPES["recipes"].find(recipe => recipe.id === id);
    }


export default IngredientService;