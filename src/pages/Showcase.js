//IMPORT LIBRARIES
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import HorizontalScroll from 'react-scroll-horizontal'
//IMPORT IMAGES
import logo from '../assets/LogoSVG.svg'
import dreamImg from '../assets/imgs/DreamShowcase.png'
import amyImg from '../assets/imgs/AmyShowcase.png'
//IMPORT COMPONENTS
import BackgroundStatic from '../components/BackgroundStatic'
import LogoHeader from '../components/LogoHeader'


//STYLES
// const randomNum = Math.floor(Math.random() * 71) - 35

const SlideshowContainerStl= styled.div`
  width: 100vw;
  height: 100vh;
`
const ShowcaseImg = styled.div`
  margin-top: 50vh;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  margin-left: 50vw;
`
const ShowcaseDreamImg = styled(ShowcaseImg)`
  background: url(${dreamImg});
  background-repeat: no-repeat;
  background-size: cover;
`
const ShowcaseAmyImg = styled(ShowcaseImg)`
  background: url(${amyImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 200px;
  margin-right: calc(50vw - 400px);
`
const ShowcaseTitleStl = styled.h1`
    position: absolute;
    display: inline-block;
    z-index: 30;
    color: white;
    background: transparent;
    font-family: "Gotham-UltraItalic";
    font-size: 28px;
    letter-spacing: 2.5px;
    top: 50%;
    left: 50%;
    transform: translate(calc( -50% - 200px ), -50%);
    opacity: 0.95;
`


function Showcase() {
  return (
    <>
    <BackgroundStatic />

    <LogoHeader /> 

    
    
    
    {/* <ShowcaseTitleStl >Amy 27</ShowcaseTitleStl> */}
    <ShowcaseTitleStl>D.R.E.A.M.</ShowcaseTitleStl>     
    </>
  );
}

export default Showcase;