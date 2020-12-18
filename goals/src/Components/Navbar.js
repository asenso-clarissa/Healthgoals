import React from "react";
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import homeIcon from '../img/home.png';
import workoutIcon from '../img/workout.png';
import recipiesIcon from '../img/kochen.png';
import profileIcon from '../img/profile.png';
import styled from 'styled-components/macro';
//import RecipeButton from './RecipeButton'
//import Home from "../Pages/Home";
//import { BrowserRouter as Switch, Route } from 'react-router-dom';

function Navbar() {
  return (
  <>
    <Router>
    
      <StyledNavbar>
        <ul>
          
         <li> <Link to="/"  >
           
              
                <img src={homeIcon} alt="homeIcon" style={{width: '50px'}} /> 
            
          
          </Link>
          </li>

          <Link  to="/workout" > 
          <li>
            
                <img src={workoutIcon} alt="workoutIcon" style={{width: '50px'}} /> 
            
        </li>
        </Link>
        <Link to="/recipies" >
          <li>
              
          <img src={recipiesIcon} alt="recipiesIcon" style={{width: '50px'}} /> 
         
         </li>
         </Link>

         <Link to="/profile">
          <li> 
          <img src={profileIcon} alt="profieleIcon" style={{width: '50px'}} /> 
         </li>
         </Link>
        </ul>
      </StyledNavbar>
      </Router>
    
    </ >
  );
}

export default Navbar;

const StyledNavbar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: fixed;
    margin: 0;
    overflow:hidden;

    
    
    
    ul { display: flex;
        list-style: none;
        
    }
    li{
         
        justify-content: space between;
        padding: 10px;
    }
    button{
        border: none;
        background-color: white;
    }
    
    
`