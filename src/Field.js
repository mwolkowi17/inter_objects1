import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three';



export function Field(props){

    const texture = useLoader(TextureLoader,'./input_texture.png' );
    return(
        <>
        <mesh {...props}>
         
            <planeGeometry args={[2,2]} />
            <meshStandardMaterial map={texture} />
        </mesh>
        </>
    )
}