import React from 'react';
import styled from 'styled-components/macro';


export default function Keto() {
    return (
        <KetoStyled>
            <p> <h2>What Is Keto?</h2>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
           <div>
            <h2>Recipie</h2>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <button>show more</button>
           </div>
        </KetoStyled>
    )
}


const KetoStyled = styled.div`
margin: 1.5em;

div{
    border-style:solid;

}
button{
    align-items:center;
}
`
