import  { useState, useEffect } from 'react';
import styled from 'styled-components/macro'
import Navbar from '../Components/Navbar';

const KetoRecipes = () => {

  useEffect(() => getKetoRecipesFromApi(), []);

  const APP_ID = "0e156404";
  const APP_KEY = "65e720500cb2b60af6f7e0586026a03c";
    
  // KETO
  const [ketoRecipes, setKetoRecipes] = useState([]);
  const [showMore, setShowMore] = useState(false);
  
  const getKetoRecipesFromApi = async () => {
   
    const response = await fetch(
      `/search?q=keto&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setKetoRecipes(data.hits);
  };
  
  return (
    <div className="">
      <h1>What is Keto?</h1>
      <p>
        A keto or ketogenic diet is a low-carb, moderate protein, 
        higher-fat diet that can help you burn fat more effectively.
        It has many benefits for weight loss, health, and performance.
        It involves drastically reducing carbohydrate intake and replacing 
        it with fat. This reduction in carbs puts your body into a metabolic 
        state called ketosis.
        When this happens, your body becomes incredibly efficient at burning 
        fat for energy. It also turns fat into ketones in the liver, which can 
        supply energy for the brain .
        Ketogenic diets can cause significant reductions in blood sugar and 
        insulin levels. This, along with the increased ketones, has some health benefits such
        as cancer, epilepsy, and Alzheimer’s disease. 
        A keto diet can be especially useful for losing excess body 
        fat without hunger and for improving type 2 diabetes.

        </p>

        <Section>
    {ketoRecipes && ketoRecipes.map((recipe, index) =>(
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
}; 
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

export default KetoRecipes;