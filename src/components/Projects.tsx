"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectModal, Project } from "./ProjectModal";


const projectsData: Project[] = [
  {
    id: "smart-code-reviewer",
    title: "Smart Code Reviewer using AI",
    shortDesc: "AI-powered smart code reviewer that analyzes code quality.",
    description: "An intelligent platform that automatically reviews code submissions, detects errors, estimates complexity, and provides optimization suggestions.",
    architecture: "React -> Python/Flask Backend -> OpenAI API",
    impactMetrics: [
      "Automated code review process",
      "Integrated complexity estimation",
      "Provided actionable optimization suggestions"
    ],
    techStack: ["React", "Python", "Flask", "OpenAI"],
    githubUrl: "https://github.com/abish05/Smart-Code-Reviewer-using-AI",
    imagePlaceholder: "bg-gradient-to-br from-blue-900 to-black"
  },
  {
    id: "network-anomaly-detector",
    title: "AI-Powered Network Anomaly Detector",
    shortDesc: "Network anomaly detection system using AI.",
    description: "A machine learning-based system designed to monitor network traffic in real-time, detecting unusual patterns and securing networks against potential threats.",
    architecture: "Network Packet Sniffer -> ML Inference Engine -> Dashboard",
    impactMetrics: [
      "Real-time network monitoring",
      "AI-driven threat detection",
      "Improved network security posture"
    ],
    techStack: ["Python", "Machine Learning", "Networking", "Security"],
    githubUrl: "https://github.com/abish05/AI-Powered-Network-Anomaly-Detector",
    imagePlaceholder: "bg-gradient-to-br from-emerald-900 to-black"
  },
  {
    id: "endee-vector-db",
    title: "Endee.io Vector Database",
    shortDesc: "High-performance vector database handling up to 1B vectors.",
    description: "Endee.io is a high-performance vector database, designed to handle up to 1B vectors on a single node, delivering significant performance gains through optimized indexing and execution.",
    architecture: "Optimized Indexing -> Vector Execution Engine -> Cloud API",
    impactMetrics: [
      "Handles up to 1 Billion vectors on a single node",
      "Significant performance gains via optimized indexing",
      "Cloud-native deployment capabilities"
    ],
    techStack: ["Vector DB", "High Performance", "Cloud Native"],
    githubUrl: "https://github.com/abish05/endee",
    imagePlaceholder: "bg-gradient-to-br from-purple-900 to-black"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">03.</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass-panel rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(0,112,243,0.15)] flex flex-col h-full"
            >
              <div className={`h-40 w-full ${project.imagePlaceholder} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.shortDesc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mono text-gray-500">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-mono text-gray-500">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
