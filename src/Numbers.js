import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Numbers(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/numbers1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/numbers1.gltf')