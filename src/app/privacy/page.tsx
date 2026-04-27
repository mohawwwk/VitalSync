"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl font-display font-bold text-text-primary">Privacy Policy</h1>
        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">1. Data Encryption</h2>
            <p>Your biometric and personal data is encrypted using military-grade AES-256 protocols. We never sell your personal wellness data to third parties.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">2. AI Processing</h2>
            <p>Our AI models process your data locally where possible. Cloud-based analysis is performed on anonymized data sets to ensure your identity remains protected.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">3. Your Rights</h2>
            <p>You have the right to request a full export of your data or its permanent deletion at any time via your account settings.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
