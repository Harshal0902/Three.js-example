import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
  return (
    <div>
      <primitive object={gltf.scene} scale={0.01} />
    </div>
  );
};

function App() {

  return (
    <div className="App">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );

}

export default App;
