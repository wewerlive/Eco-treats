import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import EnvMap from '../canvas/EnvMap';

export default function Land({ children, ...props }) {
  const land = useTexture('/img/textures/land.jpg');
  return (
    <EnvMap>
      <RigidBody
        colliders={'hull'}
        type='fixed'
      >
        <mesh
          {...props}
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
    </EnvMap>
  );
}
