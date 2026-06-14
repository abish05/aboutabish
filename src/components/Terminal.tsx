"use client";

import React, { useState, useRef, useEffect } from "react";

export function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: "init system",
      output: (
        <div className="text-gray-400 mb-2">
          Abish AI Developer OS [Version 1.0.0]<br/>
          (c) 2026 Abish Corporation. All rights reserved.<br/>
          <br/>
          Type <span className="text-blue-400">help</span> to see available commands.
        </div>
      )
    }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <ul className="text-gray-300">
            <li><span className="text-blue-400 w-24 inline-block">about</span> : Display information about Abish</li>
            <li><span className="text-blue-400 w-24 inline-block">skills</span> : List technical proficiencies</li>
            <li><span className="text-blue-400 w-24 inline-block">projects</span> : Show featured projects</li>
            <li><span className="text-blue-400 w-24 inline-block">experience</span> : Show work experience</li>
            <li><span className="text-blue-400 w-24 inline-block">github</span> : View GitHub analytics summary</li>
            <li><span className="text-blue-400 w-24 inline-block">resume</span> : Download resume</li>
            <li><span className="text-blue-400 w-24 inline-block">contact</span> : Get contact information</li>
            <li><span className="text-blue-400 w-24 inline-block">clear</span> : Clear terminal output</li>
          </ul>
        );
        break;
      case "about":
        output = "Motivated and detail-oriented Computer Science & Engineering student with strong knowledge of web development, software engineering, and network fundamentals. Experienced in building responsive web applications, designing SaaS platforms, and integrating AI-powered features.";
        break;
      case "skills":
        output = "Networking Fundamentals, System & Server Administration, Git & GitHub, Generative AI, SaaS Application Development, Prompt Engineering, Cloud Computing Basics, Python, HTML/CSS/JavaScript, Responsive Design, Cross-browser Compatibility";
        break;
      case "projects":
        output = (
          <ul className="text-gray-300">
            <li>1. CampusOS AI — Smart College & Placement Platform (React, Spring Boot, PostgreSQL, Gemini LLM)</li>
            <li>2. Shining Star AC Service Website (HTML, CSS, JavaScript)</li>
            <li>3. FTI Training Website (HTML, CSS, JavaScript, Vercel)</li>
            <li>4. Smart Code Reviewer using AI (React, Python, Flask, OpenAI)</li>
          </ul>
        );
        break;
      case "experience":
        output = "Freelance Web Developer @ FTI Training (2025) — Designed and developed a fully functional business website from scratch using HTML, CSS, JavaScript.";
        break;
      case "github":
        output = "Active open-source contributions. Real-time metrics loaded dynamically via GitHub API on the main page.";
        break;
      case "resume":
        if (typeof window !== "undefined") {
          window.open("/resume.jpg", "_blank");
        }
        output = "Opening Abish_Resume.jpg in a new tab...";
        break;
      case "contact":
        output = "Email: abishstk@gmail.com | Phone: 7401608989 | LinkedIn: linkedin.com/in/abish-a-a12b30388 | Site: abish.in";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        output = "";
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div 
      className="w-full h-full glass-panel bg-[#0f172a] rounded-xl border border-black/5 overflow-hidden flex flex-col font-mono text-sm shadow-2xl relative"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-gray-500 text-xs">abish@developer-os: ~</div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {history.map((entry, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-500">abish@developer-os</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-500">~</span>
              <span className="text-gray-300">$</span>
              <span className="text-gray-100">{entry.command}</span>
            </div>
            <div className="text-gray-300 ml-4 leading-relaxed">{entry.output}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2 pb-4">
          <span className="text-green-500">abish@developer-os</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-gray-300">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-600 font-mono"
            autoFocus
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
}
