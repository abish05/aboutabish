"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectModal, Project } from "./ProjectModal";
import { usePortfolio } from "@/context/PortfolioContext";

const projectsData: Project[] = [
  {
    id: "campusos-ai",
    title: "CampusOS AI — Smart College & Placement Platform",
    shortDesc: "AI-powered SaaS university management and placement portal.",
    description: "Architected a Multi-Tenant SaaS platform with Role-Based Access Control (RBAC) for Super Admin, Admin, Faculty, and Student roles. Features an AI Resume Analyzer (ATS scoring, skill-gap analysis) and a real-time Interview Simulator generating domain-specific questions with instant feedback.",
    architecture: "React.js -> Spring Boot -> PostgreSQL / Gemini API",
    impactMetrics: [
      "Architected Role-Based Access Control (RBAC) for Super Admin, Admin, Faculty, and Student roles using React.js, Java Spring Boot, and PostgreSQL",
      "Integrated Gemini LLM for AI Resume Analyzer and a real-time Interview Simulator with instant feedback",
      "Built automated attendance analytics and placement dashboards (Recharts) secured with JWT & BCrypt",
      "Achieved 70% reduction in manual shortlisting, <200ms API response time, and 90+ Lighthouse score"
    ],
    techStack: ["React.js", "Spring Boot", "PostgreSQL", "Gemini API", "JWT"],
    githubUrl: "https://github.com/abish05/campusos-ai",
    liveUrl: "https://campusosai.abish.in",
    imagePlaceholder: "bg-gradient-to-br from-blue-900 to-black",
    imageUrl: "/images/campusos.png"
  },
  {
    id: "shining-star",
    title: "Shining Star AC Service Website",
    shortDesc: "Multi-service business website with WhatsApp booking integration.",
    description: "Developed a multi-service website for a home appliances and AC service company using HTML, CSS, and JavaScript. Designed service pages for AC, refrigerator, electrical, and plumbing with contact form and WhatsApp booking.",
    architecture: "HTML5 / CSS3 / Vanilla JavaScript -> WhatsApp Web Integration -> Vercel",
    impactMetrics: [
      "Developed a fully responsive multi-service landing page and booking system",
      "Designed dedicated service pages for AC, refrigerator, electrical, and plumbing",
      "Integrated secure contact forms and direct WhatsApp booking for instant client communication",
      "Ensured mobile-first design and cross-browser compatibility for a seamless experience"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/abish05",
    liveUrl: "https://shining-star-nu.vercel.app",
    imagePlaceholder: "bg-gradient-to-br from-cyan-900 to-black",
    imageUrl: "/images/shining_star.png"
  },
  {
    id: "fti-website",
    title: "FutureTech Training Institute (FTI)",
    shortDesc: "Freelance web development project for an early-stage startup.",
    description: "Designed and developed a fully functional business website for an early-stage startup from scratch. Built responsive, mobile-friendly web pages, collaborated directly with the founders, and optimized page performance.",
    architecture: "HTML5 / CSS3 / Vanilla JavaScript -> Formspree -> Vercel",
    impactMetrics: [
      "Designed and developed a fully functional business website for an early-stage startup from scratch",
      "Collaborated directly with the startup founders to gather requirements and deliver a client-aligned product",
      "Ensured cross-browser compatibility and optimized page performance for better user experience"
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
