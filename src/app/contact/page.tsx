"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-5xl font-display font-bold text-text-primary">Let&apos;s Connect.</h1>
        <p className="text-xl text-text-secondary">
          Have questions about your blueprint or want to partner with us?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-6 rounded-2xl border-white/5">
            <h3 className="font-bold text-text-primary">Email</h3>
            <p className="text-primary">hello@vitalsync.ai</p>
          </div>
          <div className="glass p-6 rounded-2xl border-white/5">
            <h3 className="font-bold text-text-primary">Support</h3>
            <p className="text-primary">support@vitalsync.ai</p>
          </div>
        </div>
        <Link href="/" className="text-primary font-bold hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}
