import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
const Cylender = () => {
  let image = useTexture("./img2.png");
  let Cylender = useRef(null);
  useFrame((state , delta)=>{
    Cylender.current.rotation.y += delta
  })
  return (
     <group rotation={[0, 1.4, 5]}>
         <mesh ref={Cylender}>
        <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
        <meshStandardMaterial map={image} transparent side={THREE.DoubleSide} />
      </mesh>
     </group>
  );
};
export default Cylender;
