"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Physical", A: 85, fullMark: 100 },
  { subject: "Mental", A: 70, fullMark: 100 },
  { subject: "Emotional", A: 60, fullMark: 100 },
  { subject: "Social", A: 90, fullMark: 100 },
  { subject: "Spiritual", A: 50, fullMark: 100 },
  { subject: "Nutritional", A: 75, fullMark: 100 },
  { subject: "Sleep", A: 40, fullMark: 100 },
  { subject: "Energy", A: 65, fullMark: 100 },
];

const RadarPreview = () => {
  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Your Wellness Has <span className="text-primary">8 Dimensions.</span> <br />
              Most Apps Track 1.
            </h2>
            <p className="text-text-secondary text-lg font-body leading-relaxed max-w-xl">
              VitalSync provides a holistic 360° view of your health. We don&apos;t just count steps; we measure your energetic frequency, Ayurvedic balance, and cognitive resonance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-mono font-bold text-primary">8</div>
              <div className="text-xs text-text-muted uppercase tracking-widest">Key Dimensions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-mono font-bold text-accent">360°</div>
              <div className="text-xs text-text-muted uppercase tracking-widest">Holistic Insight</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-[400px] md:h-[500px] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full h-full glass rounded-3xl p-8 flex items-center justify-center relative z-10"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "#8B8A9B", fontSize: 12, fontWeight: 500 }}
                />
                <Radar
                  name="Vitality"
                  dataKey="A"
                  stroke="#7B6EF6"
                  fill="#7B6EF6"
                  fillOpacity={0.4}
                  animationDuration={1500}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default RadarPreview;
