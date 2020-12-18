import  { useState, useEffect } from 'react';
import styled from 'styled-components/macro'

const VVRecipes = () => {

    const APP_ID = "0e156404";
    const APP_KEY = "65e720500cb2b60af6f7e0586026a03c";
  
  
  //VEGAN / VEGETARIAN 
const [vvRecipes, setVVRecipes] = useState([]);

useEffect (() => {
  getVVRecipes();
}, []);

const getVVRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=keto&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setVVRecipes(data.hits);
};

  return (
    <div className="">
    {vvRecipes.map(recipe =>(
      <VVRecipe >
      key={recipe.recipe.label}
      <h3>{recipe.recipe.label}</h3>
      <p>{recipe.recipe.calories} </p>
      img{recipe.recipe.image}
      <p>{recipe.recipe.ingredients}</p>
      </ VVRecipe>
    ))};
    </ div>



  );


}
  const VVRecipe = styled.div `
  
  `
export default VVRecipes;