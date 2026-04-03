"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "AI Engineer",
  "Agentic AI Builder",
  "Full Stack Developer",
  "Claude API Expert",
  "Hackathon Finalist",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let t: NodeJS.Timeout;
    if (!deleting) {
      if (displayed.length < role.length) {
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75);
      } else {
        t = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % roles.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-12 overflow-hidden pt-20">

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px]" />
      </div>

      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          <span className="text-slate-100">Hi, I&apos;m </span>
          <span className="grad-text">Aqsa Shah</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-slate-300 h-10 flex items-center"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {displayed}
          </span>
          <span className="ml-1 text-purple-400 animate-pulse">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed"
        >
          Building autonomous AI systems with{" "}
          <span className="text-purple-400 font-semibold">Claude &amp; Anthropic API</span>.
          BS Computer Science (2nd Year) • 3PL Dynamics Intern • Hackathon Finalist.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <Link href="/home">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-white shadow-lg"
            >
              Explore Portfolio
            </motion.button>
          </Link>
          <a href="/assets/AqsaShah_Resume.pdf.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-bold border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 transition"
            >
              View Resume
            </motion.button>
          </a>
        </motion.div>

        {/* Social links + Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-6 pt-2"
        >
          <a href="https://github.com/Dev-AqsaShah" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aqsa-shah-" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition text-2xl">
            <FaLinkedin />
          </a>
          <div className="w-px h-6 bg-slate-700" />
          {[
            { label: "Projects", value: "15+" },
            { label: "Repos", value: "55+" },
            { label: "Hackathons", value: "5+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-black text-purple-400">{s.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 flex justify-center z-10"
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-30 animate-pulse" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-60" />
          <Image
            src="/assets/profile.jpg"
            alt="Aqsa Shah - AI Engineer"
            width={420}
            height={420}
            className="relative rounded-full object-cover w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] h-auto"
            style={{ boxShadow: "0 0 80px rgba(168,85,247,0.5), 0 0 160px rgba(6,182,212,0.2)" }}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
