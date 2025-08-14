/* eslint-disable prefer-const */
"use client";

import { useState, useCallback, useRef } from "react";
import FaceDetection from "@/components/FaceDetection";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  type Phase = "idle" | "scanning" | "voice";
  const [phase, setPhase] = useState<Phase>("idle");
  const [speaking, setSpeaking] = useState(false);
  const hasSpokenRef = useRef(false); // prevent multiple plays
  const router = useRouter();

  const welcomeText =
    "Welcome to a world where code and creativity unite - every pixel has a purpose - and every click takes you deeper into my world of innovation.";

  const playWelcome = useCallback(async () => {
    if (hasSpokenRef.current) return; // block repeated calls
    hasSpokenRef.current = true;

    const goHome = () => {
      router.push("/home");
    };

    try {
      const res = await fetch("/welcome.mp3", { method: "HEAD" });
      if (res.ok) {
        const a = new Audio("/welcome.mp3");
        setSpeaking(true);
        a.onended = () => {
          setSpeaking(false);
          goHome();
        };
        await a.play().catch((err) => console.warn(err));
        return;
      }
    } catch {}

    if (!("speechSynthesis" in window)) {
      goHome();
      return;
    }

    const synth = window.speechSynthesis;
    const speakNow = (voices: SpeechSynthesisVoice[]) => {
      if (voices.length === 0) return;

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
        goHome();
      };
      synth.speak(u);
    };

    const voices = synth.getVoices();
    if (voices.length === 0) {
      synth.onvoiceschanged = () => {
        if (!hasSpokenRef.current) {
          hasSpokenRef.current = true;
          speakNow(synth.getVoices());
        }
        synth.onvoiceschanged = null; // remove listener
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
    <main className="min-h-screen flex items-center justify-center">
      {phase === "idle" && (
        <div className="text-center px-6">
          {/* Animated Heading with Continuous Motion */}
          <motion.h1
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-clip-text text-transparent animate-gradient-move"
          >
            Welcome To My Portfolio
          </motion.h1>

          {/* Start Camera Button */}
          <motion.button
            onClick={() => setPhase("scanning")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(168,85,247,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-4 bg-purple-600 text-black rounded-full shadow-indigo-400 border-2 border-black hover:bg-purple-700 animate-pulse-slow"
          >
            Start Camera
          </motion.button>

          {/* Attractive Text */}
          <p className="mt-4 text-sm text-purple-400 font-bold dark:text-gray-300 max-w-md mx-auto italic">
            Let the camera greet you in style. <br />
            Your presence will unlock the next step. <br />
            Get ready for an experience thats uniquely yours.
          </p>

          <style jsx>{`
            @keyframes gradientMove {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            .animate-gradient-move {
              background-size: 300% 300%;
              animation: gradientMove 6s ease infinite;
            }
            @keyframes pulseSlow {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.03);
              }
              100% {
                transform: scale(1);
              }
            }
            .animate-pulse-slow {
              animation: pulseSlow 2.5s ease-in-out infinite;
            }
          `}</style>
        </div>
      )}

      {phase === "scanning" && (
        <div className="w-full flex items-center justify-center p-4">
          <FaceDetection onDetected={handleDetected} />
        </div>
      )}

      {phase === "voice" && (
        <div className="text-center px-6">
          <p className="text-xl text-purple-700  mb-4">
            Processing... Playing welcome message.
          </p>
          <p className="text-sm text-purple-500 ">
            {speaking ? "Speaking..." : "Preparing audio..."}
          </p>
        </div>
      )}
    </main>
  );
}
