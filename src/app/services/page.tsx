"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, Heart, Moon, Shield, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const services = [
  {
    title: "AI Quantum Diagnosis",
    description: "Deep-layer biometric analysis using Grok-3 to identify root causes of physical and mental fatigue.",
    icon: <Zap className="text-primary" size={24} />,
    features: ["Biometric Resonance", "Root Cause Analysis", "Predictive Health Modeling"]
  },
  {
    title: "Neuro-Wellness Coaching",
    description: "Personalized protocols based on your cognitive load and neural stress patterns.",
    icon: <Brain className="text-accent" size={24} />,
    features: ["Focus Optimization", "Stress Resilience", "Neural Flow Training"]
  },
  {
    title: "Ayurvedic Bio-Hacking",
    description: "Ancient wisdom meets modern science. Dosha-specific nutrition and lifestyle adjustments.",
    icon: <Heart className="text-accent-warm" size={24} />,
    features: ["Dosha Balancing", "Biological Clock Sync", "Elemental Nutrition"]
  },
  {
    title: "Sleep Architecture",
    description: "Redesign your sleep from the ground up using circadian rhythm data and environmental tuning.",
    icon: <Moon className="text-primary" size={24} />,
    features: ["REM Optimization", "Circadian Syncing", "Recovery Tracking"]
  },
  {
    title: "Energy Meridian Therapy",
    description: "Acupressure and energetic alignment strategies to clear biological blockages.",
    icon: <Sparkles className="text-accent" size={24} />,
    features: ["Point Stimulation", "Flow Restoration", "Tension Release"]
  },
  {
    title: "Vitality Protection",
    description: "Advanced longevity strategies and immunity shielding based on your unique profile.",
    icon: <Shield className="text-accent-warm" size={24} />,
    features: ["Longevity Planning", "Immune Resilience", "Aging Delay"]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest"
          >
            Our Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-display font-bold text-text-primary leading-tight"
          >
            Precision <span className="text-primary italic">Services</span> for the Modern Human.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed"
          >
                        We&apos;ve combined ancient healing modalities with cutting-edge artificial intelligence to create the world&apos;s most comprehensive wellness stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 h-full flex flex-col space-y-6 group hover:border-primary/30 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-display font-bold text-text-primary">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {service.features.map(f => (
                    <li key={f} className="text-[10px] text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass p-12 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-bold text-text-primary">Need a custom protocol?</h2>
            <p className="text-text-secondary max-w-md">Our AI can architect a custom wellness journey specifically for your unique biological constraints and goals.</p>
          </div>
          <button className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_40px_rgba(123,110,246,0.3)]">
            Start Free Assessment
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesPage;
