import  { useState, useEffect } from 'react';
import styled from 'styled-components/macro'

const SmoothieRecipes = () => {

    const APP_ID = "0e156404";
    const APP_KEY = "65e720500cb2b60af6f7e0586026a03c";
  
  
// SMOOTHIES
const [smoothieRecipes, setSmoothieRecipes] = useState([]);

useEffect (() => {
  getSmoothieRecipes();
}, []);

const getSmoothieRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setSmoothieRecipes(data.hits);
};

  return (
    <div className="">
    {smoothieRecipes.map(recipe =>(
      <SmoothieRecipe >
      key={recipe.recipe.label}
      <h3>{recipe.recipe.label}</h3>
      <p>{recipe.recipe.calories} </p>
      img{recipe.recipe.image}
      <p>{recipe.recipe.ingredients}</p>
      </ SmoothieRecipe>
    ))};
    </ div>



  );

 

} 
const SmoothieRecipe = styled.div `
  
  `
export default SmoothieRecipes;