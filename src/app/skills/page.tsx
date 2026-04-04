"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaJs, FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiOpenai, SiVercel,
  SiFramer, SiFastapi, SiStreamlit, SiMongodb, SiPostgresql,
  SiKubernetes, SiExpo, SiExpress, SiNodedotjs,
} from "react-icons/si";
import { MdOutlineSmartToy, MdOutlineMemory } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";

const skillCategories = [
  {
    label: "AI & Agents",
    color: "from-purple-500 to-cyan-500",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.4)",
    skills: [
      { name: "Claude API", icon: <RiRobot2Line /> },
      { name: "OpenAI Agents SDK", icon: <SiOpenai /> },
      { name: "Agentic AI", icon: <MdOutlineSmartToy /> },
      { name: "MCP Protocol", icon: <MdOutlineMemory /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
  {
    label: "Frontend",
    color: "from-pink-500 to-purple-500",
    border: "border-pink-500/30",
    glow: "rgba(236,72,153,0.4)",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    label: "Backend & DB",
    color: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/30",
    glow: "rgba(6,182,212,0.4)",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Python", icon: <FaPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    label: "DevOps & Mobile",
    color: "from-green-500 to-cyan-500",
    border: "border-green-500/30",
    glow: "rgba(34,197,94,0.4)",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "React Native", icon: <TbBrandReactNative /> },
      { name: "Expo", icon: <SiExpo /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#050510] overflow-hidden">
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
        <p className="text-slate-500 text-sm md:text-base">
          From AI agents to full-stack apps — here&apos;s what I build with
        </p>
      </div>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-12">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.6 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-px flex-1 bg-gradient-to-r ${cat.color} opacity-40`} />
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${cat.border} text-slate-400`}>
                {cat.label}
              </span>
              <div className={`h-px flex-1 bg-gradient-to-l ${cat.color} opacity-40`} />
            </div>

            {/* Skill bubbles */}
            <div className="flex flex-wrap justify-center gap-6">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  className="relative flex flex-col items-center gap-2 cursor-pointer"
                  animate={{ y: [6, -8, 6] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5 + si * 0.2 + ci * 0.1,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setActiveSkill((p) => (p === skill.name ? null : skill.name))}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl text-2xl sm:text-3xl text-white"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      border: `1px solid ${cat.glow.replace("0.4", "0.3")}`,
                      backdropFilter: "blur(12px)",
                      boxShadow: activeSkill === skill.name
                        ? `0 0 25px ${cat.glow}, 0 0 50px ${cat.glow.replace("0.4", "0.15")}`
                        : `0 0 10px ${cat.glow.replace("0.4", "0.15")}`,
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-xs text-slate-400 font-medium text-center w-20">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
