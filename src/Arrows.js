import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arrows1(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/arrows1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/arrows1.gltf')