import Land from './Land';
import { extend } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Player from './Player';

const Model = dynamic(() => import('./Model'), { ssr: true });

extend({ Land, Model});

export default function Park({ children, ...props }) {
  return (
    <Land receiveShadow>
      <Model objectName={'glbs/tentView.glb'}/>
      <Player
        colliders={'hull'}
        mass={1}
        type='dynamic'
      />
    </Land>
  );
}
