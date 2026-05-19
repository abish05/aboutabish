"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectModal, Project } from "./ProjectModal";
import { usePortfolio } from "@/context/PortfolioContext";

const projectsData: Project[] = [
  {
    id: "campusos-ai",
    title: "CampusOS AI Portal",
    shortDesc: "AI-powered student management and placement portal.",
    description: "A comprehensive university management system featuring real-time attendance logging, GPA tracking, AI-powered mock interview simulations, automated resume analysis, and a student-recruiter matching dashboard.",
    architecture: "React -> Spring Boot Backend -> Neon PostgreSQL / Gemini API",
    impactMetrics: [
      "Client-side Canvas image compression for optimized backend uploads",
      "Dynamic role-based dashboards for students, staff, and admins",
      "Automated attendance tracking and academic performance reporting"
    ],
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/abish05/campusos-ai",
    liveUrl: "https://campusosai.abish.in",
    imagePlaceholder: "bg-gradient-to-br from-blue-900 to-black",
    imageUrl: "/images/campusos.png"
  },
  {
    id: "fti-website",
    title: "FutureTech Training Institute (FTI)",
    shortDesc: "Futuristic Computer Training Institute website.",
    description: "A premium, high-conversion landing page and student admission portal featuring a futuristic glassmorphic UI, responsive grids, course catalogs, and interactive student inquiries.",
    architecture: "HTML5 / CSS3 / Vanilla JavaScript -> Formspree Integration -> Vercel",
    impactMetrics: [
      "Fully responsive modern glassmorphic interface",
      "Streamlined direct admission inquiry flow",
      "Optimized static pages for fast load speeds"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/abish05/FTI-WEBSITE",
    liveUrl: "https://ftitraining.in",
    imagePlaceholder: "bg-gradient-to-br from-emerald-900 to-black",
    imageUrl: "/images/fti_website.png"
  },
  {
    id: "smart-code-reviewer",
    title: "Smart Code Reviewer using AI",
    shortDesc: "AI-powered smart code reviewer that analyzes code quality.",
    description: "An intelligent platform that automatically reviews code submissions, detects syntax errors and bugs, estimates time/space complexity, and provides actionable refactoring suggestions.",
    architecture: "React -> Python / Flask Backend -> OpenAI API",
    impactMetrics: [
      "Automated line-by-line code review feedback",
      "Integrated complexity estimation & code analytics",
      "Actionable suggestions for refactoring and optimizations"
    ],
    techStack: ["React", "Python", "Flask", "OpenAI"],
    githubUrl: "https://github.com/abish05/Smart-Code-Reviewer-using-AI",
    imagePlaceholder: "bg-gradient-to-br from-purple-900 to-black",
    imageUrl: "/images/code_reviewer.png"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isRecruiterMode } = usePortfolio();

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
              <div className="h-48 w-full relative overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className={`w-full h-full ${project.imagePlaceholder}`} />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
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
