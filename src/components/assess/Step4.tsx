"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step4 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const chronicConditions = [
    "Diabetes", "Hypertension", "Asthma", "Thyroid", "PCOS", "Insomnia", "Anxiety", "None"
  ];

  const toggleCondition = (condition: string) => {
    const current = data.conditions || [];
    if (condition === "None") {
      updateData({ conditions: ["None"] });
      return;
    }
    const filtered = current.filter(c => c !== "None");
    if (filtered.includes(condition)) {
      updateData({ conditions: filtered.filter(c => c !== condition) });
    } else {
      updateData({ conditions: [...filtered, condition] });
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Physical Vessel.</h2>
        <p className="text-text-secondary">Your physical habits dictate your biological longevity.</p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-text-muted">Daily Screen Time (h)</label>
              <span className="text-primary font-mono font-bold">{data.screenTime}h</span>
            </div>
            <input
              type="range"
              min="1"
              max="16"
              value={data.screenTime}
              onChange={(e) => updateData({ screenTime: parseInt(e.target.value) })}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-text-muted">Water Intake (Liters)</label>
              <span className="text-primary font-mono font-bold">{data.waterIntake}L</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              step="0.5"
              value={data.waterIntake}
              onChange={(e) => updateData({ waterIntake: parseFloat(e.target.value) })}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">Any chronic conditions? (Select all that apply)</label>
          <div className="flex flex-wrap gap-2">
            {chronicConditions.map((condition) => (
              <button
                key={condition}
                onClick={() => toggleCondition(condition)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all text-sm font-medium",
                  data.conditions?.includes(condition)
                    ? "bg-accent border-accent text-background"
                    : "bg-white/5 border-white/10 text-text-secondary hover:border-white/20"
                )}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep(3)}
            className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(5)}
            className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
