//IMPORT LIBRARIES
import React from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
//IMPORT IMAGES
import logo from '../assets/LogoSVG.svg'
import Amy01 from '../assets/imgs/Amy01.png'
import Amy02 from '../assets/imgs/Amy02.png'
//IMPORT COMPONENTS
import BackgroundStatic from '../components/BackgroundStatic'
import LogoHeader from '../components/LogoHeader';


//STYLES
// const randomNum = Math.floor(Math.random() * 71) - 35

const ContainerStl = styled.div`
  width: 100vw;
  min-height: 100vh;
`
const HeroContainerStl = styled.div`
    width: 100vw;
    height: 100vh;
    /* position: relative; */
    margin-top: calc(-68px - 3px);
    margin-left: 0;
    z-index: 30;
`
const HeroTitleStl = styled.h1`
    font-family: "Gotham-UltraItalic";
    font-size: 28px;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    opacity: 0.95;
    z-index: 30;
`
const FirstImgStl = styled.img`
    width: 800px;
    position: relative;
    z-index: 30;
    left: 80px;
    top: 40px;
`
const SecondImgStl = styled.img`
    width: 1000px;
    position: relative;
    z-index: 30;
    left: 50%;
    top: 180px;
    transform: translateX(-50%);

`


function AmyInner() {
  return (
    <ContainerStl>

        <BackgroundStatic />

        <LogoHeader/> 
       
        {/* Top Fold */}
        <HeroContainerStl>
            <HeroTitleStl>AMY 27</HeroTitleStl>
        </HeroContainerStl>

        {/* Second */}
        <FirstImgStl src={Amy01}/>
        <SecondImgStl src={Amy02}/>
 
    </ContainerStl>
  );
}

export default AmyInner;