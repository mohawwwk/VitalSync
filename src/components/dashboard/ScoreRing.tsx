"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScoreRing = ({ score }: { score: number }) => {
  const [progress, setProgress] = useState(0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(score), 500);
    return () => clearTimeout(timer);
  }, [score]);

  const getColor = (s: number) => {
    if (s > 70) return "#4ECDC4"; // Accent (Greenish)
    if (s > 40) return "#7B6EF6"; // Primary (Violet)
    return "#FF6B6B"; // Warm Accent (Red)
  };

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full rotate-[-90deg]">
        {/* Background Ring */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-white/5"
        />
        {/* Progress Ring */}
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          stroke={getColor(score)}
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-mono font-bold">{Math.round(progress)}</span>
      </div>
    </div>
  );
};

export default ScoreRing;
