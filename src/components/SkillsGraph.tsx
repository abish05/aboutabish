"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Networking", category: "core", color: "border-blue-500", text: "text-blue-400" },
  { name: "Python", category: "programming", color: "border-yellow-500", text: "text-yellow-400" },
  { name: "Routing & Switching", category: "network", color: "border-cyan-500", text: "text-cyan-400" },
  { name: "Network Security", category: "security", color: "border-red-500", text: "text-red-400" },
  { name: "System Admin", category: "admin", color: "border-purple-500", text: "text-purple-400" },
  { name: "Digital Marketing", category: "marketing", color: "border-green-500", text: "text-green-400" },
  { name: "UI/UX Design", category: "design", color: "border-pink-500", text: "text-pink-400" },
  { name: "Problem Solving", category: "soft skill", color: "border-orange-500", text: "text-orange-400" },
];

export function SkillsGraph() {
  const { isRecruiterMode } = usePortfolio();

  if (isRecruiterMode) {
    return (
      <section id="skills" className="pt-10 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">02.</span> Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="glass border-white/10 p-4 rounded-lg flex flex-col justify-center items-center text-center">
              <span className="font-semibold text-gray-200">{skill.name}</span>
              <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{skill.category}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">02.</span> Core Competencies
        </h2>

        <div className="relative w-full h-[500px] glass-panel rounded-2xl overflow-hidden flex items-center justify-center p-4">

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl z-10 relative">
            {skills.map((skill, index) => {
              const randomDuration = 3 + Math.random() * 2;
              const randomDelay = Math.random() * 2;

              return (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                  whileHover={{ scale: 1.1, zIndex: 50 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -15, 0, 15, 0],
                    x: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    scale: { duration: 0.5, delay: index * 0.1, type: "spring" },
                    y: { duration: randomDuration, repeat: Infinity, ease: "easeInOut", delay: randomDelay },
                    x: { duration: randomDuration + 0.5, repeat: Infinity, ease: "easeInOut", delay: randomDelay }
                  }}
                  className={cn(
                    "cursor-grab active:cursor-grabbing w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-colors hover:border-blue-500/50 hover:bg-blue-500/5",
                  )}
                >
                  <span className={cn("font-bold text-sm md:text-lg drop-shadow-md", skill.text)}>
                    {skill.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500 font-mono pointer-events-none">
            [ Interactive Graph: Drag nodes to interact ]
          </div>
        </div>
      </motion.div>
    </section>
  );
}
