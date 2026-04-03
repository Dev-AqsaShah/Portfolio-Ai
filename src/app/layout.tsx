import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqsa Shah | AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Aqsa Shah — AI Engineer building autonomous multi-agent systems with Claude & Anthropic API. Full Stack Developer | Hackathon Builder | CS Student.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050510] text-slate-100 min-h-screen`}>
        <Navbar />
        {children}
        <AnimatedBackground />
        <Footer />
      </body>
    </html>
  );
}
