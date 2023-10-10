import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { DataManager } from "./components/DataManager";
import { UI } from "./components/UI";
import { Calendar } from "./components/Calendar";
import { ScrollControls } from "@react-three/drei";

import React, { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator;
    
    if (/Android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <>
      <Calendar />
      <DataManager />
      <Canvas shadows camera={{ position: [30, 23, 30], fov: 31 }}>
        <color attach="background" args={["#ececec"]} />
        {isMobile ? (
          <Experience />
        ) : (
          <ScrollControls pages={8}>
            <Experience />
          </ScrollControls>
        )}
      </Canvas>
      <UI />
    </>
  );
}

export default App;
