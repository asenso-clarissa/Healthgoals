import React, { useState} from "react";
//import Headeline from "../Components/Header";
import TimerButton from "../Components/TimerButton";
import TimerDisplay from "../Components/TimerDisplay";
import styled from 'styled-components/macro';


function Home() {
const [time, setTime ] = useState({ms:0, s:0, m:0, h:0});
const [interv, setInterv] = useState();
const [status, setStatus] = useState(0);

const start = () => {
  run();
  setStatus(1);
 setInterv(setInterval(run,10));
};

var updatedMS = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

const run = () => {
  if(updatedM === 60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMS === 100){
    updatedS++;
    updatedMS = 0;
  }
  updatedMS++;
  return setTime({ms:updatedMS, s:updatedS, m:updatedM, h:updatedH});
};

  const stop = () => {
    clearInterval(interv);
   setStatus(2);
};
const reset = () => {
  clearInterval(interv);
 setStatus(0);
 setTime({ms:0, s:0, m:0, h:0});
};

const resume = () => start();

  return (
    
      <div>
        <div> 

        <Header>Home</Header>
      
      <TimerDisplay time={time} />
      <TimerButton status={status} resume={resume} reset={reset} stop={stop} start={start} />

        </div>

      </div>
  );
}

export default Home;

const Header = styled.header`

    border-bottom: solid;
    font-size: 3em;
  text-align: center;
  color: palevioletred; 
  background-color:#E8F8F5;
  

`
