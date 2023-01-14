import { Cloud } from "@react-three/drei";

// texture={'https://i.imgur.com/9Ii9kvp.png'} // adds image to a cloud
{
  /* // cloud needs some time to be perfect */
}

// ! DONOT USE THIS COMPONENT
// ! DONOT USE THIS COMPONENT
// ! DONOT USE THIS COMPONENT
export default function Clouds({ ...props }) {
  return (
    <Cloud
      {...props}
      opacity={1.26}
      speed={10}
      depth={10}
      segments={1000}
      color={'#ffffff'}
      width={700}
      position={[100, 800, 10]} // Position
      depthTest={false} // Disable depth test
    />
  );
}
