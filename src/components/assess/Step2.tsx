"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step2 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const wakeFeelings = [
    { label: "Exhausted", value: "exhausted", emoji: "😫" },
    { label: "Groggy", value: "groggy", emoji: "😴" },
    { label: "Refreshed", value: "refreshed", emoji: "😊" },
    { label: "Energized", value: "energized", emoji: "⚡" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Sleep Architecture.</h2>
        <p className="text-text-secondary">Your sleep is the foundation of your recovery.</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-text-muted">Average Sleep Hours</label>
            <span className="text-primary font-mono font-bold">{data.sleepHours}h</span>
          </div>
          <input
            type="range"
            min="3"
            max="12"
            step="0.5"
            value={data.sleepHours}
            onChange={(e) => updateData({ sleepHours: parseFloat(e.target.value) })}
            className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-text-muted">Sleep Quality (1-10)</label>
            <span className="text-primary font-mono font-bold">{data.sleepQuality}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={data.sleepQuality}
            onChange={(e) => updateData({ sleepQuality: parseInt(e.target.value) })}
            className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">How do you usually wake up feeling?</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {wakeFeelings.map((feeling) => (
              <button
                key={feeling.value}
                onClick={() => updateData({ wakeFeeling: feeling.value })}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all",
                  data.wakeFeeling === feeling.value
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                )}
              >
                <span className="text-2xl">{feeling.emoji}</span>
                <span className="text-xs font-bold uppercase tracking-wider">{feeling.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep(1)}
            className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(3)}
            className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
