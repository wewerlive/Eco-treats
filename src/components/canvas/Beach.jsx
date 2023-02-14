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
export default function Beach(props) {
    const { nodes, materials } = useLoader(GLTFLoader, 'glbs/beachSand.glb')
    // const sandGeo = useLoader()
    const sand = useGLTF('glbs/beachSandOpt.glb')
    let sandGeo = nodes.Object_2.geometry.clone()
    /////////////////////////////////////////////////////////////
    let height = 20;
    let width = 20;
    let m = new Array(width)
    let n = new Array(height)
    for (let i = 0; i < height; i++) {
        m[i] = 1;
    }
    for (let i = 0; i < width; i++) {
        n[i] = 1;
    }
    /////////////////////////////////////////////////////////////


    const meshRef = useRef()
    const anonymousObject = useMemo(() => new THREE.Object3D(), []);
    const anonymousColour = useMemo(() => new THREE.Color("blue"), []);
    useEffect(() => {
        console.log("sand: ", sand)
        console.log(sandGeo)
        console.log(meshRef)
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                anonymousObject.position.set(i * 20, 5, j * 20)
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
        // <Instances
        //     limit={100}
        //     range={100}
        //     geometry={nodes.Object_2.geometry}
        //     material={materials.material0000}
        //     castShadow
        //     receiveShadow
        // >
        //     <bufferGeometry
        //         attach='geometry'
        //         geometry={nodes.Object_2.geometry}
        //     />
        //     <meshPhongMaterial
        //         attach='material'
        //         material={materials.material0000}
        //     />
        //     {
        //         m.map((row, i) => {
        //             return n.map((col, j) => {
        //                 return (
        //                     <>
        //                     <Instance/>
        //                         <group
        //                         position={[i * 2, 0, j * 2]}
        //                             {...props}
        //                             rotation={[0.23, 0.06, 0.1]}
        //                         >
        //                             <mesh
        //                                 castShadow
        //                                 receiveShadow
        //                                 geometry={nodes.Object_2.geometry}
        //                                 material={materials.material0000}
        //                             />
        //                             <mesh
        //                                 castShadow
        //                                 receiveShadow
        //                                 geometry={nodes.Object_3.geometry}
        //                                 material={materials.material0000}
        //                             />
        //                             <mesh
        //                                 castShadow
        //                                 receiveShadow
        //                                 geometry={nodes.Object_4.geometry}
        //                                 material={materials.material0001}
        //                             />
        //                         </group>
        //                         <Instance /></>)
        //             })
        //         })}
        // </Instances>
        // <>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Object_2.geometry}
        //         material={materials.material0000}
        //     />
        // </>
        <>
            <mesh>
                <bufferGeometry
                    attach='geometry'
                    {...sandGeo}
                />
                <meshPhongMaterial
                    attach='material'
                    material={materials.material0000}
                />
            </mesh>
            <RigidBody>
                <instancedMesh
                    ref={meshRef}
                    // geometry={sandGeo}
                    material={materials.material0000}
                    args={[null, null, 400]}
                >
                    <boxBufferGeometry
                        // args={[2, 30, 30]}
                        attach="geometry"
                    />
                    {/* <bufferGeometry
                        attach='geometry'
                        geometry={sandGeo}
                    /> */}
                    {/* <meshPhongMaterial color={"blue"} attach="material" /> */}
                    {/* <meshBasicMaterial
                    attach='material'
                    material={materials.material0000}
                        /> */}
                </instancedMesh>
            </RigidBody >
        </>
    );
}

useGLTF.preload('glbs/beachSandOpt.glb')