"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: "Interactive Portfolio", desc: "Face + Voice powered portfolio" },
    { id: 2, title: "Green Gallery Store", desc: "E-commerce hero & UI" },
    { id: 3, title: "Number Guessing Game", desc: "Fun JS game with confetti" },
  ];

  return (
    <main>
      <Navbar />
      <section className="py-20 px-6 sm:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Projects
          </motion.h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
                whileHover={{ y: -6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
