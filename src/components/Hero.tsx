"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePortfolio } from "@/context/PortfolioContext";


export function Hero() {
  const { isRecruiterMode } = usePortfolio();

  return (
    <section className="min-h-[70vh] flex flex-col justify-center pt-10" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-gradient-primary">Abish A</span>
            <br />
            <span className="text-gray-300">Network Engineer.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {isRecruiterMode 
              ? "Motivated and detail-oriented graduate with strong knowledge of Networking and Python, excellent communication skills, and leadership experience."
              : "I am a quick learner and adaptable team player seeking an entry-level role to contribute technical skills and grow professionally, specializing in networking, system administration, and UI/UX design."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="/resume.jpg" 
              target="_blank"
              download="Abish_Resume.jpg"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(0,112,243,0.3)] hover:shadow-[0_0_30px_rgba(0,112,243,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-linear-to-b"></span>
              <span className="relative flex items-center gap-2">
                <Download size={18} />
                {isRecruiterMode ? "Download Resume" : "Access System.resume()"}
              </span>
            </a>

            <div className="flex gap-4">
              <a 
                href="https://github.com/abish05" 
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-lg text-gray-300 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abish-a-a12b30388"  
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-lg text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs mx-auto md:mx-0">
          <div className="relative h-72 w-72 md:h-80 md:w-80 animate-morph overflow-hidden border-2 border-electric/80 shadow-[0_0_40px_rgba(0,229,255,0.45)] bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Abish A"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
