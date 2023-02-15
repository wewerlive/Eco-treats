import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import Beach from '../canvas/Beach';

export default function Land({ children, ...props }) {
  const land = useTexture('/img/textures/land.jpg');

  return (
    <>
      <RigidBody type='fixed'>
        <mesh
          {...props}
          castShadow
          position={[0, 0, 0]}
          rotation={[-0.5 * Math.PI, 0, 0]}
        >
          <planeGeometry args={[1000, 1000, 1, 1, 0]} />
          <meshPhongMaterial
            map={land}
            toneMapped={false}
            shininess={0.5}
          />
        </mesh>
      </RigidBody>
      {children}
    </>
  );
}
