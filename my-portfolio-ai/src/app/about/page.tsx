

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const aboutData = [
  { key: "Full Name", value: "Aqsa Shah" },
  { key: "Horoscope", value: "Virgo" },
  { key: "Age", value: "22 years" },
  { key: "Non-Tech Hobby", value: "Walking, Vloging" },
  { key: "Role", value: "Frontend Developer" },
  { key: "Location", value: "Hyderabad, Sindh" },
  { key: "Languages", value: "English, Urdu, Sindhi" },
  { key: "Bachelors", value: "Computer Science" },
  { key: "Institute", value: "University of Sindh Jamshoro" },
  { key: "Diploma", value: "Governor IT Initiative & PIAIC" },
  { key: "Experience", value: "2 years" },
  { key: "Currently Learning", value: "OpenAI Agents SDK" },
  { key: "Future Goal", value: "Full-stack AI Developer" },
  { key: "After SDK Goal", value: "MCP Server" },
  { key: "working on", value: "n8n automation" },
];

// random delay function for blink
const getRandomDelay = () => Math.random() * 2;

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleBoxClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="md:p-12 min-h-screen text-black">
      {/* Top Purple Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-screen bg-purple-600 text-center py-3"
      >
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
          }}
          className="inline-block whitespace-nowrap font-semibold"
        >
          YOU ARE IN ABOUT SECTION
        </motion.span>
      </motion.div>

      {/* Zigzag Boxes */}
      <div className="grid grid-cols-3 gap-4 justify-items-center mt-8">
        {aboutData.map((item, index) => {
          const isLast = index === aboutData.length - 1;

          const style: React.CSSProperties = {
            marginTop: index % 2 === 1 ? "3rem" : "0", // shift odd boxes down
          };

          return (
            <motion.div
              key={index}
              style={style}
              className={`relative w-36 sm:w-40 h-14 sm:h-16 flex items-center justify-center 
                rounded-full cursor-pointer overflow-hidden group 
                border-2 border-black shadow-[0_0_20px_5px_rgba(168,85,247,0.8)] 
                bg-purple-800 text-black text-sm sm:text-base
                hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500
                transition-all duration-300 
                ${isLast ? "col-start-3" : ""}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: [1, 0.4, 1] // blink effect
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: getRandomDelay() 
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              onClick={() => handleBoxClick(index)}
            >
              {/* Key */}
              <span
                className={`font-semibold transition-opacity duration-300 text-center px-2
                  ${
                    activeIndex === index
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-0"
                  }`}
              >
                {item.key}
              </span>

              {/* Value on hover / click */}
              <span
                className={`absolute transition-opacity duration-300 font-bold text-center text-white px-2
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
              >
                {item.value}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
