"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-center text-center p-6 max-w-2xl mx-auto">
      {/* GIF Image */}
      <motion.img
        src="/assets/innovation.gif"
        alt="Aqsa Animation"
        className="w-60 h-60 object-contain mb-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Unique Intro */}
      <motion.h2
        className="text-2xl font-bold mb-2 text-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Hey, Im Aqsa Shah 👋
      </motion.h2>

      <motion.p
        className="text-gray-700 text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        A passionate creator who turns imagination into interactive experiences.
        With a blend of creativity and code, I bring ideas to life—pixel by
        pixel, frame by frame.
      </motion.p>

      {/* Details Button */}
      <motion.button
        className="px-5 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
        onClick={() => setShowDetails(!showDetails)}
        whileTap={{ scale: 0.95 }}
      >
        {showDetails ? "Hide Details" : "Details"}
      </motion.button>

      {/* Details Section */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md text-left w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p><strong>Full Name:</strong> Aqsa Shah</p>
            <p><strong>Profession:</strong> IT Student & Creative Developer</p>
            <p><strong>Skills:</strong> TypeScript, Next.js, Tailwind CSS, ShadCN, Git, Docker</p>
            <p><strong>Passion:</strong> Creating engaging and animated web experiences</p>
            <p><strong>Fun Fact:</strong> I can turn even the simplest idea into something visually stunning 🚀</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
