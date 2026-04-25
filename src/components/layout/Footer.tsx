"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-2xl font-display font-bold text-text-primary tracking-tighter">
              VitalSync
            </span>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed">
            The next generation of wellness diagnostics. Combining AI, Ayurveda, and Quantum biometrics to help you live your best life.
          </p>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li><Link href="/assess" className="hover:text-primary transition-colors">Assessment</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/booking" className="hover:text-primary transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/knowledge" className="hover:text-primary transition-colors">Knowledge Hub</Link></li>
            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-text-primary font-bold mb-6">Subscribe</h4>
          <p className="text-sm text-text-secondary mb-4">Get wellness insights delivered to your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
            />
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between border-t border-border/50 pt-8 gap-4">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} VitalSync Wellness Platforms Inc. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-text-muted">
          <Link href="/privacy" className="hover:text-text-secondary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-text-secondary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
