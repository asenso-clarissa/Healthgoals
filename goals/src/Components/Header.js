import React from 'react'
import styled from 'styled-components/macro'

export default function Headline(title) {
    return (
        <div>
           <Header>{title}</Header>
        </div>
    )
}

const Header = styled.h1 `


text-align: center;
margin-top: 0;
border-bottom: solid;
background-color: #53B1A6
padding: #A6F7E4

`

/*
header{
    border-bottom: solid;
    font-size: 3em;
  text-align: center;
  color: palevioletred; 
  background-color:#E8F8F5;
  
}
` */