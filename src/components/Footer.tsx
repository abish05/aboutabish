import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20 glass z-10 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abish. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1 font-mono">
            System status: <span className="text-green-500">Online</span>
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/abish05" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abish-a-a12b30388" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:abishstk@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
