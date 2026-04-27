"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  { id: "sleep", label: "Sleep 8 hours", stress: -20, energy: 35, focus: 40 },
  { id: "meditate", label: "Meditate daily", stress: -45, energy: 15, focus: 50 },
  { id: "exercise", label: "Exercise 3x/week", stress: -15, energy: 50, focus: 20 },
  { id: "caffeine", label: "Quit caffeine", stress: -30, energy: -10, focus: 15 },
];

const AlternateReality = () => {
  const [selected, setSelected] = useState(scenarios[0]);

  return (
    <div className="glass p-8 rounded-[2.5rem] space-y-8">
      <div className="space-y-2">
        <h3 className="text-xl font-display font-bold text-text-primary">Alternate Reality</h3>
        <p className="text-xs text-text-muted">Simulate the impact of habit changes.</p>
      </div>

      <div className="space-y-6">
        <select
          value={selected.id}
          onChange={(e) => setSelected(scenarios.find(s => s.id === e.target.value) || scenarios[0])}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm text-text-primary appearance-none cursor-pointer hover:bg-white/10"
          style={{ backgroundColor: '#1a1a1a' }} // Explicit background to ensure visibility
        >
          {scenarios.map(s => (
            <option key={s.id} value={s.id} className="bg-[#1a1a1a] text-white">
              {s.label}
            </option>
          ))}
        </select>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "Stress", val: selected.stress },
                { label: "Energy", val: selected.energy },
                { label: "Focus", val: selected.focus },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-white/5 rounded-2xl text-center space-y-1">
                  <div className="text-[8px] text-text-muted uppercase font-bold tracking-widest">{item.label}</div>
                  <div className={`text-xl font-mono font-bold ${item.val > 0 ? 'text-accent' : 'text-accent-warm'}`}>
                    {item.val > 0 ? `+${item.val}` : item.val}%
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="text-[8px] text-text-muted uppercase tracking-tighter flex items-center gap-2">
        <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
        AI Simulation — not medical advice
      </div>
    </div>
  );
};

export default AlternateReality;
