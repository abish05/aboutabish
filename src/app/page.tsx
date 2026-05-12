"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
// Add other components as they are built
import { About } from "@/components/About";
import { SkillsGraph } from "@/components/SkillsGraph";
import { Projects } from "@/components/Projects";
import { GithubAnalytics } from "@/components/GithubAnalytics";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { AIChatbot } from "@/components/AIChatbot";
import { Terminal } from "@/components/Terminal";

export default function Home() {
  const { isTerminalMode } = usePortfolio();

  return (
    <>
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-30" />
      
      <Navbar />

      {/* Main Content Area */}
      <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-6 md:px-24">
        {isTerminalMode ? (
          <div className="w-full max-w-5xl h-[80vh] mt-8">
            <Terminal />
          </div>
        ) : (
          <div className="w-full max-w-5xl space-y-32 pb-20">
            <Hero />
            <About />
            <SkillsGraph />
            <Projects />
            <GithubAnalytics />
            <Certifications />
            <Contact />
          </div>
        )}
      </main>

      {/* Floating AI Assistant (Hidden in Terminal Mode) */}
      {!isTerminalMode && <AIChatbot />}

      <Footer />
    </>
  );
}
