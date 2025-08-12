/* eslint-disable prefer-const */
"use client";

import { useState, useCallback } from "react";
import FaceDetection from "@/components/FaceDetection";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  type Phase = "idle" | "scanning" | "voice";
  const [phase, setPhase] = useState<Phase>("idle");
  const [speaking, setSpeaking] = useState(false);
  const router = useRouter();

  const welcomeText =
    "Welcome to my personal portfolio, where technology meets creativity.";

  const playWelcome = useCallback(async () => {
    try {
      const res = await fetch("/welcome.mp3", { method: "HEAD" });
      if (res.ok) {
        const a = new Audio("/welcome.mp3");
        setSpeaking(true);
        a.onended = () => {
          setSpeaking(false);
          router.push("/home");
        };
        await a.play().catch((err) => console.warn(err));
        return;
      }
    } catch {}

    if (!("speechSynthesis" in window)) {
      router.push("/home");
      return;
    }
    const synth = window.speechSynthesis;
    const speakNow = (voices: SpeechSynthesisVoice[]) => {
      const femaleKeywords = [
        "female",
        "zira",
        "samantha",
        "kendra",
        "victoria",
        "amy",
        "nora",
        "google",
      ];
      let voice =
        voices.find((v) =>
          femaleKeywords.some((k) => v.name.toLowerCase().includes(k))
        ) ||
        voices.find((v) => v.lang.toLowerCase().startsWith("en")) ||
        voices[0];

      const u = new SpeechSynthesisUtterance(welcomeText);
      if (voice) u.voice = voice;
      u.lang = "en-US";
      u.rate = 1;
      u.pitch = 1.05;
      u.onstart = () => setSpeaking(true);
      u.onend = () => {
        setSpeaking(false);
        router.push("/home");
      };
      synth.speak(u);
    };

    const voices = synth.getVoices();
    if (voices.length === 0) {
      synth.onvoiceschanged = () => {
        speakNow(synth.getVoices());
        synth.onvoiceschanged = null;
      };
    } else {
      speakNow(voices);
    }
  }, [router]);

  const handleDetected = useCallback(() => {
    setPhase("voice");
    setTimeout(() => {
      playWelcome();
    }, 200);
  }, [playWelcome]);

  return (
    <main className="min-h-screen dark:bg-gray-900 flex items-center justify-center">
      {phase === "idle" && (
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-green-700 mb-6"
          >
            Welcome To My Portfolio
          </motion.h1>
          <motion.button
            onClick={() => setPhase("scanning")}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-green-600 text-white rounded-full shadow-lg"
          >
            Start Camera
          </motion.button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Click to start camera. Face will be detected, then camera will close
            and a welcome message will play.
          </p>
        </div>
      )}

      {phase === "scanning" && (
        <div className="w-full flex items-center justify-center p-4">
          <FaceDetection onDetected={handleDetected} />
        </div>
      )}

      {phase === "voice" && (
        <div className="text-center px-6">
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
            Processing... Playing welcome message.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {speaking ? "Speaking..." : "Preparing audio..."}
          </p>
        </div>
      )}
    </main>
  );
}
