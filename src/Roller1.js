import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Roller1(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/scene1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/scene1.gltf')