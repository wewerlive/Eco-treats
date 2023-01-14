import { Sky } from '@react-three/drei';

export default function Clouds({ children, ...props }) {
  return (
    <Sky
      {...props}
      distance={450000}
      sunPosition={[250, 1000, 250]}
      inclination={0}
      azimuth={0.25}
    />
  );
}
