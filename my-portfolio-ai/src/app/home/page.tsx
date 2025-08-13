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
    transition: { duration: 0.8, delay }
  })
};

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Lets scroll to explore more creativityyyyyy";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          isDeleting = true;
          setTimeout(() => {}, 1000); // pause before deleting
        }
      } else {
        // Deleting backward
        setDisplayText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
        }
      }
    }, 150); // slower typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen ">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 gap-10">
        
        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 ">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-4 text-purple-300 dark:text-gray-300 text-lg">
            Im Aqsa Shah — slightly{" "}
            <span className="font-semibold text-purple-600 ">
                WEIRD
            </span>{" "}
            mostly{" "}
            <span className="font-semibold text-purple-600 ">
              BRILLIANT
            </span>
            .
          </p>

       <div className="mt-6 flex gap-4 justify-center md:justify-start">
<button
  onClick={() => window.open('https://tumhara-streamlit-link.com', '_blank')}
  className="px-6 py-3 bg-purple-700 text-purple-300  rounded-full shadow-lg hover:bg-purple-400 hover:text-purple-800 transition-transform hover:scale-105"
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
          className="flex justify-center"
        >
          <Image
            src="/assets/profile.jpg"
            alt="Profile"
            width={350}
            height={350}
            className="rounded-full  border-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500  shadow-[0_0_400px_40px_rgba(168,85,247,0.8)] object-cover "
          />
        </motion.div>
      </section>

      {/* IMPORTED SECTIONS WITH SCROLL ANIMATION */}
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
