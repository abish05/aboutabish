"use client";

import React from "react";
import { Terminal, Briefcase } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { cn } from "@/lib/utils";

import packageInfo from "../../package.json";

export function Navbar() {
  const { isRecruiterMode, toggleRecruiterMode, isTerminalMode, toggleTerminalMode } = usePortfolio();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center transition-all duration-300">
      <div className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2">
        <span className="text-blue-600">ABISH A</span>
        <span className="text-gray-500 font-mono text-sm ml-2 hidden sm:inline-block">v{packageInfo.version}</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Navigation Links for standard mode */}
        {!isRecruiterMode && (
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 mr-4">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        )}

        {/* Toggles */}
        <button
          onClick={toggleTerminalMode}
          className={cn(
            "p-2 rounded-md transition-all duration-300",
            isTerminalMode ? "bg-blue-500/10 text-blue-600" : "hover:bg-black/5 text-gray-500"
          )}
          aria-label="Toggle Terminal Mode"
          title="Terminal Mode"
        >
          <Terminal size={18} />
        </button>

        <button
          onClick={toggleRecruiterMode}
          className={cn(
            "p-2 rounded-md transition-all duration-300 flex items-center gap-2 text-sm",
            isRecruiterMode ? "bg-green-500/10 text-green-600" : "hover:bg-black/5 text-gray-500"
          )}
          aria-label="Toggle Recruiter Mode"
          title="Recruiter Mode"
        >
          <Briefcase size={18} />
          <span className="hidden sm:inline-block">{isRecruiterMode ? "ATS Mode On" : "Recruiter"}</span>
        </button>
      </div>
    </nav>
  );
}
