"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ChatBubble() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="whitespace-nowrap text-xs text-slate-400 bg-[#0a0a1f] border border-purple-500/20 px-3 py-1.5 rounded-xl pointer-events-none"
      >
        Ask about Aqsa
      </motion.div>

      {/* Button */}
      <Link href="/assistant">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(168,85,247,0.7), 0 0 60px rgba(6,182,212,0.3)" }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
            boxShadow: "0 0 20px rgba(168,85,247,0.5)",
          }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)", zIndex: -1 }}
          />
          <Sparkles className="w-6 h-6" />
        </motion.button>
      </Link>
    </div>
  );
}
