"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import ProjectsPage from "@/app/projects/page";
import ExperiencePage from "@/app/experience/page";
import ContactPage from "@/app/contact/page";

const roles = ["AI Engineer", "Full Stack Developer", "Agentic AI Builder", "Claude API Expert"];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay } }),
};

export default function HomePage() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let t: NodeJS.Timeout;
    if (!deleting) {
      if (displayed.length < role.length) {
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        t = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
      } else {
        setDeleting(false);
        setRoleIdx((p) => (p + 1) % roles.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <main className="min-h-screen bg-[#050510]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-12 pt-20 relative overflow-hidden">
        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-700/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Left: Text */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeIn}
          className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start justify-center z-10 space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            <span className="text-slate-100">I&apos;m </span>
            <span className="grad-text">Aqsa Shah</span>
          </h1>

          <div className="text-xl md:text-2xl font-bold text-slate-300 h-8 flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {displayed}
            </span>
            <span className="ml-1 text-purple-400 animate-pulse">|</span>
          </div>

          <p className="text-slate-400 text-base leading-relaxed">
            I&apos;m a{" "}
            <span className="text-purple-400 font-semibold">slightly weird</span>,{" "}
            <span className="text-cyan-400 font-semibold">mostly brilliant</span> AI Engineer
            who builds autonomous systems that actually work.{" "}
            <span className="text-slate-500">BS CS • 3PL Dynamics Intern • Claude API dev.</span>
          </p>

          <button
            onClick={() => window.open("https://dev-aqsashah-portfolio-assistant-app-3jykbz.streamlit.app/", "_blank")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition hover:scale-105"
            style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))", border: "1px solid rgba(168,85,247,0.4)" }}
          >
            🤖 Ask My AI Assistant
          </button>
        </motion.div>

        {/* Right: Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center z-10"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-25 animate-pulse" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50" />
            <Image
              src="/assets/profile.jpg"
              alt="Aqsa Shah"
              width={400}
              height={400}
              className="relative rounded-full object-cover w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-auto"
              style={{ boxShadow: "0 0 80px rgba(168,85,247,0.5)" }}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* SECTIONS */}
      {[
        { id: "about", Component: AboutPage },
        { id: "skills", Component: SkillsPage },
        { id: "experience", Component: ExperiencePage },
        { id: "projects", Component: ProjectsPage },
        { id: "contact", Component: ContactPage },
      ].map(({ id, Component }, i) => (
        <motion.section
          key={id}
          id={id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.1 * (i + 1)}
        >
          <Component />
        </motion.section>
      ))}
    </main>
  );
}
