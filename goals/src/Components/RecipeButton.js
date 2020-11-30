import React from 'react'
import styled from 'styled-components/macro'

export default function RecipeButton() {
    return (
        <div>
            <RecipeButtons>
            <button>Keto</button>
            <button>Vegan/Vegetarian</button>
            <button>Smoothies</button>
            </RecipeButtons>
        </div>
    )
}


const RecipeButtons = styled.div `

    display: flex;
    justify-content: space-between; center;
    flex-direction: column;
    margin: 0;
    width: 150px
`