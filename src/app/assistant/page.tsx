"use client";

import { motion } from "framer-motion";
import ChatWidget from "@/components/ChatWidget";
import { Sparkles } from "lucide-react";

const features = [
  { icon: "🧠", text: "Knows all of Aqsa's projects & skills" },
  { icon: "⚡", text: "Real-time streaming responses" },
  { icon: "🎯", text: "Focused only on Aqsa's portfolio" },
  { icon: "🤖", text: "Powered by Claude (Anthropic)" },
];

export default function AssistantPage() {
  return (
    <main className="min-h-screen bg-[#050510] pt-20 pb-16 overflow-hidden">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
            <Sparkles className="text-white w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black grad-text mb-3">
            Aqsa&apos;s AI Assistant
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto">
            Ask anything about Aqsa Shah — her projects, skills, experience, or how to hire her.
            Powered by <span className="text-purple-400 font-semibold">Claude (Anthropic)</span>.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Left: Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Features */}
            <div className="rounded-2xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.15)" }}>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">What I can tell you</h3>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span className="text-lg">{f.icon}</span>
                  <span>{f.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(6,182,212,0.15)" }}>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Aqsa at a glance</h3>
              {[
                { label: "GitHub Repos", value: "55+", color: "#a855f7" },
                { label: "AI Projects", value: "10+", color: "#06b6d4" },
                { label: "Hackathons", value: "5+", color: "#ec4899" },
                { label: "Experience", value: "3PL Dynamics", color: "#22c55e" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-xs text-slate-500">{s.label}</span>
                  <span className="text-xs font-bold" style={{ color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="rounded-2xl p-5 space-y-2"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.15)" }}>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Connect with Aqsa</h3>
              <a href="https://github.com/Dev-AqsaShah" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition py-1">
                🔗 GitHub — Dev-AqsaShah
              </a>
              <a href="https://www.linkedin.com/in/aqsa-shah-" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition py-1">
                🔗 LinkedIn — aqsa-shah-
              </a>
              <a href="mailto:aqsashah000000@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition py-1">
                📧 aqsashah000000@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right: Chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <ChatWidget compact={false} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
