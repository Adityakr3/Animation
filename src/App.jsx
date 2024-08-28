import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cylender from "./cylender";
import Marquee from "react-fast-marquee";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 25 }}>
        <OrbitControls />
        <ambientLight />
        <Cylender />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <Marquee speed={195} direction="right" className="bg-black text-center p-12">
        <h1 className="text-4xl" >
        As a front-end web developer with core experience in React, you have a strong understanding of the fundamentals of web development.
        </h1>
      </Marquee>
    </> 
  );
};

export default App;
