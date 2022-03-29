
import React, {Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { OrbitControls, MeshReflectorMaterial, Html } from '@react-three/drei'

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
import {Numbers} from './Numbers'




export default function App() {
  
  function Loader() {
    //const { progress } = useProgress()
    //return <Html center style={{ color: 'white' }}>{progress} % loaded</Html>
    return <Html center style={{ color: 'black' }}>loading...</Html>
  }

  return (
    
    <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [-10, 6, 30] }}>
      <OrbitControls
       maxPolarAngle={Math.PI / 2}
       maxDistance={40}
      />
      <Suspense fallback={<Loader/>}>
     {/*} <ambientLight /> */}
   <pointLight position={[5, 10, 20]} />
      
     {/* <Field position={[0,-1,-0.3]} rotation={[-Math.PI/2,0,0]} />*/}
    
     {/* <Roller1 position={[-2.82,-1,0.3]} scale={[0.023,0.023,0.023]} />*/}
     {/*<Roller1 position={[0,0,0]}  />*/}
     <Strips1 position={[0,0,0]} />
     {/*<Model1 position={[0,0,0]} />*/}
     <Shapes position={[0,0,0]} />
     <Arrows1 position={[0,0,0]} />
     <Text1 position={[0,0,0]} />
     <Numbers position={[0,0,0]} />
     <Model2 position={[0,0,0]} />
     <Model3 position={[0,0,0]} />
     <Model4 position={[0,0,0]} />
     <Model5 position={[0,0,0]} />
     <Model6 position={[0,0,0]} />
     <Model7 position={[0,0,0]} />
     <mesh rotation={[-Math.PI / 2, 0, Math.PI / 1.33]} position={[0,-4.9, 0]} scale={[30,30,10]}>
          <planeGeometry args={[10, 10]} />
          <MeshReflectorMaterial
            blur={[900, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={0.5}
            minDepthThreshold={0.85}
            color="#00A6FF"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0.001, 0]} scale={[5,5,5]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial transparent color="black" opacity={0.4} />
        </mesh>
      </Suspense>
    </Canvas>
  )
}