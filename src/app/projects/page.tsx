"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineCode } from "react-icons/md";
import Image from "next/image";

const projects = [
  {
    id: 1,
    type: "AI",
    title: "AI Customer Success Agent",
    desc: "24/7 autonomous multi-channel AI agent handling Gmail, WhatsApp & web forms. Built with Claude Sonnet 4.6, FastAPI, Docker, Kubernetes, Kafka & pgvector. Enterprise-grade with <3s response time & 99.9% uptime.",
    tech: ["Claude Sonnet 4.6", "FastAPI", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "Next.js"],
    link: "https://github.com/Dev-AqsaShah/Final-Hackathon-5",
    github: "https://github.com/Dev-AqsaShah/Final-Hackathon-5",
    images: [],
  },
  {
    id: 2,
    type: "AI",
    title: "Autonomous AI Employee",
    desc: "Fully autonomous AI that reads emails, posts on social media, generates CEO briefings & chains tasks 24/7. Built on Claude Code + Anthropic API with Playwright browser automation & Odoo ERP integration.",
    tech: ["Claude Code", "Anthropic API", "Playwright", "Docker", "PostgreSQL", "Odoo ERP"],
    link: "https://github.com/Dev-AqsaShah/AI-Employee",
    github: "https://github.com/Dev-AqsaShah/AI-Employee",
    images: [],
  },
  {
    id: 3,
    type: "AI",
    title: "Agentic AI Collection",
    desc: "Collection of multi-agent AI implementations: knowledge graph, weather agent, object detection, Chainlit conversational UI, guardrails & more. Explores the full OpenAI Agents SDK + Anthropic API ecosystem.",
    tech: ["Python", "Chainlit", "OpenAI Agents SDK", "Anthropic API", "Guardrails"],
    link: "https://github.com/Dev-AqsaShah/Agentic-Ai-projects",
    github: "https://github.com/Dev-AqsaShah/Agentic-Ai-projects",
    images: [],
  },
  {
    id: 4,
    type: "Web",
    title: "Full Stack Blog Platform",
    desc: "Blog platform where users write, publish & explore articles. Full-stack with Next.js, MongoDB, TypeScript. Clean UI with dark mode, user authentication & rich text editor.",
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    link: "https://m-4-blog-web.vercel.app/",
    github: "https://github.com/Dev-AqsaShah/m-4-blog-web",
    images: ["/assets/blog1.png", "/assets/blog2.png", "/assets/blog3.png", "/assets/blog4.png"],
  },
  {
    id: 5,
    type: "Web",
    title: "Pixel Perfect E-commerce",
    desc: "Full-featured e-commerce platform with separate admin dashboard, Sanity CMS integration, product management, cart, checkout & order system. Deployed & live on Vercel.",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    link: "https://e-commerce-hackathon-red.vercel.app/",
    github: "https://github.com/Dev-AqsaShah/e-commerce-hackathon",
    images: ["/assets/ecom1.png", "/assets/ecom2.png", "/assets/ecom3.png", "/assets/ecom4.png"],
  },
  {
    id: 6,
    type: "AI",
    title: "AI Portfolio Assistant",
    desc: "Conversational AI chatbot that answers questions exclusively from portfolio data. Built with Streamlit & Google Gemini AI. Refuses out-of-scope questions to prevent hallucination — smart & honest.",
    tech: ["Python", "Streamlit", "Gemini AI", "YAML"],
    link: "https://dev-aqsashah-portfolio-assistant-app-3jykbz.streamlit.app/",
    github: "https://github.com/Dev-AqsaShah/Portfolio-Assistant",
    images: ["/assets/aiport1.png", "/assets/aiport2.png", "/assets/aiport3.png", "/assets/aiport4.png"],
  },
];

const typeColor: Record<string, string> = {
  AI: "from-purple-500 to-cyan-500",
  Web: "from-pink-500 to-purple-500",
};

export default function ProjectsPage() {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((p) => (p + 1) % (activeImages?.length || 1));
  const prev = () => setCurrentIndex((p) => (p - 1 + (activeImages?.length || 1)) % (activeImages?.length || 1));

  return (
    <main className="relative min-h-screen bg-[#050510] overflow-hidden">
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

      {/* Title */}
      <div className="text-center pt-12 pb-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          Featured Projects
        </motion.h2>
        <p className="text-slate-500 text-sm md:text-base">
          Real-world AI systems & full-stack applications
        </p>
      </div>

      {/* Timeline */}
      <section className="relative py-8 px-4 sm:px-12 max-w-5xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 w-px h-full -translate-x-1/2"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.5), transparent)" }} />

        {projects.map((p, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={p.id}
              initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`mb-14 flex items-center w-full ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div
                className="relative w-full sm:w-5/12 p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(168,85,247,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 0 30px rgba(168,85,247,0.1), inset 0 0 20px rgba(168,85,247,0.02)",
                }}
              >
                {/* Timeline dot */}
                <span
                  className="absolute top-6 w-4 h-4 rounded-full border-2 border-purple-400"
                  style={{
                    [isLeft ? "left" : "right"]: "calc(100% + 1.25rem)",
                    background: "linear-gradient(135deg, #a855f7, #06b6d4)",
                    boxShadow: "0 0 10px rgba(168,85,247,0.6)",
                  }}
                />

                {/* Type badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${typeColor[p.type]} text-white flex items-center gap-1`}>
                    {p.type === "AI" ? <RiRobot2Line /> : <MdOutlineCode />}
                    {p.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-purple-500/30 text-purple-300 bg-purple-500/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 flex-wrap">
                  <motion.a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    {p.images.length === 0 ? "GitHub" : "View Live"}
                  </motion.a>
                  {p.github && p.link !== p.github && (
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border border-slate-700 text-slate-300 hover:border-purple-500/50 transition"
                    >
                      <FaGithub /> GitHub
                    </motion.a>
                  )}
                  {p.images.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setActiveImages(p.images); setCurrentIndex(0); }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
                    >
                      View Images
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Image Overlay */}
      <AnimatePresence>
        {activeImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center p-4"
            style={{ background: "rgba(5,5,16,0.95)", backdropFilter: "blur(20px)" }}
          >
            <button className="absolute top-6 right-6 text-white text-2xl hover:text-purple-400 transition"
              onClick={() => setActiveImages(null)}>
              <FaTimes />
            </button>
            <div className="relative w-full max-w-3xl flex justify-center items-center">
              <Image
                src={activeImages[currentIndex]}
                alt="Project Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] rounded-xl object-contain"
                style={{ boxShadow: "0 0 60px rgba(168,85,247,0.3)" }}
                priority
              />
              <button onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-600/80 text-white flex items-center justify-center hover:bg-purple-500 transition">
                <FaArrowLeft />
              </button>
              <button onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-600/80 text-white flex items-center justify-center hover:bg-purple-500 transition">
                <FaArrowRight />
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              {activeImages.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition ${idx === currentIndex ? "bg-purple-400" : "bg-slate-600"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
