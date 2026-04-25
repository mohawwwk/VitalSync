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

const RadarChartBreakdown = ({ data }: { data: any }) => {
  const chartData = Object.entries(data).map(([key, value]) => ({
    subject: key.charAt(0).toUpperCase() + key.slice(1),
    A: value as number,
    fullMark: 100,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass p-8 rounded-[2.5rem] h-[400px] flex flex-col"
    >
      <h3 className="text-sm font-display font-bold text-text-muted uppercase tracking-widest mb-4 text-center">
        8-Dimension Breakdown
      </h3>
      <div className="flex-1 w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
            <PolarGrid stroke="rgba(255,255,255,0.05)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#8B8A9B", fontSize: 10, fontWeight: 500 }}
            />
            <Radar
              name="Vitality"
              dataKey="A"
              stroke="#7B6EF6"
              fill="#7B6EF6"
              fillOpacity={0.3}
              animationDuration={1500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RadarChartBreakdown;
