/* eslint-disable react/no-children-prop */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/glbs/beachSand.glb --shadows -I -T
Author: Terrie Simmons-Ehrhardt (https://sketchfab.com/terrielsimmons)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sand-at-sunset-beach-1ac0847acae44ffe9c3783be28e82bcf
Title: Sand at Sunset Beach
*/

import React, { useRef, useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';

const context = createContext();
export function BeachInstances({ children, ...props }) {
  const { nodes } = useGLTF('/beachSand.glb');
  const instances = useMemo(
    () => ({
      Object: nodes.Object_2,
      Object1: nodes.Object_3,
      Object2: nodes.Object_4,
    }),
    [nodes],
  );
  return (
    <Merged
      meshes={instances}
      {...props}
    >
      {(instances) => (
        <context.Provider
          value={instances}
          children={children}
        />
      )}
    </Merged>
  );
}

export function BeachSand(props) {
  const instances = useContext(context);
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        position={[-0.71, 5.71, 12.14]}
        rotation={[0.23, 0.06, 0.1]}
      >
        <instances.Object />
        <instances.Object1 />
        <instances.Object2 />
      </group>
    </group>
  );
}

useGLTF.preload('/beachSand.glb');
