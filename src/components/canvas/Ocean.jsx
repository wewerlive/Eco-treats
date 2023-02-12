import React, { useRef, useMemo } from 'react';
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { Water } from 'three/examples/jsm/objects/Water.js';

extend({ Water });

export default function Ocean({ ...props }) {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    'https://static.wixstatic.com/media/38ebb6_50c433eba3864b91b73979c9028d21c2~mv2.jpg?dn=water%200342normal.jpg',
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(500, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: 0x0064b5,
      distortionScale: 40,
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals],
  );
  useFrame((state, delta) => {
    const material = ref?.current?.material;
    material.uniforms.time.value += delta;
  });

  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      {...props}
    />
  );
}
