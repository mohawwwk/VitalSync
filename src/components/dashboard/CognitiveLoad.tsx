"use client";

import React from "react";
import { motion } from "framer-motion";

const CognitiveLoad = ({ score }: { score: number }) => {
  const getLabel = (s: number) => {
    if (s < 40) return "Optimal";
    if (s < 75) return "Elevated";
    return "Overloaded";
  };

  return (
    <div className="glass p-8 rounded-[2.5rem] space-y-6">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="text-[10px] text-text-muted uppercase tracking-widest font-mono">Cognitive Load</div>
          <h3 className="text-2xl font-display font-bold text-text-primary">{getLabel(score)}</h3>
        </div>
        <div className="text-3xl font-mono font-bold text-primary">{score}%</div>
      </div>

      <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary via-primary to-accent-warm"
        />
        {/* Indicators */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-0.5 h-full bg-black/20" />
          ))}
        </div>
      </div>

      <div className="flex justify-between text-[8px] text-text-muted uppercase font-bold tracking-widest">
        <span>Resting</span>
        <span>Flow</span>
        <span>Stress</span>
      </div>
    </div>
  );
};

export default CognitiveLoad;
