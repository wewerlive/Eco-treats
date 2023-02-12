import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';

export default function Asset({ colliders, type, object, scale, position }) {
  const { scene } = useGLTF(object, true, true);
  const assets = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  return (
    <RigidBody
      colliders={colliders}
      type={type}
    >
      <primitive
        object={assets}
        position={position}
        scale={scale}
      />
    </RigidBody>
  );
}