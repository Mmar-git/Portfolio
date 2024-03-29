"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Batman(props) {
  const { nodes, materials } = useGLTF('/models/batman-transformed.glb')

  const modelRef = useRef()

    useFrame((state, delta, xrFrame) => {
      
      modelRef.current.position.y =0.4 + Math.sin(state.clock.elapsedTime)*0.15;
    })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[-3.75,0.4,0]}
    scale={[0.04,0.04,0.04]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        position={[94.09, -29.122, 123.668]}
        rotation={[-Math.PI, -1.566, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/batman-transformed.glb')