"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([
    { role: "bot", content: "Hi! I'm Abish's AI Assistant. You can ask me about his skills, projects, education, or resume." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "I can tell you about Abish's skills, experience, or education. Try asking something specific!";
      const lowerInput = userMessage.toLowerCase();

      if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
        botResponse = "Abish is skilled in SaaS Development, Web Development (HTML/CSS/JS), Python, Generative AI, Prompt Engineering, Networking Fundamentals, Git/GitHub, and Cloud Hosting (Vercel/Netlify).";
      } else if (lowerInput.includes("experience") || lowerInput.includes("project") || lowerInput.includes("job")) {
        botResponse = "He has freelance experience developing business websites, such as the FTI Training Website in 2025. His featured projects include CampusOS AI (a SaaS college & placement portal) and the Shining Star AC Service Website.";
      } else if (lowerInput.includes("education") || lowerInput.includes("college") || lowerInput.includes("degree") || lowerInput.includes("study") || lowerInput.includes("certif")) {
        botResponse = "He is pursuing his Bachelor of Computer Science and Engineering at VSB College of Engineering (2023-2027). He also holds certifications in Networking Basics from Cisco Networking Academy (Jan 2026) and Professional Networking from HP Foundation.";
      } else if (lowerInput.includes("resume") || lowerInput.includes("cv")) {
        botResponse = "You can download his resume directly from the top of the page using the 'Download Resume' button.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("email") || lowerInput.includes("reach") || lowerInput.includes("phone")) {
        botResponse = "You can reach him at abishstk@gmail.com, or call 7401608989.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        botResponse = "Hello! How can I help you learn more about Abish today?";
      }

      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all hover:scale-110 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Assistant"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] sm:max-w-[400px] h-[500px] max-h-[80vh] glass-panel bg-white/95 border border-black/5 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-gray-800"
          >
            {/* Header */}
            <div className="p-4 border-b border-black/5 flex justify-between items-center bg-blue-50/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Bot size={18} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Recruiter Assistant</h3>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-500 hover:text-black">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1 ${msg.role === 'user' ? 'bg-gray-100' : 'bg-blue-50'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-gray-600" /> : <Bot size={14} className="text-blue-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-black/5 text-gray-800 rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-black/5 bg-black/[0.01]">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Abish..."
                  className="flex-1 bg-black/[0.03] border border-black/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 text-gray-800"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-100 disabled:text-gray-400 text-white rounded-full transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
