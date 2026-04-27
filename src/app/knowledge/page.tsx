"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Tag, Clock, ChevronRight, Play } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Neuroscience", "Ayurveda", "Bio-Hacking", "Quantum Energy", "Nutrition"];

const articles = [
  {
    id: 1,
    title: "The Neuro-Circuitry of Burnout",
    category: "Neuroscience",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000",
    excerpt: "Understanding the HPA axis and how chronic stress rewires your prefrontal cortex.",
    featured: true
  },
  {
    id: 2,
    title: "Doshas in the Digital Age",
    category: "Ayurveda",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000",
    excerpt: "How Vata imbalances manifest as screen fatigue and anxiety in modern workers.",
    featured: false
  },
  {
    id: 3,
    title: "Circadian Rhythm Entrainment",
    category: "Bio-Hacking",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505481327203-888497e889e4?q=80&w=2000",
    excerpt: "The science of morning light exposure and its impact on cortisol production.",
    featured: false
  },
  {
    id: 4,
    title: "Quantum Biology 101",
    category: "Quantum Energy",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    excerpt: "Exploring the role of mitochondrial coherence in overall vitality.",
    featured: false
  }
];

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articles.filter(a => 
    activeCategory === "All" || a.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-6xl font-display font-bold text-text-primary leading-tight">
              Knowledge <span className="text-primary italic">Hub.</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Deep-dives into the science and spirit of human optimization.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search the archive..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-primary border-primary text-white" 
                  : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer"
          >
            <Image 
              src={articles[0].image} 
              alt={articles[0].title} 
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12 space-y-4 max-w-3xl">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <span className="text-primary px-3 py-1 bg-primary/10 rounded-full">{articles[0].category}</span>
                <span className="text-text-muted flex items-center gap-2"><Clock size={14} /> {articles[0].readTime}</span>
              </div>
              <h2 className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">{articles[0].title}</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{articles[0].excerpt}</p>
              <button className="flex items-center gap-2 text-primary font-bold pt-4">
                Read Full Thesis <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.filter(a => !a.featured || activeCategory !== "All").map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="group h-full flex flex-col overflow-hidden border-transparent hover:border-primary/20 transition-all">
                <div className="h-56 overflow-hidden relative">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <div className="flex items-center gap-3 text-[10px] text-text-muted uppercase font-bold tracking-widest">
                    <Clock size={12} /> {article.readTime}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-white/5 flex justify-between items-center">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
                    Access Paper
                  </button>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-muted group-hover:bg-primary/20 group-hover:text-primary transition-all">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Video Lectures / Masterclasses */}
        <div className="pt-20 space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-text-primary">Masterclasses.</h2>
              <p className="text-text-secondary">Guided deep-dives from our resident experts.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2">View Archive <ChevronRight size={20} /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Quantum Entrainment Masterclass", author: "Dr. Aris Thorne", duration: "45 min" },
              { title: "Advanced Somatic Release", author: "Marcus Kael", duration: "32 min" }
            ].map((video) => (
              <div key={video.title} className="relative aspect-video rounded-[3rem] overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-display font-bold text-white">{video.title}</h4>
                    <p className="text-white/60 text-sm">{video.author} • {video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KnowledgeHub;
