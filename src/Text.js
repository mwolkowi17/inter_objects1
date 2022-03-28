import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Text1(props) {
  const group = useRef()
  const { scene, materials } = useGLTF('/text1.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}/>
    </group>
  )
}

useGLTF.preload('/text1.gltf')