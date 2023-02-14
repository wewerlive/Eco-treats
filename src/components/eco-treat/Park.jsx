import Land from './Land';
import { extend, useFrame, useThree } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Ocean from '../canvas/Ocean';
import Asset from '../canvas/Asset';
import Sand from '../canvas/Sand';
import { RigidBody } from '@react-three/rapier';
import { useGLTF, Sphere, useTexture } from '@react-three/drei';
import { ThreeMFLoader } from 'three-stdlib';
import * as Three from 'three';
import { Interactive, useXR } from '@react-three/xr';
const Player = dynamic(() => import('./Player'), { ssr: true });
const Model = dynamic(() => import('../canvas/Model'), { ssr: true });
import { useRef, useState } from 'react';
import { cloneUniformsGroups } from 'three';
import Beach from '../canvas/Beach';
extend({ Land, Model, Player, Ocean });

export default function Park({ children, ...props }) {
  const { scene } = useGLTF('glbs/beachSand.glb', true, true);
  const [konark360] = useTexture(["/img/textures/konark.jpg"]);
  const side = Three.BackSide;
  const { player } = useXR();
  const [moving, setMoving] = useState(true);
  const [landVis, setLandVis] = useState(false);

  const img360 = useRef();
  // const landRef = useRef();
  const { camera } = useThree();
  const vec = new Three.Vector3();
  console.log(player)
  const viewPoint = (e) => {
    console.log('viewPoint', e);
    setMoving(false);
    console.log(img360.current.position)
    console.log(player.position)
  }
  // console.log(landRef.current)
  useFrame(() => {
    if (!moving) {
      setLandVis(true)
      camera.getWorldPosition(vec)
      // console.log(vec)
      // img360.current.position.set(vec)
      img360.current.position.x = vec.x
      img360.current.position.y = vec.y
      img360.current.position.z = vec.z
      // console.log(img360.current.position, vec)
    }
  })
  return (
    <Land visible={true}>
      <ambientLight />
      <Model
        colliders='trimesh'
        position={[50, 0, 20]}
        type='fixed'
        objectName={'glbs/tent.glb'}
      />
      {/* <Sand count={100} /> */}
      <Beach position={[0, 10, 0]} />
      <Interactive onSelect={viewPoint}>
        <Sphere position={[100, 11, 140]} scale={[1, 1, 1]}>
          <meshStandardMaterial color={'blue'} />
        </Sphere>
      </Interactive>
      <Sphere args={[2, 256, 256]} ref={img360} position={[50, 11, 140]} rotation={[0, 0, 0]} scale={[-1, 1, 1]}>
        <meshStandardMaterial map={konark360} side={side} />
      </Sphere>
      <Player moving={moving} />
      {/* <Ocean position={[50, 0.1, 20]} /> */}
    </Land>
  );
}
