"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20 px-6 sm:px-12 bg-white">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600">
            Im Aqsa — a passionate developer who blends creativity with
            technology. I build interactive web experiences using React, Next.js,
            and AI tools.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
