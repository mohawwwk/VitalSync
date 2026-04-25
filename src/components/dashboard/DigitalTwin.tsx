"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const DigitalTwin = ({ currentData, predictions }: { currentData: any, predictions: any }) => {
  const metrics = [
    { label: "Stress", current: currentData.mental, change: predictions.stressChange },
    { label: "Energy", current: currentData.energy, change: predictions.energyChange },
    { label: "Focus", current: currentData.mental + 10, change: predictions.focusChange },
    { label: "Sleep", current: currentData.sleep, change: predictions.sleepChange },
  ];

  return (
    <div className="glass p-8 rounded-[2.5rem] space-y-8 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-display font-bold text-text-primary">Digital Twin</h3>
        <span className="text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">30 Day Simulation</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm font-medium text-text-secondary">{m.label}</div>
              <div className="text-lg font-mono font-bold text-text-primary">{m.current}</div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "50%" }}
                  animate={{ width: `${50 + m.change}%` }}
                  className={`h-full ${m.change > 0 ? 'bg-accent' : 'bg-accent-warm'}`}
                />
              </div>
              
              <div className={`flex items-center gap-1 font-mono font-bold ${m.change > 0 ? 'text-accent' : 'text-accent-warm'}`}>
                {m.change > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {m.change > 0 ? `+${m.change}` : m.change}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-text-muted italic">
        *Predicted state if recommended adjustments are followed.
      </p>
    </div>
  );
};

export default DigitalTwin;
