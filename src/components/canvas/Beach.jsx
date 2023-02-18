/*
Source: https://sketchfab.com/3d-models/sand-at-sunset-beach-1ac0847acae44ffe9c3783be28e82bcf
Title: Sand at Sunset Beach
*/

import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Beach({ height, width }) {
  const { nodes, materials } = useLoader(GLTFLoader, 'glbs/beachSand.glb');
  const [sao, sbc, sh, sn, sr] = useTexture([
    '/img/textures/Sand_007_ambientOcclusion.jpg',
    '/img/textures/Sand_007_basecolor.jpg',
    '/img/textures/Sand_007_height.png',
    '/img/textures/Sand_007_normal.jpg',
    '/img/textures/Sand_007_roughness.jpg',
  ]);
  console.log(nodes);
  // let sandGeo = nodes.Object_2.geometry.clone()
  height = 100;
  width = 10;
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();
  const anonymousObject = useMemo(() => new THREE.Object3D(), []);
  // const anonymousColour = useMemo(() => new THREE.Color("blue"), []);
  useEffect(() => {
    console.log(meshRef2);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        anonymousObject.position.set(i * 6, 15, j * 6);
        anonymousObject.rotation.set(0, Math.random() * Math.PI, 0);
        anonymousObject.updateMatrix();
        meshRef2.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        meshRef2.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        meshRef3.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        meshRef3.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        meshRef4.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        meshRef4.current.setMatrixAt(i * width + j, anonymousObject.matrix);
        // meshRef.current.setColorAt(i * width + j, anonymousColour.set("blue"));
      }
    }
    meshRef2.current.instanceMatrix.needsUpdate = true;
    // meshRef.current.instanceColor.needsUpdate = true;
    meshRef2.current.material.needsUpdate = true;
    meshRef3.current.instanceMatrix.needsUpdate = true;
    // meshRef.current.instanceColor.needsUpdate = true;
    meshRef3.current.material.needsUpdate = true;
    meshRef4.current.instanceMatrix.needsUpdate = true;
    // meshRef.current.instanceColor.needsUpdate = true;
    meshRef4.current.material.needsUpdate = true;
  });
  return (
    <>
      <instancedMesh
        position={[0, 0, 0]}
        ref={meshRef2}
        args={[null, null, height * width]}
      >
        {/* <boxBufferGeometry attach="geometry" /> */}
        <bufferGeometry
          attach='geometry'
          {...nodes.Object_2.geometry}
        />
        {/* <meshBasicMaterial color="blue" attach="material" /> */}
        <meshStandardMaterial
          map={sbc}
          aoMap={sao}
          displacementMap={sh}
          normalMap={sn}
          roughnessMap={sr}
        />
      </instancedMesh>
      <instancedMesh
        position={[0, 0, 0]}
        ref={meshRef3}
        args={[null, null, height * width]}
      >
        {/* <boxBufferGeometry attach="geometry" /> */}
        <bufferGeometry
          attach='geometry'
          {...nodes.Object_3.geometry}
        />
        {/* <meshBasicMaterial color="blue" attach="material" /> */}
        <meshStandardMaterial
          map={sbc}
          aoMap={sao}
          displacementMap={sh}
          normalMap={sn}
          roughnessMap={sr}
        />
      </instancedMesh>
      <instancedMesh
        position={[0, 0, 0]}
        ref={meshRef4}
        args={[null, null, height * width]}
      >
        {/* <boxBufferGeometry attach="geometry" /> */}
        <bufferGeometry
          attach='geometry'
          {...nodes.Object_4.geometry}
        />
        {/* <meshBasicMaterial color="blue" attach="material" /> */}
        <meshStandardMaterial
          map={sbc}
          aoMap={sao}
          displacementMap={sh}
          normalMap={sn}
          roughnessMap={sr}
        />
      </instancedMesh>
    </>
  );
}

useGLTF.preload('glbs/beachSand.glb');
