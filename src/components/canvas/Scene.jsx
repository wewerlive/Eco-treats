import { Canvas } from '@react-three/fiber';
import { KeyboardControls, OrbitControls, Preload } from '@react-three/drei';
import { Debug, Physics } from '@react-three/rapier';
import { Controllers, Hands, XR } from '@react-three/xr';

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
      ]}>
      <Canvas
        shadows
        camera={{ fov: 45 }}
        {...props}>
        <XR>
          <Hands />
          <Controllers />
          <directionalLight intensity={0.75} />
          <ambientLight intensity={0.75} />
          <Physics gravity={[0, -600, 0]}>
            {children}
            {/* <Debug /> // Debug is optional */}
          </Physics>
          <Preload all />
          <OrbitControls
            enableDamping={true}
            maxPolarAngle={Math.PI}
          />
        </XR>
      </Canvas>
    </KeyboardControls>
  );
}
