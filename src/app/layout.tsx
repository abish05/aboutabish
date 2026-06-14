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
  title: "Abish A | Software Developer",
  description: "Software Developer Portfolio of Abish A showcasing expertise in full stack development, network administration, and AI solutions.",
  openGraph: {
    title: "Abish A | Software Developer",
    description: "Futuristic Software Developer Portfolio of Abish A showcasing skills in web development, SaaS, and network fundamentals.",
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
    <html lang="en" className="light scroll-smooth">
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
