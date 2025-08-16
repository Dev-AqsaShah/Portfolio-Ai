"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white relative overflow-hidden">
      
      {/* Animated Top Line */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center space-y-6">
        
        {/* Floating Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -5, 0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-2xl sm:text-3xl font-bold tracking-wide text-center"
        >
From Concept to Pixel Perfect
        </motion.h2>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-24 h-1 bg-purple-400 rounded-full"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-sm text-white text-center"
        >
          © {new Date().getFullYear()} My Portfolio. Designed & Built with AQSA SHAH 💜
        </motion.p>
      </div>
    </footer>
  );
}
