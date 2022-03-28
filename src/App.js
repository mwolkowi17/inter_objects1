
import React, {Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

import {Roller1} from './Roller1'
import {Model1} from './Model1'
import {Model2} from './Model2'
import {Model3} from './Model3'
import {Model4} from './Model4'
import {Model5} from './Model5'
import {Model6} from './Model6'
import {Model7} from './Model7'
import {Strips1} from './Strips'
import {Shapes} from './Shapes'
import {Arrows1} from './Arrows'
import {Text1} from './Text'



function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      
    </mesh>
  )
}
export default function App() {

  return (
    
    <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [-10, 6, 30] }}>
      <OrbitControls />
      <Suspense fallback={null}>
      <ambientLight />
     {/* <pointLight position={[10, 10, 10]} />*/}
      
     {/* <Field position={[0,-1,-0.3]} rotation={[-Math.PI/2,0,0]} />*/}
    
     {/* <Roller1 position={[-2.82,-1,0.3]} scale={[0.023,0.023,0.023]} />*/}
     {/*<Roller1 position={[0,0,0]}  />*/}
     <Strips1 position={[0,0,0]} />
     {/*<Model1 position={[0,0,0]} />*/}
     <Shapes position={[0,0,0]} />
     <Arrows1 position={[0,0,0]} />
     <Text1 position={[0,0,0]} />
     <Model2 position={[0,0,0]} />
     <Model3 position={[0,0,0]} />
     <Model4 position={[0,0,0]} />
     <Model5 position={[0,0,0]} />
     <Model6 position={[0,0,0]} />
     <Model7 position={[0,0,0]} />
      </Suspense>
    </Canvas>
  )
}