import React from 'react'
import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'
function SandNode({position}) {
    console.log(position)
    const { scene } = useGLTF('glbs/beachSand.glb')
    const sceneCopy = useMemo(() => SkeletonUtils.clone(scene), [scene])
    return (
        <primitive position={position} object={sceneCopy} />
    )
}

export default SandNode