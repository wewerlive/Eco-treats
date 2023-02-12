import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import Beach from '../canvas/Beach';

export default function Land({ children, ...props }) {
  // const land = useTexture('/img/textures/land.jpg');

  return (
    <>
      <RigidBody type='fixed'>
        <Beach position={[10, 1, 10]} />
        <Beach position={[20, 1, 20]} />
      </RigidBody>
      {children}
    </>
  );
}


















{
  /* <mesh
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
</mesh>; */
}
