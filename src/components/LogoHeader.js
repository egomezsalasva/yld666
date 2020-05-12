//IMPORT LIBRARIES
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
//IMPORT IMAGES
import logo from '../assets/LogoSVG.svg'


//STYLES
const LogoContainerStl = styled.div`
    display: inline-block;
    position: sticky;
    left: 50px;
    z-index: 100;
    opacity: 0.5;
`
const LogoStl = styled.img`
    margin-top: 40px;
    height: 28px;
    left: 50px;
    opacity: 0.5;
`

//MAIN COMPONENT
function LogoHeader() {
  return ( 
    <Link to="/showcase">
      <LogoContainerStl>
        <LogoStl src={logo}/>
      </LogoContainerStl> 
    </Link>    
  );
}

export default LogoHeader;