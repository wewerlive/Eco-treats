/*
Source: https://sketchfab.com/3d-models/sand-at-sunset-beach-1ac0847acae44ffe9c3783be28e82bcf
Title: Sand at Sunset Beach
*/

import React, { useEffect, useMemo, useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { Object3D } from 'three';
import { RigidBody } from '@react-three/rapier';

export default function Beach(props) {
  const { nodes } = useGLTF('glbs/sandSq.glb');
  // const sand = useTexture('/img/textures/sandLarge.jpg');
  // const sandExtruded = useTexture('/img/textures/sandSmall.jpg');

  const meshRef = useRef();
  const meshRef2 = useRef();
  const object = useMemo(() => new Object3D(), []);

  let height = 6;
  let width = 6;
  
  useEffect(() => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        object.position.set(i * 20, 10, j * 20);
        object.rotation.set(0, 3.2, 0);
        object.updateMatrix();
        meshRef.current.setMatrixAt(i * width + j, object.matrix);
        // meshRef2.current.setMatrixAt(i * width + j, object.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.material.needsUpdate = true;
    // meshRef2.current.instanceMatrix.needsUpdate = true;
    // meshRef2.current.material.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh
        ref={meshRef}
        args={[null, null, height * width]}
      >
        <bufferGeometry
          attach='geometry'
          {...nodes.Object_0.geometry}
        />
        <meshPhongMaterial
          attach='material'
          material={nodes.Object_0.material}
        />
      </instancedMesh>
      {/* <instancedMesh
        ref={meshRef2}
        args={[null, null, height * width]}
      >
        <bufferGeometry
          attach='geometry'
          {...nodes.Object_0.geometry}
        />
        <meshPhongMaterial
          attach='material'
          material={nodes.Object_0.material}
        />
      </instancedMesh> */}
    </>
  );
}

useGLTF.preload('glbs/beachSand.glb');
