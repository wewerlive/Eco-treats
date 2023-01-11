import { Cloud } from "@react-three/drei";

// texture={'https://i.imgur.com/9Ii9kvp.png'} // adds image to a cloud
export default function Clouds({...props}) {
  return (
    <>
      {/* // cloud needs some time to be perfect */}
      <Cloud
        {...props}
        position={[-100, 200, 10]} // Position
        depthTest={false} // Disable depth test
      />
      <Cloud
        {...props}
        position={[200, 200, 10]} // Position
        depthTest={false} // Disable depth test
      />
    </>
  );
}