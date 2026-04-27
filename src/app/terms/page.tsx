"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl font-display font-bold text-text-primary">Terms of Service</h1>
        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">1. Not Medical Advice</h2>
            <p>VitalSync provides wellness insights and energetic optimization suggestions. We are not a medical provider, and our reports should not be used as a substitute for professional medical diagnosis or treatment.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">2. User Responsibility</h2>
            <p>You are responsible for the accuracy of the information provided during your assessment. Any recommendations followed are at your own discretion.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-text-primary">3. Subscription</h2>
            <p>Premium features and expert consultations are subject to their respective billing cycles and cancellation policies.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
