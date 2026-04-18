"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden no-print"
      style={{ background: "rgba(5,5,16,1)", borderTop: "1px solid rgba(168,85,247,0.15)" }}>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-700/10 rounded-full blur-[80px]" />
      </div>

      {/* Animated top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center space-y-6 relative z-10">

        {/* Logo / name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white"
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
            <RiRobot2Line />
          </div>
          <span className="font-black text-slate-300">Aqsa Shah</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center font-bold text-lg sm:text-xl grad-text"
        >
          From Concept to Intelligence
        </motion.p>

        {/* Nav quick links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          {["/", "/about", "/skills", "/experience", "/projects", "/contact"].map((href) => {
            const labels: Record<string, string> = {
              "/": "Home", "/about": "About", "/skills": "Skills",
              "/experience": "Experience", "/projects": "Projects", "/contact": "Contact",
            };
            return (
              <Link key={href} href={href}
                className="hover:text-purple-400 transition">
                {labels[href]}
              </Link>
            );
          })}
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a href="https://github.com/Dev-AqsaShah" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-400 transition text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aqsa-shah-" target="_blank" rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition text-xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Divider */}
        <div className="w-20 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, #a855f7, #06b6d4)" }} />

        {/* Copyright */}
        <p className="text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Aqsa Shah. Designed & Built with 💜 by Aqsa Shah
        </p>
      </div>
    </footer>
  );
}
