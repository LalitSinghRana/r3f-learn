import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import BouncingBall from "./components/BouncingBall";
import "./App.css";

function App() {
  return (
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
        <BouncingBall />
      </Suspense>
    </Canvas>
  );
}

export default App;
