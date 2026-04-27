"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      router.push(from);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
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
      </div>

      {error && <p className="text-accent-warm text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-4xl font-display font-bold">Welcome back.</h1>
            <p className="text-text-secondary font-body">Enter your credentials to access your wellness dashboard.</p>
          </div>

          <Suspense fallback={<div className="text-text-secondary text-sm">Loading login form...</div>}>
            <LoginForm />
          </Suspense>

          <p className="text-center text-text-secondary text-sm font-body">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Illustration */}
      <div className="hidden lg:flex flex-1 bg-surface-elevated items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise-texture opacity-5" />
        <div className="relative z-10 text-center space-y-12">
          <div className="w-64 h-64 mx-auto relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-2 border-accent/20 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(123,110,246,0.3)]">
                <div className="w-12 h-12 bg-white rounded-lg" />
              </div>
            </div>
          </div>
          <div className="space-y-4 max-w-sm mx-auto">
            <h2 className="text-3xl font-display font-bold">Quantify Your Vitality.</h2>
            <p className="text-text-secondary font-body">Access deep insights into your physical and energetic state through our proprietary AI engine.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
