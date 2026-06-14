"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, GitPullRequest, Flame } from "lucide-react";


export function GithubAnalytics() {
  const [data, setData] = useState({
    stars: 0,
    prs: 0,
    streak: 0,
    contributions: Array(364).fill(0),
    loading: true
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const json = await res.json();
          setData({
            stars: json.stars || 0,
            prs: json.prs || 0,
            streak: json.streak || 0,
            contributions: json.contributions && json.contributions.length > 0 ? json.contributions : Array(364).fill(0),
            loading: false
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchGitHubData();
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 4: return "bg-blue-800";
      case 3: return "bg-blue-600";
      case 2: return "bg-blue-400";
      case 1: return "bg-blue-200";
      default: return "bg-slate-100";
    }
  };

  return (
    <section id="github" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">04.</span> GitHub Analytics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Heatmap Card */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold flex items-center gap-2">
                <GitCommit size={18} className="text-gray-600" />
                Contribution Graph
              </h3>
              <span className="text-sm font-mono text-gray-500">Last 365 Days</span>
            </div>
            
            <div className={`flex-grow flex items-center justify-center overflow-x-auto pb-2 custom-scrollbar ${data.loading ? 'opacity-50 transition-opacity' : ''}`}>
              <div className="grid grid-rows-7 grid-flow-col gap-1 w-max">
                {data.contributions.map((level, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-[2px] ${getColor(level as number)} transition-colors duration-300 hover:ring-2 hover:ring-black/20`}
                    title={`Contribution Level: ${level}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="flex flex-col gap-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-orange-500/30 transition-colors group">
              <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                <Flame size={24} className="text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Streak</p>
                <p className="text-2xl font-bold font-mono">
                  {data.loading ? "..." : `${data.streak} Days`}
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-blue-500/30 transition-colors group">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <GitPullRequest size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total PRs Merged</p>
                <p className="text-2xl font-bold font-mono">
                  {data.loading ? "..." : data.prs}
                </p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-yellow-500/30 transition-colors group">
              <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                <Star size={24} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Stars</p>
                <p className="text-2xl font-bold font-mono">
                  {data.loading ? "..." : data.stars}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
