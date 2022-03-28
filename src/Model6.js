import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model6(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/figure6.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/figure6.gltf')