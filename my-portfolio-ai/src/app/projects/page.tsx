"use client";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Full Stack Blog website",
      desc: "Blog website where users can upload blogs. ",
      link: "https://m-4-blog-web.vercel.app/",
      images: [
        "/assets/blog1.png",
        "/assets/blog2.png",
        "/assets/blog3.png",
        "/assets/blog4.png",
      ],
    },
    {
      id: 2,
      title: "pixel perfect E-commerce website",
      desc: "E-commerce fully functional with separate Dashboard ",
      link: "https://e-commerce-hackathon-red.vercel.app/",
      images: [
        "/assets/ecom1.png",
        "/assets/ecom2.png",
        "/assets/ecom3.png",
        "/assets/ecom4.png",
      ],
    },
    {
      id: 3,
      title: "AI Assistant Chatbot ",
      desc: "AI assistant Chatbot subject specialist for University Students",
      link: "https://uni-assistant-gewckykaxxnegiatmngrxa.streamlit.app/",
      images: [
        "/assets/uni1.png",
        "/assets/uni2.png",
        "/assets/uni3.png",
        "/assets/uni4.png",
      ],
    },
    {
      id: 4,
      title: "Interactive Portfolio",
      desc: "With Simple UI",
      link: "https://aqsa-shah-portfolio.vercel.app/",
      images: [
        "/assets/port1.png",
        "/assets/port2.png",
        "/assets/port3.png",
        "/assets/port4.png",
      ],
    },
    {
      id: 5,
      title: "AI Portfolio",
      desc: "AI Assistant powered portfolio",
      link: "https://your-portfolio.vercel.app",
      images: [
        "/assets/aiport1.png",
        "/assets/aiport2.png",
        "/assets/aiport3.png",
        "/assets/aiport4.png",
      ],
    },
    {
      id: 6,
      title: "Amazon E-commerce web Clone",
      desc: "E-commerce clone, pixel perfect UI",
      link: "https://web-clone-coral.vercel.app/",
      images: [
        "/assets/amazon1.png",
        "/assets/amazon2.png",
        "/assets/amazon3.png",
        "/assets/amazon4.png",
      ],
    },
  ];

  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev + 1 < (activeImages?.length || 0) ? prev + 1 : 0
    );
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : (activeImages?.length || 0) - 1
    );

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Top Purple Banner with animated lines */}
      <div className="mt-16 bg-purple-600 text-black py-3 text-center text-lg font-bold shadow-md relative overflow-hidden">
        
        {/* 🔹 Top animated line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
        />

        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          className="inline-block whitespace-nowrap"
        >
          YOU ARE IN MY PROJECTS
        </motion.span>

        {/* 🔹 Bottom animated line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
        />
      </div>

      {/* Timeline */}
      <section className="relative py-16 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto relative">
          {/* Purple center line */}
          <div className="absolute left-1/2 top-0 w-1 bg-purple-500 h-full transform -translate-x-1/2"></div>

          {/* Project Cards */}
          {projects.map((p, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={p.id}
                initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`mb-16 flex items-center w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative border-4 bg-purple-800 text-purple-300 p-6 w-full sm:w-5/12 shadow-lg ${
                    isLeft ? "mr-auto" : "ml-auto"
                  } border-2 border-transparent bg-clip-padding`}
                  style={{
                    borderImage: "linear-gradient(45deg, #a855f7, #ec4899) 1",
                    boxShadow: "30px 30px 30px rgba(168,85,247,0.5)",
                  }}
                >
                  {/* Dot on timeline */}
                  <span
                    className="absolute top-6 w-5 h-5 rounded-full bg-purple-600 border-4 border-white"
                    style={{
                      left: isLeft ? "calc(100% + 0.6rem)" : "auto",
                      right: isLeft ? "auto" : "calc(100% + 0.6rem)",
                    }}
                  ></span>

                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="mb-4 opacity-90">{p.desc}</p>

                  <div className="flex gap-3">
                    {/* View Live Button */}
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-purple-900 inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-purple-900 shadow-lg hover:shadow-purple-500/50 transition"
                    >
                      View Live
                    </motion.a>

                    {/* View Images Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setActiveImages(p.images);
                        setCurrentIndex(0);
                      }}
                      className="border-2 border-purple-900 text-purple-900 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold shadow-lg hover:shadow-pink-500/50 transition"
                    >
                      View Images
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Image Slider Overlay */}
      <AnimatePresence>
        {activeImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50 p-4"
          >
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={() => setActiveImages(null)}
            >
              <FaTimes />
            </button>

            <div className="relative w-full max-w-3xl">
              <Image
                src={activeImages[currentIndex]}
                alt="Project"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                priority
              />
              <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                onClick={prevImage}
              >
                <FaArrowLeft />
              </button>
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
                onClick={nextImage}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}