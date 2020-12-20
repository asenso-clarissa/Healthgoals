import styled from 'styled-components/macro';

function TimerDisplay(props) {
    return (
      <Watch>
          <span>{(props.time.h >=10)? props.time.h : "0"+props.time.h}</span>:
          <span>{(props.time.m >=10)? props.time.m : "0"+props.time.m}</span>:
          <span>{(props.time.s >=10)? props.time.s : "0"+props.time.s}</span>
          

        
          
      </Watch>
    );
  }
  
  export default TimerDisplay;

  const Watch = styled.div `
  padding: 60px 0px;
  text-align: center;

  span{
    background:#00ABA9;
    color: #fff;
    display: inline-block;
    font-family: monospace;
    font-size: 22px;
    padding: 10px;
    border-radius: 10px;
    width: 60px;
    margin-top: 6em;
  }

  `