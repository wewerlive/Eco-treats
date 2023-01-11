import { useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model({ objectName }) {
  const { scene, nodes } = useLoader(GLTFLoader, objectName);
  return (
    <group>
      {Object.keys(scene.children).map((f, index) => (
        <RigidBody
          colliders='hull'
          key={index}
          type='fixed'>
          <primitive
            key={index}
            object={scene.children[f]}
            position={scene.children[f].position}
          />
        </RigidBody>
      ))}
    </group>
  );
}
