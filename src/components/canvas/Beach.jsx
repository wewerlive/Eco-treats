/*
Source: https://sketchfab.com/3d-models/sand-at-sunset-beach-1ac0847acae44ffe9c3783be28e82bcf
Title: Sand at Sunset Beach
*/

import React from 'react'
import { Instance, Instances, useGLTF } from '@react-three/drei'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export default function Beach({ height, width }) {
    const { nodes, materials } = useLoader(GLTFLoader, 'glbs/beachSand.glb')
    let sandGeo = nodes.Object_2.geometry.clone()
    height = 100;
    width = 10;
    const meshRef = useRef()
    const anonymousObject = useMemo(() => new THREE.Object3D(), []);
    const anonymousColour = useMemo(() => new THREE.Color("blue"), []);
    useEffect(() => {
        console.log(meshRef)
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                anonymousObject.position.set(i * 10, 10, j * 10)
                anonymousObject.rotation.set(0, Math.random() * Math.PI, 0)
                anonymousObject.updateMatrix()
                meshRef.current.setMatrixAt(i * width + j, anonymousObject.matrix)
                // meshRef.current.setColorAt(i * width + j, anonymousColour.set("blue"));
            }
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        // meshRef.current.instanceColor.needsUpdate = true;
        meshRef.current.material.needsUpdate = true;
    })
    return (
        <instancedMesh
            position={[0, 0, 0]}
            ref={meshRef}
            args={[null, null, height * width]}
        >
            {/* <boxBufferGeometry attach="geometry" /> */}
            <bufferGeometry attach="geometry" {...nodes.Object_2.geometry} />
            <meshBasicMaterial color="blue" attach="material" />
        </instancedMesh>
    );
}

useGLTF.preload('glbs/beachSand.glb')