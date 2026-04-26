"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Settings, Shield, Bell, LogOut, ChevronRight, Activity, Calendar, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    // We should create a logout route that clears the cookie
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  const latestAssessment = user?.assessments?.[0];
  const wellnessArchetype = latestAssessment?.personalityType || "Vitality Explorer";
  const bioCore = latestAssessment?.dimensions || {};

  const tabs = [
    { name: "Profile", icon: <User size={18} /> },
    { name: "Activity", icon: <Activity size={18} /> },
    { name: "Security", icon: <Shield size={18} /> },
    { name: "Notifications", icon: <Bell size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 space-y-8">
          <div className="glass p-6 rounded-[2.5rem] space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold transition-all",
                  activeTab === tab.name 
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(123,110,246,0.3)]" 
                    : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                )}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold text-accent-warm hover:bg-accent-warm/5 transition-all mt-8 border-t border-white/5 pt-6">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 space-y-8">
          
          {activeTab === "Profile" && (
            <div className="space-y-8">
              {/* Header Info */}
              <div className="glass p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
                <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-primary to-accent p-1 relative group">
                  <div className="w-full h-full bg-background rounded-[2.2rem] flex items-center justify-center overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vitality" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <Settings size={16} />
                  </button>
                </div>
                <div className="text-center md:text-left space-y-2 flex-1">
                  <h1 className="text-4xl font-display font-bold text-text-primary">Siddharth Sharma</h1>
                  <p className="text-text-secondary font-mono text-sm tracking-widest uppercase">The Driven Overthinker • Vata-Pitta</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase">Tier: Ascendant</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold text-accent uppercase">84% Vitality Avg.</span>
                  </div>
                </div>
                <button className="px-8 py-4 border border-border rounded-2xl text-sm font-bold hover:bg-white/5 transition-colors">
                  Edit Profile
                </button>
              </div>

              {/* Bio & Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-[2.5rem] space-y-6">
                  <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Biological Core</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Age", value: "24" },
                      { label: "Weight", value: "72kg" },
                      { label: "Resting Heart Rate", value: "62 bpm" },
                      { label: "Sleep Average", value: "7.2h" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                        <span className="text-text-secondary text-sm">{item.label}</span>
                        <span className="text-text-primary font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-8 rounded-[2.5rem] space-y-6">
                  <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { type: "Assessment", date: "Apr 24, 2026", result: "68/100" },
                      { type: "Session", date: "Apr 22, 2026", result: "Dr. Aris Thorne" },
                      { type: "Protocol", date: "Apr 20, 2026", result: "Completed Week 1" },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                          <Calendar size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-text-primary">{activity.type}</div>
                          <div className="text-[10px] text-text-muted uppercase">{activity.date}</div>
                        </div>
                        <div className="text-xs font-mono font-bold text-text-secondary">{activity.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Activity" && (
            <div className="glass p-10 rounded-[3rem] text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Activity size={32} />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">Historical Vitality Tracking</h2>
              <p className="text-text-secondary max-w-sm mx-auto">Detailed historical data of your wellness diagnostics and growth will appear here.</p>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "Profile" && activeTab !== "Activity" && (
            <div className="glass p-10 rounded-[3rem] text-center space-y-6">
              <div className="w-16 h-16 bg-white/5 text-text-muted rounded-full flex items-center justify-center mx-auto">
                <Settings size={32} />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">{activeTab} coming soon</h2>
              <p className="text-text-secondary max-w-sm mx-auto">We&apos;re finalizing the {activeTab.toLowerCase()} interface for the next update.</p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
