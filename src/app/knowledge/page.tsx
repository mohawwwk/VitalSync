"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Clock, ChevronRight, Play } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

import { articles } from "@/lib/knowledge-data";
import Link from "next/link";

const categories = ["All", "Neuroscience", "Ayurveda", "Bio-Hacking", "Quantum Energy", "Nutrition"];

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data load
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         a.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Link href={`/knowledge/${articles[0].id}`}>
              <Image
                src={articles[0].image || "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000"}
                alt={articles[0].title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  const fallback = "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000";
                  if (target.src !== fallback) target.src = fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-12 space-y-4 max-w-3xl">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                  <span className="text-primary px-3 py-1 bg-primary/10 rounded-full">{articles[0].category}</span>
                  <span className="text-text-muted flex items-center gap-2"><Clock size={14} /> {articles[0].readTime}</span>
                </div>
                <h2 className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">{articles[0].title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">{articles[0].description}</p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    Read Full Thesis <ChevronRight size={20} />
                  </div>
                  {articles[0].youtubeLinks.length > 0 && (
                    <div className="flex items-center gap-2 text-accent font-bold">
                      Watch Lecture <Play size={16} fill="currentColor" />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 rounded-[2rem]" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(a => !a.featured || activeCategory !== "All" || searchQuery !== "").map((article, i) => (
              <Link key={article.id} href={`/knowledge/${article.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <GlassCard className="h-full flex flex-col overflow-hidden border-white/5 group-hover:border-primary/30 transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={e => {
                          const target = e.target as HTMLImageElement;
                          const fallback = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000";
                          if (target.src !== fallback) target.src = fallback;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-primary font-bold text-sm flex items-center gap-2">
                          Read Blueprint <ChevronRight size={16} />
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-background/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-primary uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col space-y-4">
                      <div className="flex items-center gap-4 text-[10px] text-text-muted font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-sm text-text-secondary line-clamp-3 flex-grow">
                        {article.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-text-muted">
              <Search size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text-primary">No articles found</h3>
              <p className="text-text-secondary">Try adjusting your search or category filters.</p>
            </div>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Video Lectures / Masterclasses */}
        <div className="pt-20 space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-text-primary">Masterclasses.</h2>
              <p className="text-text-secondary">Guided deep-dives from our resident experts.</p>
            </div>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-primary font-bold flex items-center gap-2 hover:underline transition-all"
            >
              View Archive <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.slice(0, 2).map((article) => (
              <Link
                key={article.id}
                href={`/knowledge/${article.id}`}
                className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                <Image
                  src={article.image || "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000"}
                  alt={article.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    const fallback = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000";
                    if (target.src !== fallback) target.src = fallback;
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                  <div className="text-center px-6">
                    <h4 className="text-2xl font-display font-bold text-white">{article.title}</h4>
                    <p className="text-white/60 text-sm">{article.category} • {article.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KnowledgeHub;
