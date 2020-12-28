import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Navbar from '../Components/Navbar';

const VegetarianRecipes = () => {
  useEffect(() => getVegetarianRecipesFromApi(), []);

  const APP_ID = '0e156404';
  const APP_KEY = '65e720500cb2b60af6f7e0586026a03c';

  // KETO
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const getVegetarianRecipesFromApi = async () => {
    const response = await fetch(
      `/search?q=vegetarian&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setVegetarianRecipes(data.hits);
  };

  return (
    <div className="">
      <h1>What is Vegetarian?</h1>
      <p></p>

      <Section>
        {vegetarianRecipes &&
          vegetarianRecipes.map((recipe, index) => (
            <div key={index}>
              <h3>{recipe.recipe.label}</h3>
              <img src={recipe.recipe.image} alt="" />
              <button onClick={() => setShowMore(!showMore)}>Show more</button>
              {showMore && <p>{recipe.recipe.ingredients}</p>}
            </div>
          ))}
      </Section>
      <Navbar />
    </div>
  );
};
const Section = styled.div`
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
  
button{
  border: 2px solid #C85454;
  background-color:#E8F8F5;
padding: 15px 25px;
font-size: 20px
}
  `;

export default VegetarianRecipes;
