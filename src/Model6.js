import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model6(props) {
  const group = useRef()
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const { scene, materials } = useGLTF('/figure6.gltf')
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null}>
     <primitive object={scene}
     onClick={console.log('clicked')}
     onPointerOver={() => setHovered(true)}
     onPointerOut={() => setHovered(false)}/>
    </group>
  )
}

useGLTF.preload('/figure6.gltf')