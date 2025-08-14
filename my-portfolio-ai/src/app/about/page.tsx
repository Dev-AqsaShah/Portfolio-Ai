"use client";
import React from "react";
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
];

export default function About() {
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

          if (isLast) {
            style.marginTop = "1.5rem"; // thoda upar kiya last box ko
          }

          return (
            <motion.div
              key={index}
              style={style}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -8, 0], // floating animation
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.15, // stagger effect
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className={`relative w-36 sm:w-40 h-14 sm:h-16 flex items-center justify-center 
                rounded-full cursor-pointer overflow-hidden group 
                border-2 border-black shadow-[0_0_20px_5px_rgba(168,85,247,0.8)] 
                bg-purple-800 text-black text-sm sm:text-base
                hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500
                transition-all duration-300 
                ${isLast ? "col-start-3" : ""}`} // move last box to right column
            >
              {/* Key */}
              <span className="font-semibold group-hover:opacity-0 transition-opacity duration-300 text-center px-2">
                {item.key}
              </span>
              {/* Value on hover */}
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-center px-2">
                {item.value}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
