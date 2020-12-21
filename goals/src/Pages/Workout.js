import React from 'react'
import leg from '../img/massive_leg_workout.png';
import styled from 'styled-components/macro';



 function Workout() {
    return (
        <Wrapper>
            <Header>Workout</Header>
           <img src={leg} 
              alt="leg" 
              style={{ width: '20em' }} />
        </Wrapper>
    )
}
export default Workout

const Header = styled.header`

    border-bottom: solid;
    font-size: 3em;
  text-align: center;
  color: palevioletred; 
  background-color:#E8F8F5;
  

`
const Wrapper = styled.div`
img {
    margin: 40px 1.75em;
}

`