"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export function Certifications() {
  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "VSB College of Engineering Technical Campus",
      period: "2023 - 2027 (Pursuing)",
      details: [
        "Focused on programming, software development, data structures, and networking fundamentals.",
        "Completed hands-on projects in network administration and system management.",
        "Academic standing: CGPA 7.6"
      ]
    },
    {
      degree: "Higher Secondary Certificate (High School)",
      institution: "SM Matric Hr. Sec. School",
      period: "2022 - 2023",
      details: [
        "Completed secondary education with a strong academic and analytical foundation."
      ]
    }
  ];

  const certifications = [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "Jan 2026"
    },
    {
      title: "Professional Networking for Career Growth",
      issuer: "HP LIFE / HP Foundation",
      date: "Jan 2026"
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
          <span className="text-blue-500">05.</span> Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <GraduationCap size={24} className="text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-black/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap size={64} className="text-blue-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">
                      <GraduationCap size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-800">{edu.degree}</h3>
                    <p className="text-sm text-blue-600 mb-3">{edu.institution} • {edu.period}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Award size={24} className="text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-black/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Award size={64} className="text-blue-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 bg-blue-500/10 rounded-lg inline-block mb-4">
                      <Award size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-gray-800">{cert.title}</h3>
                    <p className="text-sm text-blue-600 mb-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-600">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
