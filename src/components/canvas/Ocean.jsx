"{use strict}";
import React, { useRef, useMemo } from 'react';
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, Vector3, PlaneGeometry, RepeatWrapping } from 'three';

import { Water } from 'three/examples/jsm/objects/Water.js';

extend({ Water });

export default function Ocean({ ...props }) {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    TextureLoader,
    'img/textures/waterTexture.jpg',
  );

  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;
  const geom = useMemo(() => new PlaneGeometry(500, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new Vector3(),
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
