
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF, Instances, Instance } from '@react-three/drei'
import { instancedMesh } from '@react-three/fiber';
import SandNode from './SandNode';
// export default function Sand({ count = 100, temp = new THREE.Object3D() }) {
//     // const ref = useRef()
//     const sand = useGLTF('glbs/beachSand.glb', true, true);
//     console.log(sand)
//     // console.log(materials)
//     // useEffect(() => {}, [])
//     return (
//         <>
//             <Instances range={1} material={sand.materials.Object_2} geometry={sand.nodes.Object_2.geometry}>
//                 <group>
//                     <Instance position={[0, 0, 0]} />
//                 </group>
//             </Instances>
//         </>
//     )

// }
export default function Sand({ count = 10 }) {
    const ref = useRef()
    console.log("Hello")
    let sand = useGLTF('glbs/beachSand.glb', true, true);
    // let temp = sand.scene
    // useEffect(() => {
    //     // Set positions
    //     for (let i = 0; i < count; i++) {
    //         temp.position.set(count * 2, 0, 0)
    //         temp.updateMatrix()
    //         ref.current.setMatrixAt(i, temp.matrix)
    //     }
    //     console.log(ref.current)
    //     // Update the instance
    //     ref.current.instanceMatrix.needsUpdate = true
    // }, [])
    const sandG = useRef()
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
    useEffect(() => {
        console.log("sand: ", sandG.current)
    }, [])
    return (
        <group ref={sandG}>{
            m.map((row, i) => {
                return n.map((col, j) => {
                    return (
                        // <mesh
                        //     ref={ref}
                        //     key={i * width + j}
                        //     geometry={sand.nodes.Object_2.geometry}
                        //     position={[50 + i * 10, 5, 140 + j * 10]}
                        // >
                        //     <meshStandardMaterial color={"red"} />
                        // </mesh>
                        // <primitive key={i * width + j} object={sand.scene} position={[50 + i * 10, 5, 140 + j * 10]} />
                        <SandNode key={i * width + j} position={[50 + i * 10, 5, 140 + j * 10]} />
                    )
                })
            })}
        </group>
        // <instancedMesh ref={ref} args={[sand.nodes.Object_2.geometry, sand.materials.Object_2, count]} position={[100, 10, 100]}>
        //     <primitive object={sand} />
        // </instancedMesh>
    )
}