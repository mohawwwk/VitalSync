"use client";

import React from "react";
import { motion } from "framer-motion";

const BurnoutBadge = ({ risk }: { risk: string }) => {
  const getColors = (r: string) => {
    switch (r) {
      case "LOW": return { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" };
      case "MODERATE": return { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
      case "HIGH": return { bg: "bg-accent-warm/10", text: "text-accent-warm", border: "border-accent-warm/20" };
      case "CRITICAL": return { bg: "bg-accent-warm/20", text: "text-accent-warm", border: "border-accent-warm/30" };
      default: return { bg: "bg-white/5", text: "text-text-muted", border: "border-white/10" };
    }
  };

  const colors = getColors(risk);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`glass p-6 rounded-[2rem] flex flex-col justify-between ${colors.border}`}
    >
      <div className="text-[10px] text-text-muted uppercase tracking-widest font-mono mb-2">Burnout Risk</div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className={`w-3 h-3 rounded-full ${colors.bg.replace('/10', '')} ${risk === 'CRITICAL' || risk === 'HIGH' ? 'animate-ping absolute inset-0' : ''}`} />
            <div className={`w-3 h-3 rounded-full ${colors.bg.replace('/10', '')} relative z-10`} />
          </div>
          <span className={`text-4xl font-display font-bold ${colors.text}`}>{risk}</span>
        </div>
        <p className="text-[10px] text-text-muted leading-relaxed">
          Based on your sleep patterns, stress logs, and cognitive resonance.
        </p>
      </div>
    </motion.div>
  );
};

export default BurnoutBadge;
