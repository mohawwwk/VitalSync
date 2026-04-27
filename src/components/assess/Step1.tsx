"use client";

import React from "react";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { cn } from "@/lib/utils";

const Step1 = () => {
  const { data, updateData, setStep } = useAssessmentStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.gender) {
      alert("Please select your gender");
      return;
    }
    setStep(2);
  };

  const genders = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "non-binary", label: "Non-binary" },
    { id: "other", label: "Other" }
  ];

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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Age</label>
            <input
              type="number"
              required
              min="1"
              max="120"
              value={data.age}
              onChange={(e) => updateData({ age: parseInt(e.target.value) || 0 })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-text-muted">Gender</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {genders.map((gender) => (
                <button
                  key={gender.id}
                  type="button"
                  onClick={() => updateData({ gender: gender.id })}
                  className={cn(
                    "py-3 rounded-xl border transition-all text-sm font-bold",
                    data.gender === gender.id
                      ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(123,110,246,0.3)]"
                      : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
                  )}
                >
                  {gender.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">Occupation</label>
            <input
              type="text"
              required
              value={data.occupation}
              onChange={(e) => updateData({ occupation: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
              placeholder="e.g. Software Engineer"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-muted">City / Location</label>
            <input
              type="text"
              required
              value={data.city}
              onChange={(e) => updateData({ city: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
              placeholder="e.g. New York"
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
                    "py-3 rounded-xl border transition-all text-[10px] font-bold uppercase tracking-wider",
                    data.lifestyle === type
                      ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(123,110,246,0.3)]"
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
          className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(123,110,246,0.3)]"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
