"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xjgllepl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message received. I'll get back to you shortly!");
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        setStatus("error");
        setMessage(data.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">05.</span> Initialize Connection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently open for new opportunities, collaborations, and interesting projects. 
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:abishstk@gmail.com" className="flex items-center gap-4 p-4 glass rounded-xl hover:border-blue-500/30 transition-colors group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Email Me</h4>
                  <p className="text-sm text-gray-400">abishstk@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/5">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <span className="text-green-400 font-bold">#</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Phone</h4>
                  <p className="text-sm text-gray-400">+91 7401608989</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/5">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <span className="text-purple-400 font-bold">@</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">Location</h4>
                  <p className="text-sm text-gray-400">Kanyakumari, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-400 font-mono">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="bg-black/40 border border-white/10 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-400 font-mono">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="bg-black/40 border border-white/10 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label htmlFor="message" className="text-sm text-gray-400 font-mono">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                className="bg-black/40 border border-white/10 rounded-lg p-3 text-gray-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all custom-scrollbar"
                placeholder="Hello Abish..."
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(0,112,243,0.2)] hover:shadow-[0_0_25px_rgba(0,112,243,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Transmit Message
                </>
              )}
            </button>

            {status !== "idle" && status !== "loading" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${
                  status === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {status === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <p className="text-sm">{message}</p>
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
