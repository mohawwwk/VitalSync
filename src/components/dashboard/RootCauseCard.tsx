"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const RootCauseCard = ({ cause, impact }: { cause: string, impact: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass p-8 rounded-[2.5rem] border-l-4 border-l-primary relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
        <Zap size={60} className="text-primary" />
      </div>
      
      <div className="relative z-10 space-y-6">
        <div className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Core Diagnosis</div>
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold text-text-primary leading-tight">
            Your #1 wellness blocker is: <br />
            <span className="text-primary">{cause}</span>
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed max-w-[280px]">
            {impact}
          </p>
        </div>

        <div className="pt-4 flex gap-4">
          {[
            { label: "Focus", val: 30 },
            { label: "Energy", val: 45 },
            { label: "Sleep", val: 60 },
          ].map((item) => (
            <div key={item.label} className="space-y-1 flex-1">
              <div className="text-[8px] text-text-muted uppercase font-bold">{item.label}</div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.val}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary/40"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RootCauseCard;
