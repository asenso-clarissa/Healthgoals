import React from 'react';
import leg from '../img/massive_leg_workout.png';
import leg_but from '../img/leg_but.png';
import lowerbelly from '../img/lowerbelly.png';
import slimwaist from '../img/slimwaist.png';
import tigh from '../img/thigh.png';
import styled from 'styled-components/macro';

function Workout() {
  return (
    <Wrapper>
      <Header>Workout</Header>
      <img src={leg} alt="leg" style={{ width: '20em' }} />
      <button>Save</button>
      <img src={leg_but} alt="leg" style={{ width: '20em' }} />
      <button>Save</button>
      <img src={lowerbelly} alt="leg" style={{ width: '20em' }} />
      <button>Save</button>
      <img src={slimwaist} alt="leg" style={{ width: '20em' }} />
      <button>Save</button>
      <img src={tigh} alt="leg" style={{ width: '20em' }} />
      <button>Save</button>
    </Wrapper>
  );
}
export default Workout;

const Header = styled.header`
  border-bottom: solid;
  font-size: 3em;
  text-align: center;
  color: palevioletred;
  background-color: #e8f8f5;
`;
const Wrapper = styled.div`
  img {
    margin: 40px 1.75em;
  }
  button {
    border: 2px solid #c85454;
    background-color: #e8f8f5;
    padding: 15px 25px;
    font-size: 20px;
  }
`;
