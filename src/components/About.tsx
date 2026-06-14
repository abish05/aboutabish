"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Code2 } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code2 className="text-blue-500" size={24} />,
      title: "Software Developer",
      description: "Building robust web applications and SaaS platforms, integrating AI models/LLM services, and writing clean, maintainable code.",
    },
    {
      icon: <Server className="text-blue-500" size={24} />,
      title: "Network Engineer",
      description: "Strong grounding in networking fundamentals, routing & switching, system administration, and network troubleshooting.",
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
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Motivated and detail-oriented Computer Science & Engineering student with strong knowledge of web development, software engineering, and network fundamentals. Experienced in building responsive web applications, designing SaaS platforms, and integrating AI-powered features.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            I am currently pursuing a Bachelor&apos;s degree in Computer Science and Engineering at VSB College of Engineering (2023 - 2027). A quick learner and adaptable team player seeking an entry-level Software Developer role to contribute technical skills and grow professionally.
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
              <div className="mb-4 p-3 bg-black/5 rounded-lg inline-block group-hover:bg-blue-500/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
