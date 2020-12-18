import styled from 'styled-components/macro';


function TimerButton(props) {
    return (
      <StyledButton className="App">
          {(props.status === 0)?
        <button onClick={props.start}> Start Fast</button> : ""
          }  

        {(props.status === 1)?
        <div>
        <button 
            onClick={props.stop}> Stop Fast </button> 
        <button 
            onClick={props.reset}> Start eating</button> 
         </div> : ""
          }

          {(props.status === 2)?
            <div>
            <button onClick={props.resume}> Resume</button> 
            <button onClick={props.reset}> Start eating</button> 
             </div> : ""
              } 
      </StyledButton>
    );
  }
  
  export default TimerButton;

  const StyledButton = styled.div`

  background: #fff;
  margin-top: 30px;
  align-item:center;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  text-transform: uppercase;
  width: 150px;
  transition: background 3s;
  
  button{
    border: 2px solid #C85454;
  color: #C85454;
  padding: 15px 25px;
  }
  `
  