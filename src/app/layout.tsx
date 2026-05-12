import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abish | AI Developer OS",
  description: "AI & Full Stack Developer Portfolio",
  openGraph: {
    title: "Abish | AI Developer OS",
    description: "Futuristic AI Developer Portfolio showcasing skills in Next.js, AI, and Cloud Computing.",
    url: "https://abish.in",
    siteName: "Abish Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased min-h-screen relative`}>
        <Providers>
          {children}
        </Providers>
        <GoogleTagManager gtmId="GTM-TPRM4D9M" />
        <GoogleAnalytics gaId="G-MTD2W420C1" />
      </body>
    </html>
  );
}
