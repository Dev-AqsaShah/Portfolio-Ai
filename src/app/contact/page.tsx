"use client";

import { motion } from "framer-motion";
import {
  FaInstagram, FaSnapchatGhost, FaTiktok, FaYoutube, FaDiscord,
  FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub, FaTelegramPlane, FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub",    icon: <FaGithub />,        url: "https://github.com/Dev-AqsaShah",                                                             gradient: "135deg, #1a1a2e, #16213e",  border: "rgba(139,92,246,0.4)" },
  { name: "LinkedIn",  icon: <FaLinkedin />,       url: "https://www.linkedin.com/in/aqsa-shah-",                                                      gradient: "135deg, #0077b5, #005885",  border: "rgba(0,119,181,0.4)" },
  { name: "Gmail",     icon: <FaEnvelope />,       url: "mailto:aqsashah000000@gmail.com",                                                             gradient: "135deg, #ea4335, #c5221f",  border: "rgba(234,67,53,0.4)" },
  { name: "Instagram", icon: <FaInstagram />,      url: "https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA==",                      gradient: "135deg, #833ab4, #fd1d1d, #fcb045", border: "rgba(253,29,29,0.4)" },
  { name: "WhatsApp",  icon: <FaWhatsapp />,       url: "https://wa.me/923000000000",                                                                  gradient: "135deg, #128c7e, #25d366",  border: "rgba(37,211,102,0.4)" },
  { name: "Twitter X", icon: <FaXTwitter />,       url: "https://x.com/aqsa_shah111?t=T1skjfe5yl632BItutSK6w&s=09",                                   gradient: "135deg, #000000, #1a1a1a",  border: "rgba(255,255,255,0.2)" },
  { name: "YouTube",   icon: <FaYoutube />,        url: "https://youtube.com/@whispers_of_life_1?feature=shared",                                      gradient: "135deg, #ff0000, #cc0000",  border: "rgba(255,0,0,0.4)" },
  { name: "TikTok",    icon: <FaTiktok />,         url: "https://www.tiktok.com/@sindhi_girll2?_t=ZS-8ywvWrpSagb&_r=1",                                gradient: "135deg, #010101, #69c9d0",  border: "rgba(105,201,208,0.4)" },
  { name: "Discord",   icon: <FaDiscord />,        url: "https://discord.gg/aqsashah",                                                                 gradient: "135deg, #5865f2, #4752c4",  border: "rgba(88,101,242,0.4)" },
  { name: "Snapchat",  icon: <FaSnapchatGhost />,  url: "https://www.snapchat.com/add/chokri_sindhi?share_id=Q6DIr10ysmk&locale=en-GB",                gradient: "135deg, #fffc00, #f5e800",  border: "rgba(255,252,0,0.4)" },
  { name: "Telegram",  icon: <FaTelegramPlane />,  url: "https://t.me/yourusername",                                                                   gradient: "135deg, #0088cc, #006699",  border: "rgba(0,136,204,0.4)" },
  { name: "Facebook",  icon: <FaFacebook />,       url: "https://facebook.com/yourprofile",                                                            gradient: "135deg, #1877f2, #0d5ab8",  border: "rgba(24,119,242,0.4)" },
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
      <div className="text-center pt-12 pb-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          Let&apos;s Connect
        </motion.h2>
        <p className="text-slate-500 text-sm md:text-base">
          Find me across the internet — always open to talk AI, collab & opportunities
        </p>
      </div>

      <section className="py-8 px-6 sm:px-12 pb-20">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {socialLinks.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 30px ${s.border}`,
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: [-3, 3, -3] }}
              style={{
                animationDuration: `${4 + idx * 0.3}s`,
                background: `linear-gradient(${s.gradient})`,
                border: `1px solid ${s.border}`,
              }}
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl text-white font-bold overflow-hidden flex flex-col items-center justify-center gap-2 transition-all duration-300"
            >
              {/* Glow overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle, ${s.border} 0%, transparent 70%)` }}
              />
              <div className="relative z-10 text-3xl sm:text-4xl drop-shadow">{s.icon}</div>
              <span className="relative z-10 text-xs font-semibold tracking-wide text-center px-2">
                {s.name}
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
