'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const lines = [
  "> көп агентті фреймворк іске қосылуда...",
  "> n8n кезек (queue) режимі басталуда...",
  "> байланыс орнатылды. қош келдіңіз.",
];

export default function TerminalEasterEgg() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          if (!newText[currentLineIndex]) newText[currentLineIndex] = "";
          newText[currentLineIndex] += currentLine[currentCharIndex];
          return newText;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 50 + Math.random() * 50); // Random typing speed

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 500); // Wait before next line
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-sm max-w-lg mt-8 text-amber shadow-lg backdrop-blur-sm"
    >
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="flex flex-col space-y-1">
        {displayedText.map((text, i) => (
          <div key={i} className="min-h-[20px]">
            {text}
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-amber ml-1 inline-block align-middle"
          />
        )}
      </div>
    </motion.div>
  );
}
