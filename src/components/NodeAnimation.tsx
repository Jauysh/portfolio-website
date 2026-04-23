'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NodeAnimation() {
  const [nodes, setNodes] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedNodes = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full absolute inset-0">
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1.5 h-1.5 bg-amber rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
            boxShadow: ["0 0 0px #f59e0b", "0 0 10px #f59e0b", "0 0 0px #f59e0b"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: node.delay,
          }}
        />
      ))}
    </div>
  );
}
