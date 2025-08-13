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

      {/* Top Purple Banner */}
      <div className="bg-purple-600 text-white py-3 text-center text-lg font-medium shadow-md">
        You are in my skill page now
      </div>

      <section className="relative py-20 px-6 sm:px-12 flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-4xl shadow-lg relative group"
              whileHover={{ scale: 1.1 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i * 0.2,
                ease: "easeInOut",
              }}
            >
              {skill.icon}
              <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm font-medium text-gray-700 dark:text-gray-300 transition">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
