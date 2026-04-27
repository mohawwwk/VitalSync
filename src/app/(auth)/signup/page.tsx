"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/assess";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      router.push(from);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-text-primary"
            placeholder="••••••••"
          />
        </div>
      </div>

      {error && <p className="text-accent-warm text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left: Illustration */}
      <div className="hidden lg:flex flex-1 bg-surface-elevated items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-texture opacity-5" />
        <div className="relative z-10 text-center space-y-12">
          <div className="w-64 h-64 mx-auto relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-primary/10 rounded-[3rem]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center blur-3xl opacity-20" />
              <div className="w-20 h-20 bg-primary rounded-xl rotate-12 flex items-center justify-center relative z-20">
                <div className="w-8 h-8 bg-white rounded-sm" />
              </div>
            </div>
          </div>
          <div className="space-y-4 max-w-sm mx-auto">
            <h2 className="text-3xl font-display font-bold">Start Your Journey.</h2>
            <p className="text-text-secondary font-body">Join thousands of others who have unlocked their wellness potential with VitalSync.</p>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-display font-bold">Create Account.</h1>
            <p className="text-text-secondary font-body">Enter your details to begin your personalized assessment.</p>
          </div>

          <Suspense fallback={<div className="text-text-secondary text-sm">Loading signup form...</div>}>
            <SignupForm />
          </Suspense>

          <p className="text-center text-text-secondary text-sm font-body">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
