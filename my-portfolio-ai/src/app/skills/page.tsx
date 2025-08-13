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
    <main className="bg-white dark:bg-gray-900 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Top Purple Banner with animation */}
      <motion.div
        className="bg-purple-600 text-white py-3 text-center text-lg font-bold shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.7)",
        }}
      >
        You are in my skill page now
      </motion.div>

      {/* Floating Circles */}
      <section className="relative py-20 px-6 sm:px-12">
        {skills.map((skill, i) => {
          // random position for each circle
          const randomX = Math.random() * 80; // % from left
          const randomY = Math.random() * 80; // % from top
          const duration = 6 + Math.random() * 4; // random speed

          return (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-900 text-white text-3xl shadow-lg group cursor-pointer"
              style={{ top: `${randomY}%`, left: `${randomX}%` }}
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2 }}
            >
              {skill.icon}
              <span className="absolute bottom-[-28px] opacity-0 group-hover:opacity-100 text-purple-300 font-bold text-xs sm:text-sm transition">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}
