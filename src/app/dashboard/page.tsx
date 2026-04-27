"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";
import ScoreRing from "@/components/dashboard/ScoreRing";
import RadarChartBreakdown from "@/components/dashboard/RadarChartBreakdown";
import RootCauseCard from "@/components/dashboard/RootCauseCard";
import BurnoutBadge from "@/components/dashboard/BurnoutBadge";
import CognitiveLoad from "@/components/dashboard/CognitiveLoad";
import DigitalTwin from "@/components/dashboard/DigitalTwin";
import AlternateReality from "@/components/dashboard/AlternateReality";
import WeeklyPlan from "@/components/dashboard/WeeklyPlan";
import AICoach from "@/components/dashboard/AICoach";
import { useRouter } from "next/navigation";
import { useAssessmentStore } from "@/store/useAssessmentStore";
import { assessmentService } from "@/services/api";

const DashboardPage = () => {
  const { results, setResults } = useAssessmentStore();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await assessmentService.getLatest();
        if (res.ok) {
          const result = await res.json();
          setData(result);
          setResults(result);
        } else if (res.status === 404) {
          // If we have results in the store, use them instead of redirecting
          if (results) {
            setData(results);
          } else {
            router.push("/assess");
          }
        } else if (res.status === 401) {
          router.push("/login");
        }
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
        if (results) {
          setData(results);
        } else {
          router.push("/assess");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [router, setResults, results]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-[200px] rounded-[2rem]" />
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Skeleton className="h-[200px] rounded-[2rem]" />
                <Skeleton className="h-[200px] rounded-[2rem]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Skeleton className="h-[400px] rounded-[2rem]" />
              <div className="space-y-8">
                <Skeleton className="h-[180px] rounded-[2rem]" />
                <Skeleton className="h-[180px] rounded-[2rem]" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 h-[calc(100vh-140px)]">
            <Skeleton className="h-full rounded-[2rem]" />
          </div>
        </div>
      </div>
    );
  }

  // If no data is available at this point, we should have already redirected.
  // But just in case, we check it here.
  if (!data) return null;

  const dashboardData = data;

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
