import React from "react";
import homeIcon from '../img/home.png'
import workoutIcon from '../img/workout.png'
import recipiesIcon from '../img/kochen.png'
import profileIcon from '../img/profile.png'
import styled from 'styled-components/macro'
//import { BrowserRouter as Switch, Route } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <StyledNavbar>
        <ul>
          <li> 
              <button>
                <img src={homeIcon} alt="homeIcon" style={{width: '50px'}} /> 
            </button>
          </li>

          <li>
            <button>
                <img src={workoutIcon} alt="workoutIcon" style={{width: '50px'}} /> 
            </button> 
        </li>

          <li>
              <button>
          <img src={recipiesIcon} alt="recipiesIcon" style={{width: '50px'}} /> 
         </button> 
         </li>
          <li> <button>
          <img src={profileIcon} alt="profieleIcon" style={{width: '50px'}} /> 
         </button> </li>
        </ul>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
    display: fixed;
    justify-content: center;
    flex-direction: row;
    margin: 0;
    
    
    
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