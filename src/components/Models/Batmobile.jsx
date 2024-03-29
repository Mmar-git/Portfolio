"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Batmobile(props) {
  const { nodes, materials } = useGLTF('/models/batmobile-transformed.glb');
  const modelRef = useRef();

  useFrame(() => {
   modelRef.current.rotation.y +=0.007
  })

  return (
    <group {...props} dispose={null}
    scale={[1.5,1.5,1.5]}
    position={[0,-1,0]}
    ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.043}
      />
    </group>
  )
}

useGLTF.preload('/models/batmobile-transformed.glb')