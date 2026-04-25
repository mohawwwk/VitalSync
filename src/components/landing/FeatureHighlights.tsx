"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";

const features = [
  {
    title: "AI Diagnosis Engine",
    description: "Deep-learning models trained on thousands of clinical and holistic datasets.",
    size: "large",
  },
  {
    title: "Digital Twin Simulation",
    description: "Predict your health 30 days into the future based on current habits.",
    size: "small",
  },
  {
    title: "Burnout Warning",
    description: "Detect early signs of cognitive exhaustion before it hits.",
    size: "small",
  },
  {
    title: "Quantum Biometrics",
    description: "Measuring the subtle energy fields that traditional medicine misses.",
    size: "small",
  },
  {
    title: "Ayurvedic Intelligence",
    description: "Personalized nutrition and lifestyle based on your unique Dosha.",
    size: "large",
  },
  {
    title: "Emotion Tracking",
    description: "Mapping the resonance of your emotional patterns over time.",
    size: "small",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Future-Ready <span className="text-primary">Features</span>
          </h2>
          <p className="text-text-secondary max-w-xl">
            Our technology stack combines ancient wisdom with the cutting edge of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((feature, i) => (
            <GlassCard
              key={i}
              className={cn(
                "flex flex-col justify-end p-8 border-white/5",
                feature.size === "large" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <h3 className="text-2xl font-display font-bold">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

import { cn } from "@/lib/utils";

export default FeatureHighlights;
