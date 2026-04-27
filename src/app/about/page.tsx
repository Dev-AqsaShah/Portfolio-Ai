"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaLanguage,
  FaHeart, FaRocket, FaCode,
} from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { MdSchool, MdOutlineMemory } from "react-icons/md";
import { MdOutlineSmartToy } from "react-icons/md";

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function BentoCard({
  children,
  className = "",
  glowColor = "rgba(168,85,247,0.3)",
  index = 0,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  index?: number;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.025, rotateY: 2, rotateX: -1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className={`relative rounded-2xl p-5 overflow-hidden cursor-default ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? glowColor : "rgba(168,85,247,0.12)"}`,
        backdropFilter: "blur(14px)",
        boxShadow: hovered
          ? `0 0 40px ${glowColor}, 0 8px 32px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "border 0.3s ease, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${glowColor.replace("0.3", "0.08")} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen text-slate-100 overflow-hidden">

      {/* Banner */}
      <div className="w-full py-3 overflow-hidden relative"
        style={{ background: "linear-gradient(90deg, rgba(88,28,135,0.8), rgba(6,182,212,0.4), rgba(88,28,135,0.8))" }}>
        <div className="absolute inset-0 border-y border-purple-500/30" />
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="inline-block whitespace-nowrap font-bold text-purple-200 tracking-[0.3em] text-sm"
        >
          ✦ ABOUT ME ✦ WHO I AM ✦ MY STORY ✦ ABOUT ME ✦ WHO I AM ✦ MY STORY ✦
        </motion.span>
      </div>

      {/* Title */}
      <div className="text-center pt-12 pb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm md:text-base"
        >
          A little about the human behind the code
        </motion.p>
      </div>

      {/* BENTO GRID */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* HERO CARD — spans 2 cols */}
          <BentoCard
            index={0}
            glowColor="rgba(168,85,247,0.5)"
            className="sm:col-span-2 lg:col-span-2"
          >
            {/* Animated gradient BG */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-10"
                style={{ background: "conic-gradient(from 0deg, #a855f7, #06b6d4, #ec4899, #a855f7)" }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Available for opportunities</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-1">
                Hi, I&apos;m{" "}
                <span className="grad-text">Aqsa Shah</span> 👋
              </h3>
              <p className="text-lg font-bold text-slate-300 mb-3">
                AI Engineer &amp; Full Stack Developer
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                I&apos;m a <span className="text-purple-400 font-semibold">slightly weird</span>,{" "}
                <span className="text-cyan-400 font-semibold">mostly brilliant</span> builder who turns
                ambitious ideas into real AI systems. From autonomous agents to pixel-perfect UIs —
                I do both, and I do them well.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["AI Engineer", "Claude API", "Hackathon Builder", "CS Student"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* AGE + SIGN CARD */}
          <BentoCard index={1} glowColor="rgba(6,182,212,0.4)">
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 py-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="text-5xl"
              >
                ♍
              </motion.div>
              <div>
                <div className="text-4xl font-black text-cyan-400">22</div>
                <div className="text-sm text-slate-500 mt-0.5">Years Old • Virgo</div>
              </div>
            </div>
          </BentoCard>

          {/* LOCATION */}
          <BentoCard index={2} glowColor="rgba(236,72,153,0.4)">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(236,72,153,0.15)", border: "1px solid rgba(236,72,153,0.3)" }}>
                <FaMapMarkerAlt className="text-pink-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Location</div>
                <div className="font-bold text-slate-200">Hyderabad, Sindh</div>
                <div className="text-xs text-slate-500 mt-0.5">Pakistan 🇵🇰</div>
              </div>
            </div>
          </BentoCard>

          {/* EDUCATION */}
          <BentoCard index={3} glowColor="rgba(168,85,247,0.4)">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <MdSchool className="text-purple-400 text-lg" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Education</div>
                <div className="font-bold text-slate-200 text-sm">BS Computer Science</div>
                <div className="text-xs text-purple-400 font-semibold">2nd Year (Ongoing)</div>
                <div className="text-xs text-slate-500 mt-0.5">Uni of Sindh, Jamshoro</div>
              </div>
            </div>
          </BentoCard>

          {/* INTERNSHIP — flip card */}
          <BentoCard index={4} glowColor="rgba(6,182,212,0.5)" onClick={() => setFlipped(!flipped)}>
            <div className="relative h-24" style={{ perspective: 600 }}>
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div className="absolute inset-0 flex items-start gap-3" style={{ backfaceVisibility: "hidden" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}>
                    <FaBriefcase className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Experience</div>
                    <div className="font-bold text-slate-200 text-sm">3PL Dynamics</div>
                    <div className="text-xs text-cyan-400 font-semibold">MERN Stack & React Native Intern</div>
                    <div className="text-xs text-slate-500">3 Months • Tap for more</div>
                  </div>
                </div>
                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col justify-center gap-1 px-1"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-1">What I built</div>
                  <div className="text-xs text-slate-300">🌐 Company website (MERN Stack)</div>
                  <div className="text-xs text-slate-300">📱 Mobile app (React Native + Expo)</div>
                  <div className="text-xs text-slate-300">📦 Client projects + REST APIs</div>
                </div>
              </motion.div>
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs text-slate-600">
                {flipped ? "↩ Tap to flip back" : "👆 Tap to flip"}
              </span>
            </div>
          </BentoCard>

          {/* AI STACK — spans 2 cols */}
          <BentoCard index={5} glowColor="rgba(168,85,247,0.4)" className="sm:col-span-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <RiRobot2Line className="text-purple-400 text-lg" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">AI Stack</div>
                <div className="font-bold text-slate-200">What I Build With</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Claude API", color: "rgba(168,85,247" },
                { label: "Anthropic Subscription", color: "rgba(168,85,247" },
                { label: "OpenAI Agents SDK", color: "rgba(6,182,212" },
                { label: "MCP Protocol", color: "rgba(236,72,153" },
                { label: "Streamlit", color: "rgba(255,75,75" },
                { label: "FastAPI", color: "rgba(6,182,212" },
                { label: "Docker + K8s", color: "rgba(34,197,94" },
                { label: "Real-time Hackathons", color: "rgba(251,191,36" },
              ].map((item) => (
                <motion.span
                  key={item.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-full font-medium cursor-default"
                  style={{
                    background: `${item.color},0.1)`,
                    border: `1px solid ${item.color},0.3)`,
                    color: `${item.color},0.9)`,
                  }}
                >
                  {item.label}
                </motion.span>
              ))}
            </div>
          </BentoCard>

          {/* CURRENTLY */}
          <BentoCard index={6} glowColor="rgba(251,191,36,0.4)">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)" }}>
                <MdOutlineMemory className="text-yellow-400 text-lg" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Currently</div>
                <div className="font-bold text-slate-200">Building</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "Autonomous AI systems",
                "Agentic workflows",
                "Claude API projects",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                    className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"
                  />
                  <span className="text-xs text-slate-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* DIPLOMAS — spans 2 cols */}
          <BentoCard index={7} glowColor="rgba(34,197,94,0.4)" className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <FaGraduationCap className="text-green-400" />
              <div className="text-xs text-slate-500 uppercase tracking-widest">Certifications — Year 3 (Both Ongoing)</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Governor IT */}
              <div className="p-3 rounded-xl" style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.2)" }}>
                <div className="text-xs font-bold text-cyan-400 mb-1">Governor Sindh Initiative</div>
                <div className="text-xs text-slate-300 font-semibold">GenAI, Web3 & Metaverse</div>
                <div className="text-xs text-slate-500 mt-1">Sindh • Year 3 Ongoing</div>
                <div className="text-xs text-slate-600 mt-1">AI · Blockchain · Cloud · Web3 · Smart Contracts</div>
              </div>
              {/* PIAIC */}
              <div className="p-3 rounded-xl" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}>
                <div className="text-xs font-bold text-purple-400 mb-1">PIAIC — Presidential Initiative</div>
                <div className="text-xs text-slate-300 font-semibold">AI, Cloud & Blockchain</div>
                <div className="text-xs text-slate-500 mt-1">Pakistan • Year 3 Ongoing</div>
                <div className="text-xs text-slate-600 mt-1">AI · ML · Cloud Computing · IoT · Data Science</div>
              </div>
            </div>
          </BentoCard>

          {/* LANGUAGES */}
          <BentoCard index={8} glowColor="rgba(236,72,153,0.4)">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.3)" }}>
                <FaLanguage className="text-pink-400 text-xl" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Languages</div>
                <div className="font-bold text-slate-200">I Speak</div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[
                { lang: "English", flag: "🇬🇧", level: "Fluent" },
                { lang: "Urdu", flag: "🇵🇰", level: "Native" },
                { lang: "Sindhi", flag: "✨", level: "Native" },
              ].map((l) => (
                <div key={l.lang} className="text-center">
                  <div className="text-xl">{l.flag}</div>
                  <div className="text-xs font-semibold text-slate-300">{l.lang}</div>
                  <div className="text-xs text-slate-600">{l.level}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* HOBBIES */}
          <BentoCard index={9} glowColor="rgba(168,85,247,0.4)">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <FaHeart className="text-purple-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Off-Screen</div>
                <div className="font-bold text-slate-200">Hobbies</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">🚶‍♀️</span>
                <span className="text-xs text-slate-400">Walking</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">📚</span>
                <span className="text-xs text-slate-400">Reading</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl">🎵</span>
                <span className="text-xs text-slate-400">Music</span>
              </div>
            </div>
          </BentoCard>

          {/* GOAL CARD — same row as hobbies */}
          <BentoCard
            index={10}
            glowColor="rgba(6,182,212,0.5)"
            className="sm:col-span-2"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)" }}
                >
                  <FaRocket className="text-cyan-400 text-xl" />
                </motion.div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">Future Goal</div>
                  <div className="text-xl font-black grad-text">Senior AI Engineer</div>
                  <p className="text-sm text-slate-400 mt-1">
                    Building intelligent systems that <span className="text-cyan-400">actually work</span> in production — at scale.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 flex-wrap md:flex-nowrap">
                <div className="flex items-center gap-2 text-sm text-slate-400 border border-purple-500/20 rounded-xl px-4 py-2">
                  <FaCode className="text-purple-400" /> 55+ Repositories
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 border border-cyan-500/20 rounded-xl px-4 py-2">
                  <RiRobot2Line className="text-cyan-400" /> AI-first mindset
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 border border-pink-500/20 rounded-xl px-4 py-2">
                  <MdOutlineSmartToy className="text-pink-400" /> Anthropic API
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </div>
  );
}
