import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shapes(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/shapes1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/shapes1.gltf')