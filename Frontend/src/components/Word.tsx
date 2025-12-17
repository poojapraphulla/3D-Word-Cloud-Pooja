import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const FONT_REGULAR = '/fonts/Iceland-Regular.ttf';
const FONT_ITALIC = '/fonts/Audiowide-Regular.ttf';

interface WordProps {
  text: string;
  weight: number;
  position: [number, number, number];
}

const Word = ({ text, weight, position }: WordProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [randomOffset] = useState(Math.random() * 100);

  useFrame((state) => {
    if (ref.current) {
      ref.current.lookAt(state.camera.position);
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + randomOffset) * 0.5;
    }
  });

  const fontSize = Math.max(0.8, weight * 5); 

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={fontSize}
      font={hovered ? FONT_ITALIC : FONT_REGULAR}
      color={hovered ? "#ff0055" : (weight > 0.3 ? "#00f2ff" : "#ffffff")}
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
        setHovered(true);
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
        setHovered(false);
      }}
    >
      {text}
    </Text>
  );
};

export default Word;