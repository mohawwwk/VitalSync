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
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-bold text-accent-warm hover:bg-accent-warm/5 transition-all mt-8 border-t border-white/5 pt-6"
            >
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
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name || 'Vitality'}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center md:text-left space-y-2 flex-1">
                  <h1 className="text-4xl font-display font-bold text-text-primary">{user?.name || "User"}</h1>
                  <p className="text-text-secondary font-mono text-sm tracking-widest uppercase">{wellnessArchetype} • {latestAssessment?.dominantDosha || "Vata-Pitta"}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold text-primary uppercase">Tier: Ascendant</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold text-accent uppercase">{latestAssessment?.overallScore || 0}% Vitality Score</span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass p-8 rounded-[2.5rem] space-y-6">
                  <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Biological Core</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Email", value: user?.email },
                      { label: "Member Since", value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A" },
                      { label: "Total Assessments", value: user?.assessments?.length || 0 },
                      { label: "Dominant Dosha", value: latestAssessment?.dominantDosha || "Not assessed" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                        <span className="text-text-secondary text-sm">{item.label}</span>
                        <span className="text-text-primary font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-8 rounded-[2.5rem] space-y-6">
                  <h3 className="text-sm font-mono font-bold text-text-muted uppercase tracking-widest">Recent Assessments</h3>
                  <div className="space-y-4">
                    {user?.assessments?.map((assessment: any, i: number) => (
                      <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                          <Calendar size={18} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-text-primary">Wellness Check</div>
                          <div className="text-[10px] text-text-muted uppercase">{new Date(assessment.createdAt).toLocaleDateString()}</div>
                        </div>
                        <div className="text-xs font-mono font-bold text-text-secondary">{assessment.overallScore}/100</div>
                      </div>
                    ))}
                    {(!user?.assessments || user.assessments.length === 0) && (
                      <div className="text-center py-4 text-text-muted text-sm">No assessments yet</div>
                    )}
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

          {activeTab === "Security" && (
            <div className="glass p-10 rounded-[3rem] space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-accent-warm/10 text-accent-warm rounded-full flex items-center justify-center">
                  <Shield size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">Security Settings</h2>
                  <p className="text-text-secondary text-sm">Manage your account security and authentication.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-text-primary">Password</div>
                    <div className="text-sm text-text-muted">Last changed 3 months ago</div>
                  </div>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-colors">Update</button>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-text-primary">Two-Factor Authentication</div>
                    <div className="text-sm text-text-muted">Add an extra layer of security</div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold transition-colors">Enable</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="glass p-10 rounded-[3rem] space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <Bell size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">Notification Preferences</h2>
                  <p className="text-text-secondary text-sm">Choose how you want to be notified.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {['Email Reports', 'Daily Reminders', 'Expert Insights', 'System Alerts'].map((item) => (
                  <div key={item} className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                    <div className="font-bold text-text-primary">{item}</div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Settings" && (
            <div className="glass p-10 rounded-[3rem] space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 text-text-primary rounded-full flex items-center justify-center">
                  <Settings size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-text-primary">General Settings</h2>
                  <p className="text-text-secondary text-sm">Customize your experience with Zealous.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                  <div className="font-bold text-text-primary">Language</div>
                  <div className="text-sm text-text-muted">English (US)</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                  <div className="font-bold text-text-primary">Theme</div>
                  <div className="text-sm text-text-muted">Dark (Default)</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl flex items-center justify-between">
                  <div className="font-bold text-accent-warm">Delete Account</div>
                  <button className="text-accent-warm text-xs font-bold">Close Account</button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
