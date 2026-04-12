"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineCode } from "react-icons/md";
import { Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    type: "AI",
    featured: true,
    title: "AI Customer Success Agent",
    short: "24/7 Autonomous Multi-Channel AI",
    desc: "Enterprise-grade autonomous AI agent that handles Gmail, WhatsApp & web forms round the clock. Built with Claude Sonnet 4.6 for intelligent reasoning, FastAPI backend, Kafka for real-time messaging, Kubernetes for scale — achieving <3s response time and 99.9% uptime.",
    tech: ["Claude Sonnet 4.6", "FastAPI", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "pgvector", "Next.js"],
    link: "https://github.com/Dev-AqsaShah/Final-Hackathon-5",
    github: "https://github.com/Dev-AqsaShah/Final-Hackathon-5",
    liveLink: "https://www.linkedin.com/posts/aqsa-shah-_ai-hackathon-generativeai-ugcPost-7445498820374900736-JWgD?utm_source=share&utm_medium=member_android&rcm=ACoAAEvQqj8BNo5cEv82-wXcnVkb9kDKOU9e1cA",
    gradient: "from-purple-600 via-violet-600 to-cyan-600",
    glow: "rgba(168,85,247,0.6)",
    images: [],
  },
  {
    id: 2,
    type: "AI",
    featured: false,
    title: "Autonomous AI Employee",
    short: "Self-Operating AI Workforce",
    desc: "Fully autonomous AI that reads & replies to emails, posts on social media, generates CEO briefings and chains complex tasks 24/7. Human-in-the-loop approval system with emergency stop.",
    tech: ["Claude Code", "Anthropic API", "Playwright", "Docker", "PostgreSQL", "Odoo ERP"],
    link: "https://github.com/Dev-AqsaShah/AI-Employee",
    github: "https://github.com/Dev-AqsaShah/AI-Employee",
    liveLink: "https://www.linkedin.com/posts/aqsa-shah-_aiemployee-hackathon0-giaic-ugcPost-7449147280470917120-luzd",
    gradient: "from-violet-600 to-purple-600",
    glow: "rgba(139,92,246,0.5)",
    images: [],
  },
  {
    id: 3,
    type: "AI",
    featured: false,
    title: "Agentic AI Collection",
    short: "Multi-Agent AI Systems",
    desc: "Collection of multi-agent AI implementations: knowledge graph agent, weather agent, object detection, Chainlit conversational UI, guardrails & more. Full exploration of OpenAI Agents SDK + Anthropic ecosystem.",
    tech: ["Python", "Chainlit", "OpenAI Agents SDK", "Anthropic API", "Guardrails"],
    link: "https://github.com/Dev-AqsaShah/Agentic-Ai-projects",
    github: "https://github.com/Dev-AqsaShah/Agentic-Ai-projects",
    gradient: "from-cyan-600 to-blue-600",
    glow: "rgba(6,182,212,0.5)",
    images: [],
  },
  {
    id: 4,
    type: "Web",
    featured: false,
    title: "Full Stack Blog Platform",
    short: "Write. Publish. Explore.",
    desc: "Blog platform with user auth, rich text editor, dark mode & full CRUD. Built with Next.js App Router, MongoDB for persistence and TypeScript throughout.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    link: "https://m-4-blog-web.vercel.app/",
    github: "https://github.com/Dev-AqsaShah/m-4-blog-web",
    gradient: "from-pink-600 to-rose-600",
    glow: "rgba(236,72,153,0.5)",
    images: ["/assets/blog1.png", "/assets/blog2.png", "/assets/blog3.png", "/assets/blog4.png"],
  },
  {
    id: 5,
    type: "Web",
    featured: false,
    title: "Pixel Perfect E-commerce",
    short: "Shop. Manage. Scale.",
    desc: "Full-featured e-commerce store with separate admin dashboard, Sanity CMS for content, product catalog, cart & checkout. Pixel perfect UI — live on Vercel.",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    link: "https://e-commerce-hackathon-red.vercel.app/",
    github: "https://github.com/Dev-AqsaShah/e-commerce-hackathon",
    gradient: "from-orange-600 to-pink-600",
    glow: "rgba(251,146,60,0.5)",
    images: ["/assets/ecom1.png", "/assets/ecom2.png", "/assets/ecom3.png", "/assets/ecom4.png"],
  },
  {
    id: 6,
    type: "AI",
    featured: false,
    title: "AI Portfolio Assistant",
    short: "Smart. Focused. Honest.",
    desc: "Conversational AI chatbot that answers questions exclusively from portfolio data using Google Gemini. Refuses out-of-scope questions to prevent hallucination — built on Streamlit.",
    tech: ["Python", "Streamlit", "Gemini AI", "YAML"],
    link: "https://dev-aqsashah-portfolio-assistant-app-3jykbz.streamlit.app/",
    github: "https://github.com/Dev-AqsaShah/Portfolio-Assistant",
    gradient: "from-emerald-600 to-cyan-600",
    glow: "rgba(16,185,129,0.5)",
    images: ["/assets/aiport1.png", "/assets/aiport2.png", "/assets/aiport3.png", "/assets/aiport4.png"],
  },
  {
    id: 7,
    type: "AI",
    featured: false,
    title: "Physical AI & Humanoid Robotics Textbook",
    short: "Interactive AI Educational Platform",
    desc: "An interactive textbook + web application covering Physical AI and Humanoid Robotics. Python backend with Anthropic & OpenAI Agents SDK integration, Next.js frontend — deployed live on Vercel.",
    tech: ["Next.js", "Python", "Anthropic API", "OpenAI Agents SDK", "TypeScript"],
    link: "https://physical-ai-humanoid-robotics-textb-beryl-one.vercel.app",
    github: "https://github.com/Dev-AqsaShah/Physical-AI-Humanoid-Robotics-Textbook",
    gradient: "from-violet-600 to-indigo-600",
    glow: "rgba(139,92,246,0.5)",
    images: [],
  },
  {
    id: 8,
    type: "AI",
    featured: false,
    title: "Hackathon 2 — Multi-Phase Project",
    short: "Phase 1 · 2 · 3 · 5",
    desc: "Multi-phase hackathon project with progressive development across phases. TypeScript frontend, Python backend with Docker containerization. Each phase builds on the last.",
    tech: ["TypeScript", "Python", "Docker", "CSS"],
    link: "https://github.com/Dev-AqsaShah/hackathon-2",
    github: "https://github.com/Dev-AqsaShah/hackathon-2",
    gradient: "from-amber-600 to-orange-600",
    glow: "rgba(251,146,60,0.5)",
    images: [],
  },
  {
    id: 9,
    type: "Web",
    featured: false,
    title: "Hackathon Phase III",
    short: "Built & Shipped in Hours",
    desc: "Next.js web application built during Hackathon Phase III. Full TypeScript implementation, responsive UI — deployed live on Vercel.",
    tech: ["Next.js", "TypeScript", "CSS"],
    link: "https://hackathon-phase-iii-eight.vercel.app",
    github: "https://github.com/Dev-AqsaShah/hackathon-phase-iii",
    gradient: "from-teal-600 to-emerald-600",
    glow: "rgba(20,184,166,0.5)",
    images: [],
  },
  {
    id: 10,
    type: "Web",
    featured: false,
    title: "E-commerce Admin Dashboard",
    short: "Manage. Monitor. Control.",
    desc: "Separate admin dashboard for e-commerce management. Built with Next.js and Sanity CMS — full product, order and content management panel. Live on Vercel.",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    link: "https://admin-dashboard-e-commerce-two.vercel.app",
    github: "https://github.com/Dev-AqsaShah/admin-dashboard-e-commerce",
    gradient: "from-blue-600 to-indigo-600",
    glow: "rgba(99,102,241,0.5)",
    images: [],
  },
];

const FILTERS = ["All", "AI", "Web"] as const;
type Filter = typeof FILTERS[number];

// 3D Tilt Card
function TiltCard({ project, index }: {
  project: typeof projects[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [6, -6]);
  const rotateY = useTransform(x, [-80, 80], [-6, 6]);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); setHovered(false); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      className="relative h-full"
    >
      <div
        className="relative h-full rounded-2xl p-5 flex flex-col transition-all duration-300 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? project.glow : "rgba(168,85,247,0.12)"}`,
          backdropFilter: "blur(14px)",
          boxShadow: hovered ? `0 0 40px ${project.glow}, 0 20px 60px rgba(0,0,0,0.4)` : "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        {/* Gradient mesh bg */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div
            className={`absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10 bg-gradient-to-br ${project.gradient} blur-2xl transition-opacity duration-300`}
            style={{ opacity: hovered ? 0.2 : 0.08 }}
          />
          <div className="absolute bottom-0 right-0 text-[120px] font-black opacity-[0.03] leading-none select-none">
            {String(project.id).padStart(2, "0")}
          </div>
        </div>

        {/* Top row */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${project.gradient}`}>
            {project.type === "AI" ? <RiRobot2Line /> : <MdOutlineCode />}
            {project.type}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/10">
              <Sparkles className="w-3 h-3" /> Flagship
            </span>
          )}
        </div>

        {/* Title */}
        <div className="relative z-10 mb-1">
          <p className="text-xs text-slate-500 font-medium mb-1">{project.short}</p>
          <h3 className="text-lg font-black text-slate-100 leading-tight">{project.title}</h3>
        </div>

        {/* Divider */}
        <div className="relative z-10 my-3 h-px"
          style={{ background: `linear-gradient(to right, ${project.glow}, transparent)` }} />

        {/* Description */}
        <p className="relative z-10 text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>

        {/* Tech chips */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400 bg-white/5">
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-500">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Buttons */}
        {(() => {
          const liveUrl = ("liveLink" in project && project.liveLink)
            ? project.liveLink as string
            : project.link !== project.github
              ? project.link
              : null;
          return (
            <div className="relative z-10 flex gap-2 flex-wrap">
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.gradient}`}
                >
                  <FaExternalLinkAlt className="text-[10px]" /> View Live
                </motion.a>
              )}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition"
              >
                <FaGithub /> GitHub
              </motion.a>
            </div>
          );
        })()}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-700/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/6 rounded-full blur-[120px]" />
      </div>

      {/* Banner */}
      <div className="w-full py-3 overflow-hidden relative"
        style={{ background: "linear-gradient(90deg, rgba(88,28,135,0.8), rgba(236,72,153,0.4), rgba(88,28,135,0.8))" }}>
        <div className="absolute inset-0 border-y border-pink-500/30" />
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="inline-block whitespace-nowrap font-bold text-pink-200 tracking-[0.3em] text-sm"
        >
          ✦ MY PROJECTS ✦ WHAT I BUILD ✦ LIVE DEMOS ✦ MY PROJECTS ✦ WHAT I BUILD ✦ LIVE DEMOS ✦
        </motion.span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 pb-20">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black grad-text mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm md:text-base"
          >
            Real-world AI systems &amp; full-stack apps — built, shipped, deployed
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
              style={
                filter === f
                  ? { background: "linear-gradient(135deg, #a855f7, #06b6d4)", color: "white", boxShadow: "0 0 20px rgba(168,85,247,0.4)" }
                  : { background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }
              }
            >
              {f === "All" ? "✦ All" : f === "AI" ? "🤖 AI Projects" : "💻 Web Projects"}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured card — full width */}
            {featured && (
              <motion.div className="mb-6 relative group" style={{ perspective: 1000 }}>
                <TiltCard project={featured} index={0} />

                {/* Featured glow line */}
                <motion.div
                  className="absolute -inset-px rounded-2xl pointer-events-none"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  style={{ background: `linear-gradient(135deg, ${featured.glow}, transparent, ${featured.glow})`, borderRadius: "1rem", padding: "1px" }}
                />
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((p, i) => (
                <TiltCard
                  key={p.id}
                  project={p}
                  index={i + 1}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  );
}
