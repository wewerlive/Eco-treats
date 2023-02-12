/*
Source: https://sketchfab.com/3d-models/sand-at-sunset-beach-1ac0847acae44ffe9c3783be28e82bcf
Title: Sand at Sunset Beach
*/

import React from 'react'
import { Instance, Instances, useGLTF } from '@react-three/drei'

export default function Beach(props) {
  const { nodes, materials } = useGLTF('glbs/beachSand-transformed.glb')
  return (
    <Instances
      limit={100}
      range={100}
      geometry={nodes.Object_2.geometry}
      material={materials.material0000}
      castShadow
      receiveShadow
    >
      <bufferGeometry
        attach='geometry'
        geometry={nodes.Object_2.geometry}
      />
      <meshPhongMaterial
        attach='material'
        material={materials.material0000}
      />
      <Instance>
        <group
          {...props}
          rotation={[0.23, 0.06, 0.1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material0000}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.material0000}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material0001}
          />
        </group>
      </Instance>
    </Instances>
  );
}

useGLTF.preload('glbs/beachSand-transformed.glb')
