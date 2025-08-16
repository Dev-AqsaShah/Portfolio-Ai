"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiOpenai,
  SiShadcnui,
  SiVercel,
  SiFramer,
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "ShadCN", icon: <SiShadcnui /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "OpenAI", icon: <SiOpenai /> },
  { name: "Agents SDK", icon: <MdOutlineSmartToy /> },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Top Purple Banner with animated lines */}
      <div className="w-screen bg-purple-600 text-center py-3 overflow-hidden relative">
        
        {/* 🔹 Top animated line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
        />

        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
          }}
          className="inline-block whitespace-nowrap font-semibold text-black"
        >
          YOU ARE IN MY SKILLS PAGE NOW
        </motion.span>

        {/* 🔹 Bottom animated line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
        />
      </div>

      <section className="relative py-20 px-6 sm:px-12 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full 
                         bg-purple-800 text-white text-3xl shadow-lg relative group"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [8, -12, 15] }}
              transition={{
                repeat: Infinity,
                duration: 2.5 + i * 0.15,
                ease: "easeInOut",
              }}
            >
              {skill.icon}
              <span className="absolute bottom-[-28px] opacity-0 group-hover:opacity-100 
                               text-sm font-medium text-white transition">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
