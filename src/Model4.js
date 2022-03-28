import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model4(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/figure4.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/figure4.gltf')