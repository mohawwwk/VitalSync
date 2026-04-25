"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step3 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const moodTiles = [
    { label: "Calm", value: "calm" },
    { label: "Anxious", value: "anxious" },
    { label: "Focused", value: "focused" },
    { label: "Scattered", value: "scattered" },
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Energized", value: "energized" },
    { label: "Drained", value: "drained" },
  ];

  const toggleMood = (mood: string) => {
    const currentMoods = data.mood || [];
    if (currentMoods.includes(mood)) {
      updateData({ mood: currentMoods.filter((m) => m !== mood) });
    } else {
      updateData({ mood: [...currentMoods, mood] });
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Mental Resonance.</h2>
        <p className="text-text-secondary">Your mind's state determines your energetic output.</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-text-muted">Stress Level this week (1-10)</label>
            <span className="text-primary font-mono font-bold">{data.stressLevel}</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={data.stressLevel}
            onChange={(e) => updateData({ stressLevel: parseInt(e.target.value) })}
            className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">Select moods you've felt recently</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {moodTiles.map((mood) => (
              <button
                key={mood.value}
                onClick={() => toggleMood(mood.value)}
                className={cn(
                  "py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider",
                  data.mood?.includes(mood.value)
                    ? "bg-primary border-primary text-white"
                    : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                )}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">Describe how you've been feeling lately</label>
          <textarea
            value={data.feelingDescription}
            onChange={(e) => updateData({ feelingDescription: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors min-h-[120px] resize-none"
            placeholder="I've been feeling a bit overwhelmed with work but excited about my new hobby..."
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep(2)}
            className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(4)}
            className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
