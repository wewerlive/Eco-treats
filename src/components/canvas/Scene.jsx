import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Preload } from '@react-three/drei';
import { Debug, Physics } from '@react-three/rapier';
import { Controllers, Hands, XR } from '@react-three/xr';
import dynamic from 'next/dynamic';
import Skys from './Skys';

const Land = dynamic(() => import('../eco-treat/Land'), { ssr: true });


export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['w', 'W'] },
        { name: 'backward', keys: ['s', 'S'] },
        { name: 'left', keys: ['a', 'A'] },
        { name: 'right', keys: ['d', 'D'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'rLeft', keys: ['ArrowLeft'] },
        { name: 'rRight', keys: ['ArrowRight'] },
      ]}
    >
      <Canvas
        shadows
        camera={{ fov: 65 }}
        {...props}
      >
        <Skys />
        <XR>
          <Hands />
          <Controllers />
          <directionalLight intensity={1} />
          <Physics gravity={[0, -200, 0]}>
            <Land>
              {children}
            </Land>
            {/* <Debug /> */}
          </Physics>
          <Preload all />
        </XR>
      </Canvas>
    </KeyboardControls>
  );
}
