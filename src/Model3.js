import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model3(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/figure3.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/figure3.gltf')