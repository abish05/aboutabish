"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      title: "Bachelor of Computer Science and Engineering",
      issuer: "VSB College of Engineering",
      date: "2023 - 2027",
      link: "#"
    },
    {
      title: "High School",
      issuer: "SM Matric Hr Sec School",
      date: "2022 - 2023",
      link: "#"
    },
    {
      title: "Network Administration Excellence Award",
      issuer: "Academic Project",
      date: "Recent",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="pt-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-blue-500">06.</span> Education & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} className="text-blue-500" />
              </div>
              <div className="relative z-10">
                <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">
                  <Award size={20} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-1 text-gray-200">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
