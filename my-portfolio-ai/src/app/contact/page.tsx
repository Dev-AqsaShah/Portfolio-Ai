"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  const socialLinks = [
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA==", color: "from-pink-500 to-yellow-500" },
    { name: "Snapchat", icon: <FaSnapchatGhost />, url: "https://www.snapchat.com/add/chokri_sindhi?share_id=Q6DIr10ysmk&locale=en-GB", color: "from-yellow-400 to-yellow-300" },
    { name: "Gmail", icon: <FaEnvelope />, url: "aqsashah000000@gmail.com", color: "from-red-500 to-orange-500" },
    { name: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@sindhi_girll2?_t=ZS-8ywvWrpSagb&_r=1", color: "from-gray-900 to-pink-600" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com/@whispers_of_life_1?feature=shared", color: "from-red-600 to-red-400" },
    { name: "Discord", icon: <FaDiscord />, url: "https://discord.gg/aqsashah", color: "from-indigo-500 to-blue-500" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "www.linkedin.com/in/aqsa-shah-", color: "from-blue-600 to-blue-400" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "www.linkedin.com/in/aqsa-shah-", color: "from-green-500 to-green-400" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Dev-AqsaShah", color: "from-gray-800 to-gray-700" },
    { name: "Twitter (X)", icon: <FaXTwitter />, url: "https://x.com/aqsa_shah111?t=T1skjfe5yl632BItutSK6w&s=09", color: "from-black to-gray-800" },
    { name: "Telegram", icon: <FaTelegramPlane />, url: "https://github.com/Dev-AqsaShah", color: "from-blue-400 to-sky-500" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://github.com/Dev-AqsaShah", color: "from-blue-700 to-blue-500" },
  ];

  const floatingRotation = {
    animate: {
      rotate: [0, 3, -3, 0],
      y: [0, -6, 0, 6, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <main>
      <Navbar />

      {/* Top banner with animated lines */}
      <div className="mt-16 bg-purple-600 text-black py-3 text-center text-lg font-semibold shadow-md relative overflow-hidden">
        
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
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="inline-block whitespace-nowrap"
        >
          LET&apos;S CONNECT • FIND ME ON SOCIALS
        </motion.span>

        {/* 🔹 Bottom animated line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
        />
      </div>

      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              animate={floatingRotation}
              className={`group relative overflow-hidden w-32 h-32 sm:w-36 sm:h-36 rounded-2xl text-white font-extrabold shadow-lg bg-gradient-to-r ${social.color}`}
            >
              {/* Glow ring */}
              <span className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-2xl opacity-0 group-hover:opacity-100 transition"></span>

              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="text-3xl sm:text-4xl mb-1 drop-shadow">{social.icon}</div>
                <span className="text-xs sm:text-sm font-medium tracking-wide">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
