"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Face API.js",
    "Speech Recognition",
    "Framer Motion",
  ];

  return (
    <main>
      <Navbar />
      <section className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition text-green-700 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
