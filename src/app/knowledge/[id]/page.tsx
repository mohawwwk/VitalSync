
"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Clock, Tag, ExternalLink, Play, BookOpen } from "lucide-react";
import { articles } from "@/lib/knowledge-data";

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary px-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Blueprint Not Found</h1>
        <Link 
          href="/knowledge"
          className="text-primary hover:underline flex items-center gap-2 font-bold"
        >
          <ArrowLeft size={20} /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-12 group font-bold"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>

        {/* Header */}
        <header className="space-y-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Clock size={14} />
              {article.readTime}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-bold text-text-primary leading-tight"
          >
            {article.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed italic border-l-4 border-primary/30 pl-6"
          >
            {article.description}
          </motion.p>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 border border-white/5"
        >
          <Image
            src={article.image || "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000"}
            alt={article.title}
            fill
            className="object-cover"
            priority
            onError={e => {
              const target = e.target as HTMLImageElement;
              const fallback = "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000";
              if (target.src !== fallback) target.src = fallback;
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 prose prose-invert prose-primary max-w-none"
          >
            <div className="text-text-secondary text-lg leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>

            {/* Video Section */}
            {article.youtubeLinks.length > 0 && (
              <div className="mt-16 space-y-12">
                <h3 className="text-2xl font-display font-bold text-text-primary flex items-center gap-3">
                  <Play size={24} className="text-primary" />
                  Visual Learning
                </h3>
                {article.youtubeLinks.map((video, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-lg font-bold text-text-primary">{video.title}</h4>
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-surface">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Related Articles */}
            <div className="mt-20 pt-20 border-t border-white/10">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-8">Related Blueprints</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles
                  .filter(a => a.category === article.category && a.id !== article.id)
                  .slice(0, 2)
                  .map(related => (
                    <Link key={related.id} href={`/knowledge/${related.id}`}>
                      <div className="group glass p-4 rounded-2xl flex gap-4 items-center hover:border-primary/50 transition-all">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image || "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200"}
                            alt={related.title}
                            fill
                            className="object-cover"
                            onError={e => {
                              const target = e.target as HTMLImageElement;
                              const fallback = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200";
                              if (target.src !== fallback) target.src = fallback;
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-1">{related.title}</h4>
                          <p className="text-xs text-text-muted mt-1">{related.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* References */}
            <div className="glass p-8 rounded-[2rem] border-primary/10 shadow-2xl shadow-primary/5">
              <h3 className="text-xl font-display font-bold text-text-primary flex items-center gap-3 mb-8">
                <BookOpen size={20} className="text-primary" />
                References
              </h3>
              <div className="space-y-6">
                {article.references.map((ref, index) => (
                  <a
                    key={index}
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed mb-3">
                      {ref.text}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-primary font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Source <ExternalLink size={10} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Share / Actions */}
            <div className="glass p-8 rounded-[2rem] border-white/5 text-center space-y-6">
              <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest">Share Blueprint</h4>
              <div className="flex justify-center gap-4">
                {[Tag, ExternalLink].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
