"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step5 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const aliveTimes = [
    { label: "Morning", value: "morning", emoji: "🌅" },
    { label: "Afternoon", value: "afternoon", emoji: "☀️" },
    { label: "Evening", value: "evening", emoji: "🌆" },
    { label: "Night", value: "night", emoji: "🌙" },
  ];

  const doshaQuestions = [
    { id: "q1", question: "Body frame and build?", options: ["Lean/Bony", "Medium/Athletic", "Large/Solid"] },
    { id: "q2", question: "Digestion and appetite?", options: ["Irregular/Variable", "Strong/Intense", "Slow/Steady"] },
    { id: "q3", question: "Skin texture?", options: ["Dry/Rough", "Oily/Sensitive", "Smooth/Thick"] },
    { id: "q4", question: "Mental state under stress?", options: ["Anxious/Fearful", "Angry/Irritable", "Withdrawn/Calm"] },
    { id: "q5", question: "Sleep pattern?", options: ["Light/Interrupted", "Deep/Moderate", "Heavy/Long"] },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Energy & Ayurveda.</h2>
        <p className="text-text-secondary">Ancient wisdom meets your current energetic frequency.</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <label className="text-sm font-medium text-text-muted">When do you feel most alive?</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aliveTimes.map((time) => (
              <button
                key={time.value}
                onClick={() => updateData({ aliveTime: time.value })}
                className={cn(
                  "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all",
                  data.aliveTime === time.value
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                )}
              >
                <span className="text-2xl">{time.emoji}</span>
                <span className="text-xs font-bold uppercase tracking-wider">{time.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-sm font-medium text-text-muted">Dosha Diagnostic Quiz</label>
          <div className="space-y-8">
            {doshaQuestions.map((q) => (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-body">{q.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => updateData({ doshaQuiz: { ...data.doshaQuiz, [q.id]: opt } })}
                      className={cn(
                        "py-3 rounded-xl border transition-all text-xs font-medium",
                        data.doshaQuiz[q.id as keyof typeof data.doshaQuiz] === opt
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setStep(4)}
            className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep(6)}
            className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
