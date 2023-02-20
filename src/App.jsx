import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'


function App() {
  return (
    <main>
      <div id="canvas_container">
        <Canvas>
          <color attach="background" args={["#474E68"]} />
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}

export default App;
