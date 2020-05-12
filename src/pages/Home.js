//IMPORT LIBRARIES
import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
//IMPORT COMPONENTS
import BackgroundStatic from '../components/BackgroundStatic'



//STYLES
const ContainerStl = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`
const Logo = styled.img`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
    opacity: 0.5;
`
const CanvasLogo = styled(Canvas)`
    position: relative;
    z-index: 20;
    background: transparent;
    width: 100vw;
    height: 100vh;
`


//GLOBAL METHODS
extend({ OrbitControls })


//SUBCOMPONENTS
const Controls = () => {
  //Refs
  const orbitRef = useRef()
  //Destructure Props
  const { camera, gl } = useThree()
  useFrame( () => {
    orbitRef.current.update()
  })
  return(
    <orbitControls 
      args={[ camera, gl.domElement ]}
      ref={orbitRef}
      autoRotate
      maxPolarAngle={Math.PI / 2.225}
      minPolarAngle={Math.PI / 2.225}
      enableDamping
      maxDistance={5}
      minDistance={3}
    />
  )
}

const Box = () => {
  //Hooks
  const [ hovered, setHovered ] = useState(false)
  const [ active, setActive ] = useState(false)
  //Props Animation
  const props = useSpring({
    color: active ? "red" : "white",
    opacity: hovered ? "0.25" : "0.125",
  })
  return(
    <a.mesh
      //Event Listeners
      onPointerOver={ () => setHovered(true) }
      onPointerOut={ () => setHovered(false) }
      onClick={ () => setActive(!active) }
      //Props
      scale={ props.scale }
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1,]} />
      <a.meshBasicMaterial attach="material" color={props.color} opacity={props.opacity} transparent />
    </a.mesh>
  )
}


//MAIN COMPONET
function Home() {
  return (
    <ContainerStl>

      <BackgroundStatic />

      <CanvasLogo>
        <Controls />
        <Box />
      </CanvasLogo>

      {/* 
      <Link to="/showcase">
        <Logo src={logo}/>
      </Link>  */}

    </ContainerStl>
  );
}


//EXPORTS
export default Home;

