import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-black/5 mt-20 glass z-10 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Abish. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1 font-mono">
            System status: <span className="text-green-600 font-semibold">Online</span>
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/abish05" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abish-a-a12b30388" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:abishstk@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.instagram.com/rio_abish?igsh=bXZsMmx5bWhzZjQ0&utm_source=qr" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <FaInstagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
