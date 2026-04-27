"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

const AICoach = ({ userData }: { userData: any }) => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hello! I've analyzed your ${userData.personalityType} profile. You have high burnout risk today. How are you feeling?` }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const messageToSend = input.trim();
    if (!messageToSend) return;
    
    const userMsg = { role: "user", content: messageToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageToSend,
          userData: userData,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const aiMsg = { role: "assistant", content: data.response || "I've processed your request. How else can I help?" };
        setMessages(prev => [...prev, aiMsg]);
      } else {
        throw new Error(data.error || "Chat failed");
      }
    } catch (err: any) {
      console.error("Chat Client Error:", err);
      const aiMsg = { 
        role: "assistant", 
        content: "I'm having a bit of trouble connecting to my neural network right now. But based on your profile, I'd suggest focusing on deep breathing for 2 minutes." 
      };
      setMessages(prev => [...prev, aiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="glass h-full rounded-[2.5rem] flex flex-col overflow-hidden border-primary/10">
      <div className="p-6 border-b border-white/5 bg-primary/5 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="font-display font-bold text-text-primary">AI Wellness Coach</h3>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">Always Learning</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                msg.role === "assistant" ? "bg-primary/20 text-primary" : "bg-white/10 text-text-secondary"
              )}>
                {msg.role === "assistant" ? <Sparkles size={14} /> : <User size={14} />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                msg.role === "assistant" ? "bg-white/5 text-text-secondary" : "bg-primary text-white"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <Sparkles size={14} />
              </div>
              <div className="bg-white/5 p-4 rounded-2xl flex gap-1">
                <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6 border-t border-white/5">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your coach anything..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:border-primary transition-colors text-sm"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-2 bottom-2 w-10 bg-primary text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
