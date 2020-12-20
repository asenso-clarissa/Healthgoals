import  { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import Navbar from '../Components/Navbar';

const VVRecipes = () => {

  useEffect (() =>  getVegetarianRecipesFromApi(), []);

    const APP_ID = "0e156404";
    const APP_KEY = "65e720500cb2b60af6f7e0586026a03c";
  
  
  //VEGAN / VEGETARIAN 
const [vvRecipes, setVVRecipes] = useState([]);
const [showMore, setShowMore] = useState(false);



const getVegetarianRecipesFromApi = async () => {

  const response = await fetch(
    //`/search?q=vegan&app_id=${APP_ID}&app_key=${APP_KEY}`&&
    `/search?q=vegetarian&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setVVRecipes(data.hits);
};

  return (
    <div>
         <Section>
    {vvRecipes && vvRecipes.map((recipe, index) =>(
      <div key={index}>
        <h3>{recipe.recipe.label}</h3>
        <img src={recipe.recipe.image} alt=""/>
        <button onClick={() => setShowMore(!showMore)}>Show more</button>
        {showMore && <p>{recipe.recipe.ingredients}</p>}
      </div>
    ))};
    
    </Section>
    <Navbar/>
    </ div>


  );


}
  const Section = styled.div `
  margin-left: 1.5em;

h1{
  text-align:center;

}

p{
  margin-left: 1.5em;
}
img{
  width:15em;
  border radius: 50%
}
  `
export default VVRecipes;