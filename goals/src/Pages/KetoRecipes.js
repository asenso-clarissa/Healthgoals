import  { useState, useEffect } from 'react';

const KetoRecipes = () => {

  useEffect (() => {
    getKetoRecipes();
  }, []);

    const APP_ID = "0e156404";
    const APP_KEY = "65e720500cb2b60af6f7e0586026a03c";
  
  
  // KETO
  const [ketoRecipes, setKetoRecipes] = useState([]);
  
  
  
  const getKetoRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=keto&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setKetoRecipes(data.hits);
  };

  return (
    <div className="">
    {ketoRecipes.map(recipe =>(
      <KetoRecipes >
      key={recipe.recipe.id}
      <h3>{recipe.recipe.label}</h3>
      <p>{recipe.recipe.calories} </p>
      img={recipe.recipe.image}
      <p>{recipe.recipe.ingredients}</p>
      </ KetoRecipes>
    ))};
    </ div>



  );
}; 

export default KetoRecipes;