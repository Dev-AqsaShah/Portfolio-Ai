"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const navLinks = [
  { name: "Home",       href: "/" },
  { name: "About",      href: "/about" },
  { name: "Skills",     href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects",   href: "/projects" },
  { name: "Contact",    href: "/contact" },
  { name: "Assistant",  href: "/assistant" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50"
      style={{
        background: "rgba(5,5,16,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(168,85,247,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white"
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
            A
          </div>
          <span className="font-black text-slate-200 group-hover:text-purple-400 transition text-sm hidden sm:block">
            Aqsa Shah
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-purple-300 transition group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Resume buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a href="/resume" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
            >
              <FaFileAlt /> Resume
            </motion.button>
          </a>
          <a href="/resume" download>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg text-white"
              style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}
            >
              <FaDownload /> Download
            </motion.button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 text-2xl hover:text-purple-400 transition"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Neon bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.5), transparent)" }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full flex flex-col pt-16 px-6 space-y-4 z-50"
            style={{
              background: "rgba(10,10,25,0.97)",
              backdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl text-slate-400 hover:text-purple-400 transition"
            >
              <HiX />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-xl text-slate-300 font-semibold hover:text-purple-300 transition"
                  style={{ border: "1px solid rgba(168,85,247,0.15)", background: "rgba(168,85,247,0.05)" }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <div className="pt-2 space-y-2">
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <button className="w-full py-2.5 rounded-xl text-sm font-bold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition">
                  View Resume
                </button>
              </a>
              <a href="/resume" download>
                <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
                  Download Resume
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
