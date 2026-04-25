"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Knowledge Hub", href: "/knowledge" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Booking", href: "/booking" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-2xl font-display font-bold text-text-primary tracking-tighter">
            VitalSync
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/profile"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all"
          >
            <User size={18} />
          </Link>
          <Link
            href="/assess"
            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Start Assessment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/profile"
              className="text-lg font-medium text-text-secondary flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User size={18} /> Profile
            </Link>
            <Link
              href="/assess"
              className="w-full py-4 bg-primary text-white rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Assessment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
