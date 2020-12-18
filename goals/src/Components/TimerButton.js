

function TimerButton(props) {
    return (
      <div className="App">
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
      </div>
    );
  }
  
  export default TimerButton;
  