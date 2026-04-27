
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text-primary">
        <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
        <button 
          onClick={() => router.push("/knowledge")}
          className="text-primary hover:underline flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Knowledge Hub
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/knowledge")}
          className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </motion.button>

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
            src={article.image || "/placeholder-knowledge.jpg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
            onError={e => {
              const target = e.target as HTMLImageElement;
              if (target.src !== '/placeholder-knowledge.jpg') target.src = '/placeholder-knowledge.jpg';
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
                            src={related.image || "/placeholder-knowledge.jpg"}
                            alt={related.title}
                            fill
                            className="object-cover"
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
            className="lg:col-span-4 space-y-12"
          >
            {/* References */}
            <div className="glass p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-display font-bold text-text-primary flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                References
              </h3>
              <div className="space-y-4">
                {article.references.map((ref, index) => (
                  <a
                    key={index}
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="text-sm text-text-secondary group-hover:text-primary transition-colors leading-snug">
                      {ref.text}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-text-muted uppercase tracking-widest mt-1">
                      View Source <ExternalLink size={10} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Share / Actions */}
            <div className="glass p-8 rounded-[2rem] text-center">
              <h4 className="text-sm font-bold text-text-primary mb-4">Share this Blueprint</h4>
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <Tag size={16} />
                </div>
                {/* Add more social icons here */}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
