"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { Check, AlertCircle } from "lucide-react";
import { assessmentService, userService } from "@/services/api";

const Step7 = () => {
  const { data, setStep, setResults } = useAssessmentStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingText, setLoadingText] = useState("Analysing your wellness profile...");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setError(null);
    // Check if user is logged in first
    try {
      const checkRes = await userService.getMe();
      if (!checkRes.ok) {
        // Not logged in - redirect to signup but keep assessment data in store
        router.push("/signup?from=/assess");
        return;
      }
    } catch (err) {
      router.push("/signup?from=/assess");
      return;
    }

    setIsSubmitting(true);
    
    const texts = [
      "Reading energy patterns...",
      "Consulting Ayurvedic database...",
      "Calculating burnout risk...",
      "Building your wellness blueprint...",
      "Finalizing AI diagnosis..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(texts[i % texts.length]);
      i++;
    }, 2000);

    try {
      const res = await assessmentService.submit(data);
      const results = await res.json();
      
      if (!res.ok) {
        throw new Error(results.error || "Diagnosis failed");
      }
      
      if (!results || results.error) {
        throw new Error(results?.error || "Invalid AI response");
      }
      
      setResults(results);
      
      setTimeout(() => {
        clearInterval(interval);
        router.push("/dashboard");
      }, 1000);
    } catch (err: any) {
      console.error(err);
      setIsSubmitting(false);
      clearInterval(interval);
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-12">
        <div className="relative w-32 h-32">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              animate={{
                x: Math.cos((i * 45 * Math.PI) / 180) * 50,
                y: Math.sin((i * 45 * Math.PI) / 180) * 50,
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-accent rounded-full animate-ping" />
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl font-display font-bold text-text-primary"
          >
            {loadingText}
          </motion.p>
          <p className="text-text-muted text-sm font-body">Our AI is processing your biometric data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-bold">Review & Sync.</h2>
        <p className="text-text-secondary">Ready to discover your wellness blueprint?</p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "Profile", value: `${data.name}, ${data.age}` },
          { label: "Sleep", value: `${data.sleepHours}h avg.` },
          { label: "Stress", value: `Level ${data.stressLevel}/10` },
          { label: "Physical", value: `${data.conditions.length > 0 ? data.conditions[0] : "None"}` },
          { label: "Energy", value: `Most alive in ${data.aliveTime}` },
          { label: "Peace", value: `Last felt: ${data.lastPeace}` },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <Check size={16} />
            </div>
            <div>
              <div className="text-[10px] text-text-muted uppercase tracking-widest font-mono">{item.label}</div>
              <div className="text-sm font-bold">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
        <p className="text-sm text-text-secondary leading-relaxed">
          By submitting, you consent to our AI processing your data to provide personalized wellness insights. Your data is encrypted and used only for your diagnostic report.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep(6)}
          className="flex-1 px-8 py-4 border border-border text-text-primary rounded-xl font-bold hover:bg-white/5 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="flex-[2] bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,110,246,0.4)]"
        >
          Generate My Blueprint
        </button>
      </div>
    </div>
  );
};

export default Step7;
