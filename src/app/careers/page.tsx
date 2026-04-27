"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-display font-bold text-text-primary">Join the Evolution.</h1>
        <p className="text-xl text-text-secondary">
          We're always looking for neuroscientists, AI engineers, and wellness masters to help us build the future of vitality.
        </p>
        <div className="glass p-8 rounded-3xl border-white/5">
          <p className="text-text-muted">Currently, we're building our core team. Check back soon for open positions.</p>
        </div>
        <Link href="/" className="text-primary font-bold hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}
