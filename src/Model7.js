import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model7(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/figure7.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/figure7.gltf')