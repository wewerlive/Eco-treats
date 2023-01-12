import { useVideoTexture } from '@react-three/drei';
import { useRef } from 'react';

export default function Screen({ children, ...props }) {
  const texture = useVideoTexture('video.mp4', start, 'canplaythrough');
  const leftRef = useRef();
  const rightRef = useRef();

  const uvs1 = ref.attributes.uv.array;

  for (let i = 0; i < uvs1.length; i += 2) {
    uvs1[i] *= 0.5;
  }

  for (let i = 0; i < uvs2.length; i += 2) {
    uvs2[i] *= 0.5;
    uvs2[i] += 0.5;
  }

  return (
    <>
      <mesh
        layers={1}
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <sphereGeometry
          ref={leftRef}
          args={[100, 100, 100]}
          scale={[-1, 1, 1]}
        />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          shininess={0.5}
        />
      </mesh>
      <mesh
        layers={1}
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <sphereGeometry
          ref={rightRef}
          args={[100, 100, 100]}
          scale={[-1, 1, 1]}
        />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          shininess={0.5}
        />
      </mesh>
    </>
  );
}
