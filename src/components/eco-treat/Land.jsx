import { useTexture } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useState } from 'react';
import * as THREE from 'three';
export default function Land({ children, visible }) {
  const land = useTexture('/img/textures/land.jpg');
  const [sao, sbc, sh, sn, sr] = useTexture(['/img/textures/Sand_007_ambientOcclusion.jpg', '/img/textures/Sand_007_basecolor.jpg', '/img/textures/Sand_007_height.png', '/img/textures/Sand_007_normal.jpg', '/img/textures/Sand_007_roughness.jpg']);
  console.log(visible)
  sbc.wrapS = sbc.wrapT = THREE.RepeatWrapping;
  sbc.repeat.set(200, 200);

  sh.wrapS = sh.wrapT = THREE.RepeatWrapping;
  sh.repeat.set(200, 200);

  sao.wrapS = sao.wrapT = THREE.RepeatWrapping;
  sao.repeat.set(200, 200);

  sn.wrapS = sn.wrapT = THREE.RepeatWrapping;
  sn.repeat.set(200, 200);

  sr.wrapS = sr.wrapT = THREE.RepeatWrapping;
  sr.repeat.set(200, 200);
  // const [visibility, setVis] = useState(false)
  return (
    <>
      <RigidBody
        colliders={'hull'}
        type='fixed'
      >
        <mesh
          position={[0, 0, 0]}
          rotation={[-0.5 * Math.PI, 0, 0]}
        >
          <planeGeometry args={[1000, 1000, 1, 1, 0]} />
          <meshStandardMaterial color={"red"} map={sbc} aoMap={sao} displacementMap={sh} normalMap={sn} roughnessMap={sr} />
        </mesh>
      </RigidBody>
      {children}
    </>
  );
}
