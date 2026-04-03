"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";

const experiences = [
  {
    type: "work",
    company: "3PL Dynamics",
    role: "React Native Developer Intern",
    duration: "3 Months",
    location: "Pakistan",
    description:
      "Built cross-platform mobile applications for a logistics & 3PL management company. Developed mobile apps used for tracking, order management & field operations — shipped for Android, iOS & Web using a single codebase.",
    achievements: [
      "Built the 3PL Dynamics mobile app from scratch using React Native & Expo",
      "Implemented cross-platform compatibility (Android, iOS, Web)",
      "Used TypeScript throughout for type-safe code",
      "Collaborated with a team in an agile environment",
    ],
    tech: ["React Native", "Expo", "TypeScript", "JavaScript"],
    github: "https://github.com/Dev-AqsaShah/React-Native-Expo",
    color: "from-purple-500 to-cyan-500",
    iconColor: "rgba(168,85,247,0.5)",
    hasCertificate: true,
  },
];

const education = [
  {
    degree: "Bachelor of Science — Computer Science",
    institute: "University of Sindh, Jamshoro",
    duration: "2nd Year (In Progress)",
    status: "Ongoing",
    color: "from-pink-500 to-purple-500",
  },
  {
    degree: "Cloud Applied Generative AI Engineering",
    institute: "Governor IT Initiative & PIAIC",
    duration: "Ongoing",
    status: "Diploma",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#050510] overflow-hidden">
      {/* Banner */}
      <div className="w-full py-3 overflow-hidden relative"
        style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.4), rgba(88,28,135,0.8), rgba(6,182,212,0.4))" }}>
        <div className="absolute inset-0 border-y border-cyan-500/30" />
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="inline-block whitespace-nowrap font-bold text-cyan-200 tracking-[0.3em] text-sm"
        >
          ✦ EXPERIENCE ✦ INTERNSHIP ✦ EDUCATION ✦ EXPERIENCE ✦ INTERNSHIP ✦ EDUCATION ✦
        </motion.span>
      </div>

      {/* Title */}
      <div className="text-center pt-12 pb-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black grad-text mb-3"
        >
          Experience & Education
        </motion.h2>
        <p className="text-slate-500 text-sm md:text-base">
          Real-world work experience & academic background
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">

        {/* Work Experience */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <MdWork className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-bold text-slate-200">Work Experience</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-500/40 to-transparent" />
          </motion.div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,85,247,0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 40px rgba(168,85,247,0.1)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  {/* Role */}
                  <h4 className="text-xl md:text-2xl font-black text-slate-100">{exp.role}</h4>
                  <div className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-sm text-slate-500 md:text-right">
                  <span className="flex items-center gap-1.5 md:justify-end">
                    <FaCalendarAlt className="text-purple-500" /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 md:justify-end">
                    <FaMapMarkerAlt className="text-cyan-500" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-5">{exp.description}</p>

              {/* Achievements */}
              <ul className="space-y-2 mb-5">
                {exp.achievements.map((a, ai) => (
                  <li key={ai} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {exp.tech.map((t) => (
                  <span key={t} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-purple-500/30 text-purple-300 bg-purple-500/10">
                    {t === "React Native" && <TbBrandReactNative />}
                    {t === "Expo" && <SiExpo />}
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                <a href={exp.github} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition"
                  >
                    <FaGithub /> View on GitHub
                  </motion.button>
                </a>
              </div>

              {/* Certificate section */}
              {exp.hasCertificate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-purple-500/20"
                >
                  <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FaExternalLinkAlt className="text-purple-500" />
                    Internship Certificate
                  </h5>
                  <div
                    className="w-full rounded-xl overflow-hidden flex items-center justify-center py-12"
                    style={{
                      background: "rgba(168,85,247,0.05)",
                      border: "1px dashed rgba(168,85,247,0.3)",
                    }}
                  >
                    {/* Replace the div below with an <Image> tag once you add certificate to /public/assets/certificate.jpg */}
                    <div className="text-center space-y-2">
                      <div className="text-4xl">📜</div>
                      <p className="text-slate-500 text-sm">3PL Dynamics Internship Certificate</p>
                      <p className="text-slate-600 text-xs">Add certificate image to /public/assets/certificate.jpg</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </section>

        {/* Education */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <MdSchool className="text-cyan-400 text-2xl" />
            <h3 className="text-xl font-bold text-slate-200">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(6,182,212,0.15)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className={`w-1 self-stretch rounded-full bg-gradient-to-b ${edu.color} flex-shrink-0`} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-bold text-slate-200">{edu.degree}</h4>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${edu.color} text-white w-fit`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-0.5">{edu.institute}</p>
                  <p className="text-slate-600 text-xs mt-1">{edu.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
