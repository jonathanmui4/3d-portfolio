/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import RoomScene from "./components/RoomScene";

function App() {

  return (
    <div className={" bg-indigo-800 absolute w-full h-screen p-0 top-0 left-0"}>
      <div className={"h-screen p-0 "}>
        <Canvas
          shadows
          camera={{
            position: [0, 2, 5],
            fov: 30,
          }}
        >
          <color attach="background" args={["#ececec"]} />
          <RoomScene />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
