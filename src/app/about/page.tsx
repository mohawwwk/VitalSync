"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-accent uppercase tracking-widest">
              Our Origin
            </div>
            <h1 className="text-7xl font-display font-bold text-text-primary leading-[1.1]">
              The Future of <span className="text-primary">Vitality</span> is Here.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              VitalSync was born from a simple realization: the modern world is designed to drain us. Between digital overload, processed environments, and disconnected lifestyles, our biological systems are in a constant state of emergency.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              We&apos;ve assembled a team of neuroscientists, Ayurvedic masters, and AI engineers to build a platform that doesn&apos;t just treat symptoms—it re-aligns your fundamental energy.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square glass rounded-[4rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-white/10 rounded-full animate-ping opacity-20" />
                <div className="w-48 h-48 border border-white/20 rounded-full absolute animate-pulse" />
                <div className="w-32 h-32 bg-primary/40 blur-[80px] rounded-full" />
              </div>
            </div>
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl border-primary/20"
            >
              <div className="text-4xl font-mono font-bold text-primary">98%</div>
              <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Accuracy Rate</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border-accent/20"
            >
              <div className="text-4xl font-mono font-bold text-accent">50k+</div>
              <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Lives Optimized</div>
            </motion.div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-text-primary">The Three Pillars</h2>
            <p className="text-text-secondary">Our methodology combines three distinct domains of human knowledge.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum AI",
                content: "We use Grok-3 to process thousands of data points across your biometric, emotional, and physical states.",
                color: "text-primary"
              },
              {
                title: "Ancient Wisdom",
                content: "Ayurvedic principles provide the foundational logic for understanding individual biological constitutions.",
                color: "text-accent"
              },
              {
                title: "Modern Science",
                content: "Neuroscience and sports medicine validate every recommendation, ensuring physiological safety and efficacy.",
                color: "text-accent-warm"
              }
            ].map((pillar, i) => (
              <div key={pillar.title} className="glass p-10 rounded-[3rem] space-y-6">
                <div className={`text-5xl font-mono font-bold ${pillar.color} opacity-20`}>0{i+1}</div>
                <h3 className="text-2xl font-display font-bold text-text-primary">{pillar.title}</h3>
                <p className="text-text-secondary leading-relaxed">{pillar.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative h-[500px] rounded-[5rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl">
              Stop surviving. <br />
              <span className="italic opacity-70">Start Syncing.</span>
            </h2>
            <Link href="/assess" className="px-12 py-6 bg-white text-primary rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl">
              Begin Your Evolution
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
