import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model1(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/figure1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/figure1.gltf')