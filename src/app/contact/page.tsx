"use client";

import { motion } from "framer-motion";
import {
  FaInstagram, FaSnapchatGhost, FaTiktok, FaYoutube, FaDiscord,
  FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub, FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";

const categories = [
  {
    label: "💼 Professional",
    color: "rgba(168,85,247",
    links: [
      { name: "GitHub",   handle: "Dev-AqsaShah",              icon: <FaGithub />,   url: "https://github.com/Dev-AqsaShah",                                 bg: "#1a1a2e", accent: "#a855f7" },
      { name: "LinkedIn", handle: "aqsa-shah-",                 icon: <FaLinkedin />, url: "https://www.linkedin.com/in/aqsa-shah-",                          bg: "#0a1628", accent: "#0077b5" },
      { name: "Gmail",    handle: "aqsashah000000@gmail.com",   icon: <FaEnvelope />, url: "mailto:aqsashah000000@gmail.com",                                 bg: "#1a0a0a", accent: "#ea4335" },
    ],
  },
  {
    label: "📱 Social Media",
    color: "rgba(236,72,153",
    links: [
      { name: "Instagram", handle: "@developer_aqsashah", icon: <FaInstagram />,     url: "https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA==", bg: "#1a0a1a", accent: "#e1306c" },
      { name: "TikTok",    handle: "@sindhi_girll2",      icon: <FaTiktok />,        url: "https://www.tiktok.com/@sindhi_girll2?_t=ZS-8ywvWrpSagb&_r=1",         bg: "#0a0a12", accent: "#69c9d0" },
      { name: "Twitter X", handle: "@aqsa_shah111",       icon: <FaXTwitter />,      url: "https://x.com/aqsa_shah111?t=T1skjfe5yl632BItutSK6w&s=09",             bg: "#0a0a0a", accent: "#ffffff" },
      { name: "Snapchat",  handle: "@chokri_sindhi",      icon: <FaSnapchatGhost />, url: "https://www.snapchat.com/add/chokri_sindhi",                            bg: "#1a1a00", accent: "#fffc00" },
    ],
  },
  {
    label: "💬 Messaging",
    color: "rgba(6,182,212",
    links: [
      { name: "WhatsApp", handle: "Send a message",   icon: <FaWhatsapp />,       url: "https://wa.me/923000000000",   bg: "#0a1a0f", accent: "#25d366" },
      { name: "Telegram", handle: "@yourusername",    icon: <FaTelegramPlane />,  url: "https://t.me/yourusername",    bg: "#0a1220", accent: "#0088cc" },
      { name: "Discord",  handle: "aqsashah",         icon: <FaDiscord />,        url: "https://discord.gg/aqsashah", bg: "#0a0a1e", accent: "#5865f2" },
    ],
  },
  {
    label: "🎬 Content",
    color: "rgba(239,68,68",
    links: [
      { name: "YouTube", handle: "@whispers_of_life_1", icon: <FaYoutube />, url: "https://youtube.com/@whispers_of_life_1?feature=shared", bg: "#1a0808", accent: "#ff0000" },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050510] overflow-hidden">
      {/* Banner */}
      <div className="w-full py-3 overflow-hidden relative"
        style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(6,182,212,0.3), rgba(168,85,247,0.5))" }}>
        <div className="absolute inset-0 border-y border-purple-500/30" />
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="inline-block whitespace-nowrap font-bold text-purple-200 tracking-[0.3em] text-sm"
        >
          ✦ LET&apos;S CONNECT ✦ FIND ME ON SOCIALS ✦ REACH OUT ✦ LET&apos;S CONNECT ✦ FIND ME ON SOCIALS ✦
        </motion.span>
      </div>

      {/* Title */}
      <div className="text-center pt-12 pb-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          Let&apos;s Connect
        </motion.h2>
        <p className="text-slate-500 text-sm md:text-base">
          Find me everywhere — always open to talk AI, collab &amp; new opportunities
        </p>
      </div>

      {/* Link categories */}
      <section className="max-w-2xl mx-auto px-4 pb-20 space-y-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                {cat.label}
              </span>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${cat.color},0.3), transparent)` }} />
            </div>

            {/* Links */}
            <div className="space-y-2">
              {cat.links.map((link, li) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + li * 0.07 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 0 25px ${link.accent}40`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl group transition-all duration-300"
                  style={{
                    background: `${link.bg}`,
                    border: `1px solid ${link.accent}20`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${link.accent}20`,
                      border: `1px solid ${link.accent}40`,
                      color: link.accent,
                    }}
                  >
                    {link.icon}
                  </div>

                  {/* Name + handle */}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-slate-200 text-sm group-hover:text-white transition">
                      {link.name}
                    </div>
                    <div className="text-xs text-slate-600 truncate group-hover:text-slate-500 transition">
                      {link.handle}
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="text-slate-700 group-hover:text-slate-300 transition"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <HiArrowRight className="text-lg" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-700 text-xs pt-4"
        >
          Prefer AI? Use the chat bubble below to ask anything about me ↘
        </motion.p>
      </section>
    </main>
  );
}
