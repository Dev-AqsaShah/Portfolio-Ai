/* eslint-disable prefer-const */
"use client";

import { useState, useCallback } from "react";
import FaceDetection from "@/components/FaceDetection";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  type Phase = "idle" | "scanning" | "voice" | "home";
  const [phase, setPhase] = useState<Phase>("idle");
  const [speaking, setSpeaking] = useState(false);
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
          setPhase("home");
        };
        await a.play().catch((err) => console.warn(err));
        return;
      }
    } catch {}

    if (!("speechSynthesis" in window)) {
      setPhase("home");
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
        setPhase("home");
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
  }, []);

  const handleDetected = useCallback(() => {
    setPhase("voice");
    setTimeout(() => {
      playWelcome();
    }, 200);
  }, [playWelcome]);

  const handleStartClick = () => {
    setPhase("scanning");
  };

  return (
    <main className="min-h-screen dark:bg-gray-900 flex items-center justify-center">
      {phase === "idle" && (
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold text-green-700 mb-6"
          >
            Wellcome To My Portfolio
          </motion.h1>
          <motion.button
            onClick={handleStartClick}
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

      {phase === "home" && (
        <div className="text-center px-6">
          <Image
            src="/assets/profile.jpg"
            alt="profile"
            width={128}
            height={128}
            className="rounded-full mx-auto shadow-lg border-4 border-white mb-4 object-cover"
          />
          <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-gray-800 dark:text-white"
          >
            Aqsa Shah
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg mx-auto"
          >
            Welcome to my personal portfolio — where{" "}
            <span className="font-semibold text-green-600 dark:text-green-300">
              technology
            </span>{" "}
            meets{" "}
            <span className="font-semibold text-green-600 dark:text-green-300">
              creativity
            </span>
            .
          </motion.p>

          <div className="mt-6 flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-4 py-2 bg-green-600 text-white rounded-full"
            >
              View Projects
            </Link>
            <button
              onClick={() => {
                setPhase("scanning");
              }}
              className="px-4 py-2 bg-white border rounded-full"
            >
              Scan Again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
