"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import ChatWidget from "./ChatWidget";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[340px] sm:w-[380px] origin-bottom-right"
          >
            <ChatWidget compact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #a855f7, #06b6d4)",
          boxShadow: open
            ? "0 0 30px rgba(168,85,247,0.7), 0 0 60px rgba(6,182,212,0.3)"
            : "0 0 20px rgba(168,85,247,0.5)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)", zIndex: -1 }}
          />
        )}
      </motion.button>

      {/* Tooltip */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 right-0 whitespace-nowrap text-xs text-slate-400 bg-[#0a0a1f] border border-purple-500/20 px-3 py-1.5 rounded-xl pointer-events-none"
        >
          Ask about Aqsa
        </motion.div>
      )}
    </div>
  );
}
