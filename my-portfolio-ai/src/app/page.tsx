"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullMessage =
    "⚡ Warning: Entering this portfolio may cause sudden smiles, and sparks of inspiration.";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullMessage.slice(0, index));
      index++;
      if (index > fullMessage.length) {
        index = 0; // reset loop
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen p-6 md:p-16 ">
      
      {/* Left side image */}
      <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
        <Image
          src="/assets/portfoliohome.svg"
          alt="Hero Illustration"
          width={420}
          height={420}
          className=""
        />
      </div>

      {/* Right side text + button */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
        {/* Typing Text */}
        <h1 className=" md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent leading-snug">
          {displayedText}
          <span className="">
            {showCursor ? "|" : " "}
          </span>
        </h1>

        {/* Centered Button */}
        <Link href="/home">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255,255,255,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-black px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600  font-bold text-lg rounded-full shadow-lg"
          >
            Start Exploring
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
