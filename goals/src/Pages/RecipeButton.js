import React from 'react';
import styled from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import VegetarianRecipes from './VegetarianRecipes';
import VeganRecipes from './VeganRecipes';
import KetoRecipes from './KetoRecipes';
import SmoothieRecipes from './SmoothieRecipes';

const RecipeButton = () => {
  return (
    <Router>
      <div>
        <Header> Recipes </Header>

        <CircleButtons>
          <Link to="/KetoRecipes">
            <Button>
              {' '}
              <p>Keto </p>
            </Button>
          </Link>

          <Link to="/VegetarianRecipes">
            <Button>
              {' '}
              <p>Vegetarian</p>
            </Button>
          </Link>

          <Link to="/VeganRecipes">
            <Button>
              {' '}
              <p>Vegan</p>
            </Button>
          </Link>

          <Link to="/SmoothieRecipes">
            <Button>
              {' '}
              <p>Smoothies</p>
            </Button>
          </Link>
        </CircleButtons>
      </div>
      <Switch>
        <Route path="/KetoRecipes">
          {' '}
          <KetoRecipes />{' '}
        </Route>
        <Route path="/VegetarianRecipes">
          {' '}
          <VegetarianRecipes />{' '}
        </Route>
        <Route path="/VeganRecipes">
          {' '}
          <VeganRecipes />{' '}
        </Route>
        <Route path="/SmoothieRecipes">
          {' '}
          <SmoothieRecipes />{' '}
        </Route>
      </Switch>
    </Router>
  );
};

const CircleButtons = styled.div`
  display: flex;
  flex-direction: row;
  justofy-content: space-between;
  margin-top: 35px;
  width: 100px;
`;
const Button = styled.div`
  background-color: #00aba9;
  align-items: center;
  border-radius: 50%;
  width: 85px;
  height: 78px;
  color: white;
  text-align: center;
  font-size: 1.1em;
  margin-left: 0.4em;
  padding-top: 10px;
`;

const Header = styled.header`
  border-bottom: solid;
  font-size: 3em;
  text-align: center;
  color: palevioletred;
  background-color: #e8f8f5;
`;

export default RecipeButton;
