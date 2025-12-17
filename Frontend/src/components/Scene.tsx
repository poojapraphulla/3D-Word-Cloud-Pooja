import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import WordCloud from "./WordCloud";
import type { Keyword } from "../api/analyze";

interface SceneProps {
  keywords: Keyword[];
}

const Scene = ({ keywords }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 25], fov: 60 }} 
      style={{ height: "100vh", width: "100vw", background: "transparent" }}
    >
      {/* Atmosphere */}
      <fog attach="fog" args={['#050505', 15, 45]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Controls */}
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        autoRotate={true}
        autoRotateSpeed={0.5} 
      />

      {/* Word Cloud Group */}
      <WordCloud keywords={keywords} />
    </Canvas>
  );
};

export default Scene;