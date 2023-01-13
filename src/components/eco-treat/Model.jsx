import { useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { extend } from '@react-three/fiber';

extend({ SkeletonUtils, GLTFLoader });

export default function Model({ objectName, type, position, colliders }) {
  const { scene } = useLoader(GLTFLoader, objectName);
  const object = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
      <group position={position}>
        {Object.keys(scene.children).map((f, index) => (
          <RigidBody
            colliders={colliders}
            key={index}
            type={type}
          >
            <primitive
              key={index}
              object={object.children[f]}
              position={scene.children[f].position}
              scale={[0.1, 0.1, 0.1]}
            />
          </RigidBody>
        ))}
      </group>
  );
}
