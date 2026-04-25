"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Video, ChevronRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const experts = [
  {
    id: 1,
    name: "Dr. Aris Thorne",
    role: "Quantum Bio-Energetics",
    bio: "Specializes in identifying energy leaks and re-aligning bio-magnetic fields.",
    rating: 4.9,
    reviews: 128,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aris",
    tags: ["Energy", "Neuroscience"]
  },
  {
    id: 2,
    name: "Sienna Vance",
    role: "Ayurvedic Alchemist",
    bio: "Expert in Dosha-specific nutrition and seasonal biological optimization.",
    rating: 5.0,
    reviews: 245,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sienna",
    tags: ["Ayurveda", "Nutrition"]
  },
  {
    id: 3,
    name: "Marcus Kael",
    role: "Acupressure Strategist",
    bio: "Master of meridian point therapy for chronic stress and somatic release.",
    rating: 4.8,
    reviews: 89,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    tags: ["Somatic", "Recovery"]
  }
];

const BookingPage = () => {
  const [selectedExpert, setSelectedExpert] = useState(experts[0]);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = ["Mon, Apr 27", "Tue, Apr 28", "Wed, Apr 29", "Thu, Apr 30", "Fri, May 1"];
  const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-5xl font-display font-bold text-text-primary leading-tight">
            Consult the <span className="text-primary italic">Architects</span> of Wellness.
          </h1>
          <p className="text-text-secondary text-lg">
            Book a session with our world-class practitioners to deep-dive into your AI diagnostic report.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Expert Selection / Booking Flow */}
          <div className="lg:col-span-8 space-y-8">
            
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Step 1: Select Expert</h3>
                <div className="grid grid-cols-1 gap-4">
                  {experts.map((expert) => (
                    <motion.div
                      key={expert.id}
                      onClick={() => setSelectedExpert(expert)}
                      className={cn(
                        "glass p-6 rounded-[2rem] cursor-pointer transition-all border-2",
                        selectedExpert.id === expert.id ? "border-primary" : "border-transparent hover:border-white/10"
                      )}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-24 h-24 bg-primary/20 rounded-2xl flex-shrink-0 overflow-hidden">
                          <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xl font-display font-bold text-text-primary">{expert.name}</h4>
                              <p className="text-primary font-medium text-sm">{expert.role}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-accent font-bold">★ {expert.rating}</div>
                              <div className="text-[10px] text-text-muted uppercase">{expert.reviews} Reviews</div>
                            </div>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">{expert.bio}</p>
                          <div className="flex gap-2">
                            {expert.tags.map(t => (
                              <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-text-muted">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
                >
                  Continue to Schedule <ChevronRight size={20} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Step 2: Choose Time</h3>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                      <Calendar size={16} /> Select Date
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {dates.map(date => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={cn(
                            "px-6 py-3 rounded-xl border font-bold text-sm transition-all",
                            selectedDate === date ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-text-secondary hover:border-white/20"
                          )}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-text-secondary flex items-center gap-2">
                      <Clock size={16} /> Select Time
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {times.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "px-6 py-3 rounded-xl border font-bold text-sm transition-all",
                            selectedTime === time ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-text-secondary hover:border-white/20"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border border-border py-4 rounded-2xl font-bold hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(3)}
                      className="flex-[2] bg-primary text-white py-4 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-all"
                    >
                      Confirm Session
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-12 rounded-[3rem] text-center space-y-6 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-4">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-text-primary">Session Confirmed!</h3>
                <p className="text-text-secondary max-w-sm">
                  Your quantum wellness deep-dive with <span className="text-primary font-bold">{selectedExpert.name}</span> is scheduled.
                </p>
                
                <div className="w-full max-w-sm p-6 bg-white/5 rounded-2xl space-y-4 text-left">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Date & Time</div>
                    <div className="text-sm font-bold text-text-primary">{selectedDate} • {selectedTime}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Method</div>
                    <div className="flex items-center gap-2 text-sm font-bold text-primary">
                      <Video size={14} /> Encrypted Video Call
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = "/dashboard"}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Return to Dashboard
                </button>
              </motion.div>
            )}
          </div>

          {/* Booking Sidebar / Summary */}
          <div className="lg:col-span-4">
            <div className="glass p-8 rounded-[2.5rem] sticky top-28 space-y-8">
              <h4 className="text-lg font-display font-bold text-text-primary">Consultation Details</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex-shrink-0 overflow-hidden">
                    <img src={selectedExpert.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-primary">{selectedExpert.name}</div>
                    <div className="text-[10px] text-primary font-medium">{selectedExpert.role}</div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Clock size={16} className="text-text-muted" />
                    <span>60-Minute Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Video size={16} className="text-text-muted" />
                    <span>Private Video Call</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <MapPin size={16} className="text-text-muted" />
                    <span>VitalSync Virtual Space</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">Consultation Fee</span>
                    <span className="text-text-primary font-mono font-bold">$180.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">VitalSync Credits</span>
                    <span className="text-accent font-mono font-bold">-$40.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-lg">
                    <span className="text-text-primary font-display font-bold">Total</span>
                    <span className="text-primary font-mono font-bold">$140.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;
