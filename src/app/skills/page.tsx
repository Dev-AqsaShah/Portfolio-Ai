"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaJs, FaDocker, FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiOpenai, SiVercel,
  SiFramer, SiFastapi, SiStreamlit, SiMongodb, SiPostgresql,
  SiKubernetes, SiExpo, SiExpress, SiNodedotjs,
} from "react-icons/si";
import { MdOutlineSmartToy, MdOutlineMemory, MdOutlineTerminal, MdOutlineAccountTree } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { Sparkles } from "lucide-react";

const CATS = [
  { id: "all",      label: "All",        emoji: "✦", color: "#a855f7" },
  { id: "ai",       label: "AI & Agents",emoji: "🤖", color: "#a855f7" },
  { id: "frontend", label: "Frontend",   emoji: "🎨", color: "#ec4899" },
  { id: "backend",  label: "Backend",    emoji: "⚙️",  color: "#06b6d4" },
  { id: "devops",   label: "DevOps",     emoji: "📦", color: "#22c55e" },
  { id: "cs",       label: "Core CS",    emoji: "🎓", color: "#f59e0b" },
] as const;

type CatId = typeof CATS[number]["id"];

const skills = [
  // AI & Agents
  { name: "Claude API",         icon: <RiRobot2Line />,       cat: "ai",       color: "#a855f7" },
  { name: "OpenAI Agents SDK",  icon: <SiOpenai />,           cat: "ai",       color: "#10b981" },
  { name: "Agentic AI",         icon: <MdOutlineSmartToy />,  cat: "ai",       color: "#a855f7" },
  { name: "MCP Protocol",       icon: <MdOutlineMemory />,    cat: "ai",       color: "#06b6d4" },
  { name: "Streamlit",          icon: <SiStreamlit />,        cat: "ai",       color: "#ff4b4b" },
  // Frontend
  { name: "Next.js",            icon: <SiNextdotjs />,        cat: "frontend", color: "#ffffff" },
  { name: "React",              icon: <FaReact />,            cat: "frontend", color: "#61dafb" },
  { name: "TypeScript",         icon: <SiTypescript />,       cat: "frontend", color: "#3178c6" },
  { name: "JavaScript",         icon: <FaJs />,               cat: "frontend", color: "#f7df1e" },
  { name: "Tailwind CSS",       icon: <SiTailwindcss />,      cat: "frontend", color: "#38bdf8" },
  { name: "Framer Motion",      icon: <SiFramer />,           cat: "frontend", color: "#ec4899" },
  { name: "HTML5",              icon: <FaHtml5 />,            cat: "frontend", color: "#e34f26" },
  { name: "CSS3",               icon: <FaCss3Alt />,          cat: "frontend", color: "#264de4" },
  { name: "Sanity CMS",         icon: <FaDatabase />,         cat: "frontend", color: "#f03e2f" },
  // Backend & DB
  { name: "Node.js",            icon: <SiNodedotjs />,        cat: "backend",  color: "#68a063" },
  { name: "Express.js",         icon: <SiExpress />,          cat: "backend",  color: "#ffffff" },
  { name: "FastAPI",            icon: <SiFastapi />,          cat: "backend",  color: "#009688" },
  { name: "Python",             icon: <FaPython />,           cat: "backend",  color: "#3572a5" },
  { name: "MongoDB",            icon: <SiMongodb />,          cat: "backend",  color: "#47a248" },
  { name: "PostgreSQL",         icon: <SiPostgresql />,       cat: "backend",  color: "#336791" },
  // DevOps & Mobile
  { name: "Docker",             icon: <FaDocker />,           cat: "devops",   color: "#2496ed" },
  { name: "Kubernetes",         icon: <SiKubernetes />,       cat: "devops",   color: "#326ce5" },
  { name: "React Native",       icon: <TbBrandReactNative />, cat: "devops",   color: "#61dafb" },
  { name: "Expo",               icon: <SiExpo />,             cat: "devops",   color: "#ffffff" },
  { name: "Vercel",             icon: <SiVercel />,           cat: "devops",   color: "#ffffff" },
  { name: "GitHub",             icon: <FaGithub />,           cat: "devops",   color: "#ffffff" },
  // Core CS
  { name: "Java",               icon: <FaJava />,             cat: "cs",       color: "#f89820", badge: "" },
  { name: "DSA (Java)",         icon: <MdOutlineAccountTree />,cat: "cs",       color: "#f59e0b", badge: "" },
  { name: "Assembly Language",  icon: <MdOutlineTerminal />,  cat: "cs",       color: "#a3e635" },
  { name: "C",                  icon: <MdOutlineTerminal />,  cat: "cs",       color: "#a8b9cc", badge: "" },
];

export default function SkillsPage() {
  const [active, setActive] = useState<CatId>("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.cat === active);
  const counts = CATS.reduce((acc, c) => {
    acc[c.id] = c.id === "all" ? skills.length : skills.filter((s) => s.cat === c.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <main className="min-h-screen overflow-hidden">

      {/* Banner */}
      <div className="w-full py-3 overflow-hidden relative"
        style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.5), rgba(88,28,135,0.8), rgba(6,182,212,0.5))" }}>
        <div className="absolute inset-0 border-y border-cyan-500/30" />
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="inline-block whitespace-nowrap font-bold text-cyan-200 tracking-[0.3em] text-sm"
        >
          ✦ MY SKILLS ✦ TECH STACK ✦ TOOLS I USE ✦ MY SKILLS ✦ TECH STACK ✦ TOOLS I USE ✦
        </motion.span>
      </div>

      {/* Title */}
      <div className="text-center pt-12 pb-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          Skills & Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm md:text-base"
        >
          {skills.length} skills across AI, full-stack, mobile & computer science
        </motion.p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 px-4 mb-10">
        {CATS.map((cat) => {
          const isActive = active === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300"
              style={
                isActive
                  ? { background: `${cat.color}22`, border: `1px solid ${cat.color}60`, color: cat.color, boxShadow: `0 0 15px ${cat.color}30` }
                  : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#64748b" }
              }
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                style={{ background: isActive ? `${cat.color}33` : "rgba(255,255,255,0.06)", color: isActive ? cat.color : "#475569" }}
              >
                {counts[cat.id]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Skills grid */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: `0 0 25px ${skill.color}50`,
                  y: -4,
                }}
                className="relative flex flex-col items-center gap-2 p-3 rounded-2xl cursor-default group transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                }}
              >
                {/* Hover bg glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <span className="text-xs text-slate-400 font-medium text-center leading-tight group-hover:text-slate-200 transition-colors duration-200">
                  {skill.name}
                </span>

                {/* Badge */}
                {"badge" in skill && skill.badge && (
                  <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded-full text-black"
                    style={{ background: skill.color }}>
                    {skill.badge}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </section>
    </main>
  );
}
