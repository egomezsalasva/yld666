//IMPORT LIBRARIES
import React from 'react';
import styled, { keyframes } from 'styled-components'
//IMPORT ASSETS
import texture from '../assets/imgs/texture.png'
import textureTile from '../assets/imgs/yldTextureTile.png'


//STYLES
// const randomNum = Math.floor(Math.random() * 71) - 35
const GrainAnimation = keyframes`
        0%, 100% { transform:translate(0, 0) }
        10% { transform:translate(-5%, -10%) }
        20% { transform:translate(-15%, 5%) }
        30% { transform:translate(7%, -25%) }
        40% { transform:translate(-5%, 25%) }
        50% { transform:translate(-15%, 10%) }
        60% { transform:translate(15%, 0%) }
        70% { transform:translate(0%, 15%) }
        80% { transform:translate(3%, 35%) }
        90% { transform:translate(-10%, 10%) }
`
const BackgroundStl = styled.div`
    position: fixed;
    background: url(${texture});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    width: 100vw;
    height: 100vh;
    &::after {
        content: "";
        animation: ${GrainAnimation} 8s steps(10) infinite;
        background-image: url(${textureTile});
        /* Specify a height and width above and beyond the page header for movement */
        height: 300%;
        left: -50%;
        opacity: 0.8;
        position: fixed;
        top: -100%;
        width: 300%;
    }
`


//MAIN COMPONET
function Background() {
  return (
        <>
            <BackgroundStl/>
        </>
  );
}


//EXPORTS
export default Background;

