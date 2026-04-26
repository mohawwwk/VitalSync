"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";

const Step1 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">The Basics.</h2>
        <p className="text-text-secondary">Let&apos;s start with your profile. This helps us contextualize your data.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Full Name</label>
            <input
              type="text"
              required
              value={data.name}
              onChange={(e) => updateData({ name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Age</label>
            <input
              type="number"
              required
              value={data.age}
              onChange={(e) => updateData({ age: parseInt(e.target.value) })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Gender</label>
            <select
              value={data.gender}
              onChange={(e) => updateData({ gender: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Occupation</label>
            <input
              type="text"
              required
              value={data.occupation}
              onChange={(e) => updateData({ occupation: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="e.g. Software Engineer"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-text-muted">Lifestyle</label>
            <div className="grid grid-cols-3 gap-4">
              {["sedentary", "moderately active", "highly active"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateData({ lifestyle: type })}
                  className={cn(
                    "py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider",
                    data.lifestyle === type
                      ? "bg-primary border-primary text-white"
                      : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

import { cn } from "@/lib/utils";

export default Step1;
