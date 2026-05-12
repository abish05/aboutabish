"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Activity, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  architecture: string;
  impactMetrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholder: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0a0a0a]/90 rounded-2xl shadow-2xl custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
            >
              <X size={20} className="text-gray-300" />
            </button>

            {/* Header Image Placeholder */}
            <div className={`w-full h-48 md:h-64 ${project.imagePlaceholder} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0"></div>
               <h2 className="text-3xl md:text-5xl font-bold text-white z-10 drop-shadow-lg">{project.title}</h2>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                    <FaGithub size={16} /> Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blue-400">
                  <Activity size={20} /> Project Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architecture & Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blue-400">
                    <Layers size={20} /> Architecture Flow
                  </h3>
                  <div className="p-4 glass rounded-lg border border-white/5 text-gray-400 text-sm leading-relaxed font-mono">
                    {project.architecture}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-blue-400">
                    <Activity size={20} /> Key Impact Metrics
                  </h3>
                  <ul className="space-y-3">
                    {project.impactMetrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">▹</span>
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
