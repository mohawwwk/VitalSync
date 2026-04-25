"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import Step1 from "@/components/assess/Step1";
import Step2 from "@/components/assess/Step2";
import Step3 from "@/components/assess/Step3";
import Step4 from "@/components/assess/Step4";
import Step5 from "@/components/assess/Step5";
import Step6 from "@/components/assess/Step6";
import Step7 from "@/components/assess/Step7";

const AssessmentPage = () => {
  const { step } = useAssessmentStore();

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
      case 6: return <Step6 />;
      case 7: return <Step7 />;
      default: return <Step1 />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Progress Indicator */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-between text-xs text-text-muted uppercase tracking-widest font-mono">
            <span>Step {step} of 7</span>
            <span>{Math.round((step / 7) * 100)}% Complete</span>
          </div>
          <div className="h-1 w-full bg-border rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(step / 7) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass p-8 md:p-12 rounded-[2.5rem]"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AssessmentPage;
