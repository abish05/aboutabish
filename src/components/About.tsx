"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Code2 } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Server className="text-blue-500" size={24} />,
      title: "Network Admin",
      description: "Managing network capacity, diagnosing issues, and providing support for hubs, bridges, and routers.",
    },
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: "UI/UX Design",
      description: "Creating clean, user-focused designs through research, wireframes, prototypes, and high-fidelity UI.",
    },
  ];

  return (
    <section id="about" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">01.</span> About System
        </h2>
        
        <div className="glass-panel rounded-2xl p-8 mb-12">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Motivated and detail-oriented graduate with strong knowledge of Networking and Python, excellent communication skills, and leadership experience. A quick learner and adaptable team player seeking an entry-level role in a reputed organization to contribute technical skills and grow professionally.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            I am currently pursuing a Bachelor&apos;s degree in Computer Science and Engineering at VSB College of Engineering, with a focus on programming, software development, data structures, and problem-solving, alongside hands-on projects and technical learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover:border-blue-500/50 transition-colors duration-300 group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-blue-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
