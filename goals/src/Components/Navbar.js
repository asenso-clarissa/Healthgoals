import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import homeIcon from '../img/home.png';
import workoutIcon from '../img/workout.png';
import recipiesIcon from '../img/kochen.png';
import profileIcon from '../img/profile.png';
import styled from 'styled-components/macro';
import Home from '../Pages/Home';
import Workout from '../Pages/Workout';
import RecipeButton from '../Pages/RecipeButton';
import Profile from '../Pages/Profile';
//import RecipeButton from './RecipeButton'
//import Home from "../Pages/Home";
//import { BrowserRouter as Switch, Route } from 'react-router-dom';
function Navbar() {
  return (
    <Router>
    <>
      <StyledNavbar>
        <ul>
          <li>
            {' '}
            <Link to="/" >
              <img src={homeIcon} 
              alt="homeIcon" 
              style={{ width: '50px' }} />
            </Link>
          </li>
          <Link to="/workout">
            <li>
              <img
                src={workoutIcon}
                alt="workoutIcon"
                style={{ width: '50px'}}
              />
            </li>
          </Link>
          <Link to="/recipes">
            <li>
              <img
                src={recipiesIcon}
                alt="recipiesIcon"
                style={{ width: '50px' }}
              />
            </li>
          </Link>
          <Link to="/profile">
            <li>
              <img
                src={profileIcon}
                alt="profieleIcon"
                style={{ width: '50px' }}
              />
            </li>
          </Link>
        </ul>
      </StyledNavbar>
    </>
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/workout"> <Workout /> </Route>
      <Route path="/recipes"> <RecipeButton /> </Route>
      <Route path="/profile"> <Profile /> </Route>
    </Switch>
    </Router>
  );
}
export default Navbar;
const StyledNavbar = styled.nav`
  
  justify-content:center;
  flex-direction: row;
  position: fixed;
  margin-top: 35em;
  justify-content:space between;

 

  ul {
    display:flex;
    position:fixed;
    list-style: none;
    margin-right:0px;
    padding:0 40px 0 40px
  
   
    
    }
  li {
    padding:18px;
    background-color:#E8F8F5;
   
  }
 
`; 

/*img:active {
    border: 2px solid palevioletred; 
   
  }*/