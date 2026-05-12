"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PortfolioContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  isTerminalMode: boolean;
  toggleTerminalMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  const toggleRecruiterMode = () => setIsRecruiterMode((prev) => !prev);
  const toggleTerminalMode = () => setIsTerminalMode((prev) => !prev);

  return (
    <PortfolioContext.Provider
      value={{
        isRecruiterMode,
        toggleRecruiterMode,
        isTerminalMode,
        toggleTerminalMode,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
