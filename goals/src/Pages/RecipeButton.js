import React from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import VVRecipes from '../Pages/VVRecipes';
import KetoRecipes from '../Pages/KetoRecipes';
import SmoothieRecipes from '../Pages/SmoothieRecipes';



const RecipeButton = () => {
    return (
       <Router>
        <div>


            <CircleButtons>

                <Link to="/KetoRecipes"  > 
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
        <Switch>
            <Route path="/KetoRecipes"> <KetoRecipes /> </Route>
            <Route path="/VVRecipes"> <VVRecipes /> </Route>
            <Route path="/SmoothieRecipes"> <SmoothieRecipes /> </Route>
        </Switch>
        </Router>
       
    )
}




const CircleButtons = styled.div `

    display: flex;
    
    flex-direction: row;
    margin-top: 40px;

    width: 150px;


`
const Button = styled.div`
  background-color: #00ABA9;
  border-style: none;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: white;
  margin-left: 100px;
  text-align: center;
  font-size: 1em;
  margin-top: 10px;
  
`;

export default RecipeButton;