import { Sky } from '@react-three/drei';
import Clouds from './Clouds';

export default function EnvMap({ children }) {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[250, 100, 250]}
        inclination={0}
        azimuth={0.25}
      />
      {children}
      <Clouds
        opacity={1.26}
        speed={2}
        depth={6.7}
        segments={200}
        color={'#ffffff'}
        width={200}
      />
    </>
  );
}
