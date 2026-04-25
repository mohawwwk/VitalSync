"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step6 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const triggers = ["Workload", "Relationships", "Finances", "Health", "Uncertainty", "Social Media", "Loneliness"];

  const toggleTrigger = (trigger: string) => {
    const current = data.emotionalTriggers || [];
    if (current.includes(trigger)) {
      updateData({ emotionalTriggers: current.filter(t => t !== trigger) });
    } else {
      updateData({ emotionalTriggers: [...current, trigger] });
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Emotional Blueprint.</h2>
        <p className="text-text-secondary">Emotions are the signals your body sends to your mind.</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-text-muted">Work-Life Satisfaction (1-10)</label>
            <span className="text-primary font-mono font-bold">{data.workSatisfaction}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={data.workSatisfaction}
            onChange={(e) => updateData({ workSatisfaction: parseInt(e.target.value) })}
            className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">Primary Emotional Triggers</label>
          <div className="flex flex-wrap gap-2">
            {triggers.map((trigger) => (
              <button
                key={trigger}
                onClick={() => toggleTrigger(trigger)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all text-sm font-medium",
                  data.emotionalTriggers?.includes(trigger)
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-text-secondary hover:border-white/20"
                )}
              >
                {trigger}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">Last time you felt truly at peace?</label>
          <div className="grid grid-cols-2 gap-3">
            {["Today", "This week", "Last month", "Can't remember"].map((time) => (
              <button
                key={time}
                onClick={() => updateData({ lastPeace: time.toLowerCase() })}
                className={cn(
                  "py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider",
                  data.lastPeace === time.toLowerCase()
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                )}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep(5)}
            className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(7)}
            className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Review & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step6;
