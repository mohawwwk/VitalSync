"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import ScoreRing from "@/components/dashboard/ScoreRing";
import RadarChartBreakdown from "@/components/dashboard/RadarChartBreakdown";
import RootCauseCard from "@/components/dashboard/RootCauseCard";
import BurnoutBadge from "@/components/dashboard/BurnoutBadge";
import CognitiveLoad from "@/components/dashboard/CognitiveLoad";
import DigitalTwin from "@/components/dashboard/DigitalTwin";
import AlternateReality from "@/components/dashboard/AlternateReality";
import WeeklyPlan from "@/components/dashboard/WeeklyPlan";
import AICoach from "@/components/dashboard/AICoach";
import { useAssessmentStore } from "@/store/useAssessmentStore";

// Sample data for initial build - in real app, fetch from API
const sampleData = {
  overallScore: 68,
  dimensions: { physical: 75, mental: 60, emotional: 55, sleep: 40, energy: 65, nutrition: 80, social: 90, spiritual: 50 },
  dominantDosha: "Vata",
  rootCause: "Chronic Sleep Deprivation",
  rootCauseImpact: "Lowered cognitive focus and increased emotional reactivity.",
  burnoutRisk: "HIGH",
  cognitiveLoad: 82,
  personalityType: "The Driven Overthinker",
  top3Recommendations: [
    { title: "Digital Sunset", description: "No screens 90 minutes before bed.", priority: "Critical" },
    { title: "Magnesium Rich Foods", description: "Incorporate seeds and leafy greens into dinner.", priority: "High" },
    { title: "Box Breathing", description: "4-4-4-4 rhythm for 5 minutes twice daily.", priority: "Medium" }
  ],
  alternateReality: { ifYouFixRootCause: { stressChange: -30, energyChange: 45, focusChange: 50, sleepChange: 60 } },
  weeklyPlan: [
    { day: "Monday", morning: "Light stretching", afternoon: "Short walk", evening: "Chamomile tea" },
    { day: "Tuesday", morning: "Meditation", afternoon: "High protein lunch", evening: "Early bed" },
    { day: "Wednesday", morning: "Yoga", afternoon: "Salad bowl", evening: "Read a book" },
    { day: "Thursday", morning: "Journaling", afternoon: "Matcha tea", evening: "Warm bath" },
    { day: "Friday", morning: "Pilates", afternoon: "Outdoor work", evening: "Music session" },
    { day: "Saturday", morning: "Nature walk", afternoon: "Social lunch", evening: "Deep sleep" },
    { day: "Sunday", morning: "Slow morning", afternoon: "Meal prep", evening: "Reflection" }
  ]
};

const DashboardPage = () => {
  const { results } = useAssessmentStore();
  const [data, setData] = useState<any>(results);
  const [loading, setLoading] = useState(!results);

  useEffect(() => {
    const fetchData = async () => {
      if (results) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch("/api/ai/latest-assessment");
        if (res.ok) {
          const result = await res.json();
          setData(result);
        } else {
          setData(sampleData);
        }
      } catch (err) {
        setData(sampleData);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [results]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  const dashboardData = data || sampleData;

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Dashboard Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Top Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-6 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-4"
            >
              <ScoreRing score={dashboardData.overallScore} />
              <div className="space-y-1">
                <h3 className="text-sm font-display font-bold text-text-muted uppercase tracking-widest">Overall Score</h3>
                <p className="text-2xl font-mono font-bold text-primary">{dashboardData.overallScore}</p>
              </div>
            </motion.div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BurnoutBadge risk={dashboardData.burnoutRisk} />
              <div className="glass p-6 rounded-[2rem] flex flex-col justify-between">
                <div className="text-[10px] text-text-muted uppercase tracking-widest font-mono mb-2">Wellness Archetype</div>
                <div className="space-y-2">
                  <div className="text-2xl font-display font-bold text-text-primary">{dashboardData.personalityType}</div>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold text-accent uppercase tracking-tighter">
                    {dashboardData.dominantDosha} Dominant
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Radar & Root Cause Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RadarChartBreakdown data={dashboardData.dimensions} />
            <div className="space-y-8">
              <RootCauseCard cause={dashboardData.rootCause} impact={dashboardData.rootCauseImpact} />
              <CognitiveLoad score={dashboardData.cognitiveLoad} />
            </div>
          </div>

          {/* Digital Twin & Alternate Reality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DigitalTwin currentData={dashboardData.dimensions} predictions={dashboardData.alternateReality?.ifYouFixRootCause || {}} />
            <AlternateReality />
          </div>

          {/* Weekly Plan */}
          <WeeklyPlan plan={dashboardData.weeklyPlan || []} />
        </div>

        {/* Sidebar: AI Coach */}
        <div className="lg:col-span-4 h-[calc(100vh-140px)] sticky top-28">
          <AICoach userData={dashboardData} />
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
