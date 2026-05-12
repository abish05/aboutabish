"use client";

import { PortfolioProvider } from "@/context/PortfolioContext";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PortfolioProvider>{children}</PortfolioProvider>;
}
