import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';
import { useGLTF } from '@react-three/drei';

export default function Model({ objectName, type, position, colliders }) {
  const { scene } = useGLTF(objectName, true, true);
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