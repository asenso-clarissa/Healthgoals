import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router,Link } from 'react-router-dom';
/*import VVRecipes from '../Pages/VVRecipes';
import KetoRecipes from '../Pages/KetoRecipes';
import SmoothieRecipes from '../Pages/SmoothieRecipes';*/



const RecipeButton = ({ size, text }) => {
    return (
        <Router>
        <div>

            <CircleButtons>

                <Link to= "/KetoRecipes" activeStyle={{color:"red"}} >
            <Button> Keto
                </Button> 
                </Link>

                <Link to="/VVRecipes" >
            <Button> Vegan <br/>Vegetarian
                </Button> 
                </Link>

                <Link to="/SmoothieRecipes">
            <Button> Smoothies
                </Button> 
                </Link>
            </CircleButtons>
        </div>
        </Router>
    )
}




const CircleButtons = styled.div `

    display: flex;
    justify-content: space-between; center;
    flex-direction: column;
    margin: 0;
    width: 150px

`
const Button = styled.div`
  background-color: #3c5159;
  border-style: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: white;
  margin-left: 100px;
  
`;

export default RecipeButton;