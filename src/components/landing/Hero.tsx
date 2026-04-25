"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PixelTrail } from "@/components/ui/PixelTrail";
import { GooeyFilter } from "@/components/ui/GooeyFilter";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <GooeyFilter />
      <PixelTrail color="#7B6EF6" pixelSize={24} fadeSpeed={0.02} />
      
      <div className="relative z-10 max-w-5xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-text-primary leading-[1.1]">
            Your Body Has a Signal. <br />
            <span className="text-primary">We Read It.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-body"
        >
          AI-powered wellness diagnostics combining quantum biometrics, Ayurveda, and modern science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/assess" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(123,110,246,0.3)]">
            Start Assessment
          </Link>
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-border text-text-primary rounded-full font-bold hover:bg-white/5 transition-colors duration-300"
          >
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Floating Glass Cards */}
      <div className="absolute bottom-12 left-0 right-0 hidden md:flex justify-center gap-8 md:gap-16 px-4">
        {[
          { label: "Assessments", value: "2,400+" },
          { label: "Accuracy", value: "94%" },
          { label: "Dimensions", value: "12" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.1, type: "spring", stiffness: 100 }}
            className="glass px-6 py-4 rounded-2xl text-center min-w-[120px]"
          >
            <div className="text-2xl font-mono font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-text-muted uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
