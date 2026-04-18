"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import ProjectsPage from "@/app/projects/page";
import ExperiencePage from "@/app/experience/page";
import ContactPage from "@/app/contact/page";

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Agentic AI Builder",
];


const marqueeItems = [
  "Claude API", "⬥", "Next.js", "⬥", "FastAPI", "⬥", "Docker", "⬥",
  "Kubernetes", "⬥", "React Native", "⬥", "MongoDB", "⬥", "PostgreSQL",
  "⬥", "Python", "⬥", "TypeScript", "⬥", "OpenAI Agents SDK", "⬥",
  "MCP Protocol", "⬥", "Streamlit", "⬥", "MERN Stack", "⬥",
];

const stats = [
  { value: "55+",         label: "GitHub Repos",   color: "#a855f7" },
  { value: "10+",         label: "Projects Built",  color: "#06b6d4" },
  { value: "5+",          label: "Hackathons",      color: "#ec4899" },
  { value: "3PL",         label: "Internship",      color: "#22c55e" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay } }),
};

export default function HomePage() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 60]);

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
    <main className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY }}
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
      >
        {/* Grid bg */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5 order-2 md:order-1"
            >
              {/* Status */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-sm font-medium"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Projects &amp; Internships
              </motion.div>

              {/* Headline */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <p className="text-slate-400 text-lg mb-1">Hi there, I&apos;m</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                  <span className="grad-text">Aqsa Shah</span>
                </h1>
              </motion.div>

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-xl md:text-2xl font-bold"
              >
                <span className="text-slate-500">I&apos;m a</span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent min-w-[160px] sm:min-w-[220px]">
                  {displayed}
                </span>
                <span className="text-purple-400 animate-pulse">|</span>
              </motion.div>

              {/* Value prop */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-slate-400 text-base leading-relaxed max-w-md"
              >
                I build{" "}
                <span className="text-purple-400 font-semibold">autonomous AI systems</span> &amp;{" "}
                <span className="text-cyan-400 font-semibold">full-stack applications</span>{" "}
                that solve real problems — from multi-agent pipelines to pixel-perfect UIs.
                BS CS student · 3PL Dynamics intern · Hackathon finalist.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}
                  >
                    View My Work <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </a>
                <Link href="/assistant">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-purple-300 transition"
                    style={{ border: "1px solid rgba(168,85,247,0.4)", background: "rgba(168,85,247,0.08)" }}
                  >
                    <Sparkles className="w-4 h-4" /> Ask My AI
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social + Resume */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="flex items-center gap-4 pt-1"
              >
                <a href="https://github.com/Dev-AqsaShah" target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-purple-400 transition text-xl"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/aqsa-shah-" target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-400 transition text-xl"><FaLinkedin /></a>
                <div className="w-px h-5 bg-slate-800" />
                <a href="/resume" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-purple-400 transition">
                  <ExternalLink className="w-3.5 h-3.5" /> Resume
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center p-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[10px] text-slate-600 mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT — Photo + floating badges ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex justify-center items-center order-1 md:order-2"
              style={{ minHeight: 420 }}
            >

              {/* Photo */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full opacity-40"
                  style={{
                    background: "conic-gradient(from 0deg, #a855f7, #06b6d4, #ec4899, #a855f7)",
                    filter: "blur(12px)",
                  }}
                />
                <div className="absolute -inset-1 rounded-full"
                  style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4, #ec4899)", opacity: 0.7 }} />
                <Image
                  src="/assets/profile.jpg"
                  alt="Aqsa Shah — AI Engineer"
                  width={380}
                  height={380}
                  className="relative rounded-full object-cover w-[260px] sm:w-[310px] md:w-[350px] lg:w-[380px] h-auto"
                  style={{ boxShadow: "0 0 80px rgba(168,85,247,0.4), 0 0 160px rgba(6,182,212,0.15)" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-slate-600">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── MARQUEE STRIP ───────────────────────────────────── */}
      <div className="py-4 overflow-hidden relative"
        style={{ borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)", background: "rgba(168,85,247,0.03)" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap w-max"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`text-sm font-medium ${item === "⬥" ? "text-purple-700" : "text-slate-600"}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── SECTIONS ────────────────────────────────────────── */}
      {[
        { id: "about",      Component: AboutPage },
        { id: "skills",     Component: SkillsPage },
        { id: "experience", Component: ExperiencePage },
        { id: "projects",   Component: ProjectsPage },
        { id: "contact",    Component: ContactPage },
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
