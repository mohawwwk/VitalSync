"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const WeeklyPlan = ({ plan }: { plan: any[] }) => {
  const [openDay, setOpenDay] = useState<string | null>("Monday");
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleComplete = (day: string, ritual: string) => {
    const key = `${day}-${ritual}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="glass p-8 rounded-[2.5rem] space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-display font-bold text-text-primary">Your Weekly Protocol</h3>
        <span className="text-xs text-text-muted font-mono">{Object.keys(completed).length} Rituals Completed</span>
      </div>

      <div className="space-y-4">
        {plan.map((day) => (
          <div key={day.day} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
            <button
              onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
              className="w-full flex items-center justify-between py-2 group"
            >
              <span className={cn(
                "text-lg font-display font-bold transition-colors",
                openDay === day.day ? "text-primary" : "text-text-secondary group-hover:text-text-primary"
              )}>
                {day.day}
              </span>
              <motion.div
                animate={{ rotate: openDay === day.day ? 180 : 0 }}
                className="text-text-muted"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openDay === day.day && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 pb-2">
                    {["Morning", "Afternoon", "Evening"].map((time) => {
                      const ritual = day[time.toLowerCase()];
                      const isDone = completed[`${day.day}-${time}`];
                      return (
                        <div
                          key={time}
                          onClick={() => toggleComplete(day.day, time)}
                          className={cn(
                            "p-4 rounded-2xl border transition-all cursor-pointer group/item relative overflow-hidden",
                            isDone 
                              ? "bg-accent/5 border-accent/20" 
                              : "bg-white/5 border-white/10 hover:border-white/20"
                          )}
                        >
                          {isDone && (
                            <div className="absolute top-2 right-2 text-accent">
                              <CheckCircle2 size={16} />
                            </div>
                          )}
                          <div className="text-[8px] text-text-muted uppercase font-bold tracking-widest mb-1">{time}</div>
                          <div className={cn(
                            "text-sm font-medium leading-tight transition-all",
                            isDone ? "text-text-muted line-through" : "text-text-primary"
                          )}>
                            {ritual}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlan;
