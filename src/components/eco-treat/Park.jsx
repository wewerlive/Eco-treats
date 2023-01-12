import Land from './Land';
import { extend } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Lights from '../canvas/Lights';
import Ocean from '../canvas/Ocean';

const Model = dynamic(() => import('./Model'), { ssr: true });

extend({ Land, Model });

export default function Park({ children, ...props }) {
  return (
    <Land receiveShadow>
      <Lights
        position={[47, 10, 57]}
        color={'#fefefe'}
      />
      <Lights
        position={[-1.2, 10, 22]}
        color={'#fefefe'}
      />
      <Model
        colliders='trimesh'
        position={[50, 0, 20]}
        type='fixed'
        objectName={'glbs/tent.glb'}
      />
      <Lights
        position={[50, 10, -27]}
        color={'#fefefe'}
      />
      <Lights
        position={[96, 10, 26]}
        color={'#fefefe'}
      />
      <Ocean position={[50, 0.1, 20]} />
    </Land>
  );
}
