"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED = [
  "Who is Aqsa Shah?",
  "What are her top AI projects?",
  "What skills does she have?",
  "How can I hire her?",
  "Tell me about her internship",
  "What AI tools does she use?",
];

export default function ChatWidget({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok || !res.body) throw new Error("API error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: accumulated };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please check the API key configuration.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const heightClass = compact ? "h-[420px]" : "h-[520px] md:h-[600px]";

  return (
    <div className={`flex flex-col ${heightClass} rounded-2xl overflow-hidden`}
      style={{
        background: "rgba(5,5,16,0.95)",
        border: "1px solid rgba(168,85,247,0.25)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 60px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.5)",
      }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(168,85,247,0.15)", background: "rgba(168,85,247,0.06)" }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
            <Sparkles className="text-white w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200 text-sm">Aqsa&apos;s AI Assistant</div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={() => setMessages([])}
            className="text-slate-600 hover:text-red-400 transition p-1.5 rounded-lg hover:bg-red-400/10"
            title="Clear chat"
          >
            <FaTrash className="text-xs" />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-5 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))", border: "1px solid rgba(168,85,247,0.3)" }}
            >
              <Sparkles className="text-purple-400 w-8 h-8" />
            </motion.div>
            <div>
              <p className="text-slate-300 font-semibold text-sm">Hi! I know everything about Aqsa 👋</p>
              <p className="text-slate-600 text-xs mt-1">Ask me anything about her skills, projects, or experience</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTED.map((q) => (
                <motion.button
                  key={q}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition text-left"
                >
                  {q}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}>
                      <Sparkles className="text-white w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-tr-sm text-white"
                        : "rounded-tl-sm text-slate-200"
                    }`}
                    style={
                      msg.role === "user"
                        ? { background: "linear-gradient(135deg, #a855f7, #7c3aed)" }
                        : {
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(168,85,247,0.15)",
                          }
                    }
                  >
                    {msg.content || (
                      <span className="flex gap-1.5 items-center h-5">
                        {[0, 1, 2].map((d) => (
                          <motion.span
                            key={d}
                            className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: d * 0.15 }}
                          />
                        ))}
                      </span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}>
                      <FiUser className="text-purple-400 text-xs" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={bottomRef} />
          </>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="px-3 py-3 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(168,85,247,0.12)" }}
      >
        <div className="flex gap-2 items-center rounded-xl px-3 py-2"
          style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" }}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Aqsa..."
            disabled={loading}
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-600 outline-none"
          />
          <motion.button
            type="submit"
            disabled={!input.trim() || loading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition"
            style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)" }}
          >
            <FaPaperPlane className="text-white text-xs" />
          </motion.button>
        </div>
        <p className="text-center text-xs text-slate-700 mt-1.5">Powered by Claude (Anthropic)</p>
      </form>
    </div>
  );
}
