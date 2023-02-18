import Land from './Land';
import { extend } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Ocean from '../canvas/Ocean';
import Asset from '../canvas/Asset';
import { RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';
import Beach from '../canvas/Beach';
import Sand from '../canvas/Sand';

const Player = dynamic(() => import('./Player'), { ssr: true });
const Model = dynamic(() => import('../canvas/Model'), { ssr: true });

extend({ Land, Model, Player, Ocean });

export default function Park({ children, ...props }) {
  const { scene } = useGLTF('glbs/beachSand.glb', true, true);
  return (
    <Land receiveShadow>
      <ambientLight />
      <Model
        colliders='trimesh'
        position={[50, 0, 20]}
        type='fixed'
        objectName={'glbs/tent.glb'}
      />
      <Player />
      <Ocean position={[50, 0.1, 20]} />
      {/* <Beach /> */}
      <Sand />
    </Land>
  );
}
