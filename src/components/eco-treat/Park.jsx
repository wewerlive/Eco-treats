import Land from './Land';
import { extend } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Ocean from '../canvas/Ocean';
// import Asset from '../canvas/Asset';

const Player = dynamic(() => import('./Player'), { ssr: true });
const Model = dynamic(() => import('../canvas/Model'), { ssr: true });

extend({ Land, Model, Player, Ocean });

export default function Park({ children, ...props }) {
  return (
    <Land receiveShadow>
      <ambientLight />
      <Ocean position={[500, 0.1, 10]} />
      <Model
        colliders='trimesh'
        position={[50, 0.1, 20]}
        type='fixed'
        objectName={'glbs/tent.glb'}
      />
      <Player />
    </Land>
  );
}
