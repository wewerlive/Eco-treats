import { useRef } from 'react';
import { Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useController, useXR } from '@react-three/xr';
import { useAnimations, useGLTF, useKeyboardControls } from '@react-three/drei';
import { CapsuleCollider, RigidBody } from '@react-three/rapier';

extend({ GLTFLoader });

export default function Player({ ...props }) {
  const { scene, animations } = useGLTF('glbs/Soldier.glb', true, true);
  const { actions } = useAnimations(animations, scene);

  const { camera } = useThree();
  camera.position.set(0, 10, 0);
  const left = useController('left');
  const right = useController('right');
  const XRplayer = useXR().player;
  const direction = new Vector3();
  const rightDir = new Vector3();
  const [, get] = useKeyboardControls();
  XRplayer.position.set(134, 1, -129);
  const ref = useRef();
  useFrame((delta) => {
    XRplayer.position.set(...ref.current.translation());
    const { forward, backward, jump, rLeft, rRight } = get();
    const leftIn = get().left;
    const rightIn = get().right;
    let fValue = forward ? 1 : 0;
    let bValue = backward ? -1 : 0;
    let lValue = leftIn ? 1 : 0;
    let rValue = rightIn ? -1 : 0;
    let rRValue = rRight ? 1 : 0;
    let rLValue = rLeft ? -1 : 0;
    let fSpeed = 0;
    let rSpeed = 0;
    let rotate = 0;
    fSpeed = fValue + bValue;
    rSpeed = lValue + rValue;
    rotate = rRValue + rLValue;
    if (left && left.inputSource) {
      fSpeed = left.inputSource.gamepad.axes[3] * -1;
      rSpeed = left.inputSource.gamepad.axes[2] * -1;
    }
    if (right && right.inputSource) {
      rotate = right.inputSource.gamepad.axes[2];
    }
    XRplayer.rotateOnAxis(new Vector3(0, 1, 0), rotate * 0.1 * -1);

    camera.getWorldDirection(direction);
    direction.y = 0;
    rightDir.x = direction.z;
    rightDir.z = -direction.x;

    ref.current.setLinvel({
      x: (direction.x * fSpeed + rightDir.x * rSpeed) * 35,
      y: 0,
      z: (direction.z * fSpeed + rightDir.z * rSpeed) * 35,
    });

    let velocity = ref.current.linvel();
    if (velocity.x == 0 && velocity.z == 0) {
      actions?.Walk.stop();
      actions?.Idle.play();
    } else {
      actions?.Idle.stop();
      actions?.Walk.play();
    }

    // console.table(XRplayer.position.x, XRplayer.position.y, XRplayer.position.z)
  });

  return (
    <>
      <RigidBody
        colliders={'trimesh'}
        mass={1}
        type='dynamic'
        ref={ref}
        position={[XRplayer.position.x, XRplayer.position.y, XRplayer.position.z]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
        {/* <primitive
          object={scene}
          scale={[4.7, 4.7, 4.7]}
        /> */}
        <pointLight castShadow />
      </RigidBody>
    </>
  );
}

useGLTF.preload('glbs/Soldier.glb', true, true);
