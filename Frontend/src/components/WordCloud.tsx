import Word from "./Word";
import type { Keyword } from "../api/analyze";
import { useMemo } from "react";

interface WordCloudProps {
  keywords: Keyword[];
}

const WordCloud = ({ keywords }: WordCloudProps) => {
  const words = useMemo(() => {
    return keywords.map((item, index) => {
      // Fibonacci Sphere Algorithm for even distribution
      const phi = Math.acos(-1 + (2 * index) / keywords.length);
      const theta = Math.sqrt(keywords.length * Math.PI) * phi;
      
      const radius = 10; 

      const position: [number, number, number] = [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ];

      return { ...item, position };
    });
  }, [keywords]);

  return (
    <group rotation={[0, 0, 0]}>
      {words.map((item) => (
        <Word
          key={item.word}
          text={item.word}
          weight={item.weight}
          position={item.position}
        />
      ))}
    </group>
  );
};

export default WordCloud;