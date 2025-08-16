"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import ProjectsPage from "@/app/projects/page";
import ContactPage from "@/app/contact/page";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Lets scroll to explore more creativityyyyyy";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1000);
        }
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-10">
        
        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start justify-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-purple-800">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-4 text-purple-300 dark:text-gray-300 text-base sm:text-lg">
            Im Aqsa Shah — slightly{" "}
            <span className="font-semibold text-purple-600">WEIRD</span>{" "}
            mostly{" "}
            <span className="font-semibold text-purple-600">BRILLIANT</span>.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                window.open("https://dev-aqsashah-portfolio-assistant-app-3jykbz.streamlit.app/", "_blank")
              }
              className="px-6 py-3 bg-purple-700 text-purple-300 rounded-full shadow-lg hover:bg-purple-400 hover:text-purple-800 transition-transform hover:scale-105"
            >
              Portfolio Assistant
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mt-6 sm:mt-10 md:mt-0"
        >
          <Image
            src="/assets/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full border-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 shadow-[0_0_200px_20px_rgba(168,85,247,0.7)] object-cover"
          />
        </motion.div>
      </section>

      {/* IMPORTED SECTIONS */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        custom={0.1}
        className="min-h-screen"
      >
        <AboutPage />
      </motion.section>

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        custom={0.2}
        className="min-h-screen"
      >
        <SkillsPage />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        custom={0.3}
        className="min-h-screen"
      >
        <ProjectsPage />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
        custom={0.4}
        className="min-h-screen"
      >
        <ContactPage />
      </motion.section>
    </main>
  );
}
