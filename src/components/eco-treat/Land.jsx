import { Sky, useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import Clouds from '../canvas/Clouds';

export default function Land({ children, ...props }) {
  const land = useTexture('/img/textures/land.jpg');
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[250, 100, 250]}
        inclination={0}
        azimuth={0.25}
      />
      <RigidBody
        colliders={'hull'}
        type='fixed'
      >
        <mesh
          {...props}
          position={[0, -20, 0]}
          rotation={[-0.5 * Math.PI, 0, 0]}>
          <planeGeometry args={[500, 500, 1, 1, 0]} />
          <meshPhongMaterial
            map={land}
            toneMapped={false}
            shininess={0.5}
          />
        </mesh>
      </RigidBody>
      {children}
      <Clouds
        opacity={1.26}
        speed={2}
        depth={6.7}
        segments={200}
        color={'#ffffff'}
        width={200}
      />
    </>
  );
}
