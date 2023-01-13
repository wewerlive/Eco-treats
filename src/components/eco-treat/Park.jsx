import Land from './Land';
import { extend } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import Ocean from '../canvas/Ocean';

const Model = dynamic(() => import('./Model'), { ssr: true });

extend({ Land, Model });

export default function Park({ children, ...props }) {
  return (
    <Land receiveShadow>
      <ambientLight />
      <Model
        colliders='trimesh'
        position={[50, 0, 20]}
        type='fixed'
        objectName={'glbs/tent.glb'}
      />
      <Ocean position={[50, 0.1, 20]} />
    </Land>
  );
}
