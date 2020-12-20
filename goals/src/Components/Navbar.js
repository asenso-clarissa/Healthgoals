import React from 'react';
import { Link } from 'react-router-dom';
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
      <StyledNavbar>
        <ul>
          <li>
            {' '}
            <Link to="/">
              <img src={homeIcon} alt="homeIcon" style={{ width: '50px' }} />
            </Link>
          </li>
          <Link to="/workout">
            <li>
              <img
                src={workoutIcon}
                alt="workoutIcon"
                style={{ width: '50px' }}
              />
            </li>
          </Link>
          <Link to="/recipies">
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
  );
}
export default Navbar;
const StyledNavbar = styled.div`
  
  justify-content: center;
  flex-direction: row;
  position: fixed;
  margin-top: 35em;
  color: palevioletred; 
  background-color:#E8F8F5;
  
  ul {
    display: flex;
    position: fixed;
    list-style: none;
  }
  li {
    justify-content: space between;
    padding: 18px;
  }
  button {
    border: none;
    background-color: white;
  }
`;