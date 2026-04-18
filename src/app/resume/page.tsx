"use client";

import React from "react";

export default function ResumePage() {
  const handlePrint = () => window.print();

  return (
    <>
      {/* Print + Responsive CSS */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .resume-root { box-shadow: none !important; border-radius: 0 !important; max-width: 100% !important; }
          .resume-columns { grid-template-columns: 1fr 1fr !important; }
          @page { margin: 0; size: A4; }
        }
        @media (max-width: 640px) {
          .resume-columns { grid-template-columns: 1fr !important; }
          .resume-header-contacts { flex-direction: column; gap: 6px !important; }
          .resume-root { font-size: 12px !important; border-radius: 0 !important; }
          .resume-header { padding: 20px 18px 16px !important; }
          .resume-body { padding: 16px 18px !important; }
          .resume-footer { padding: 8px 18px !important; flex-direction: column; gap: 2px; }
        }
      `}</style>

      {/* Download Button */}
      <div className="no-print flex justify-center pt-8 pb-4 gap-3 flex-wrap px-4">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg,#a855f7,#06b6d4)", boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
        >
          ⬇ Download PDF
        </button>
        <a href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-400 border border-white/10 hover:text-white transition">
          ← Back to Portfolio
        </a>
      </div>

      {/* Resume */}
      <div className="flex justify-center pb-16 px-2 sm:px-4">
        <div
          className="resume-root w-full"
          style={{
            maxWidth: "794px",
            background: "#fff",
            color: "#111",
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontSize: "13px",
            lineHeight: "1.5",
            boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div className="resume-header" style={{ background: "linear-gradient(135deg,#1a0533,#0c1a2e)", padding: "28px 36px 22px", color: "#fff" }}>
            <h1 style={{ fontSize: "28px", fontWeight: 800, margin: 0, letterSpacing: "-0.5px" }}>Aqsa Shah</h1>
            <p style={{ margin: "4px 0 12px", fontSize: "14px", color: "#c4b5fd", fontWeight: 600 }}>
              AI Engineer &amp; Full Stack Developer
            </p>
            <div className="resume-header-contacts" style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px", color: "#cbd5e1" }}>
              <span>📧 aqsashah000000@gmail.com</span>
              <span>🔗 github.com/Dev-AqsaShah</span>
              <span>💼 linkedin.com/in/aqsa-shah-</span>
              <span>📍 Hyderabad, Sindh, Pakistan</span>
            </div>
          </div>

          <div className="resume-body resume-columns" style={{ padding: "24px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px" }}>

            {/* LEFT COLUMN */}
            <div>

              {/* Summary */}
              <Section title="SUMMARY" accent="#a855f7">
                <p style={{ margin: 0, color: "#374151", lineHeight: "1.6" }}>
                  Passionate AI Engineer and Full Stack Developer with hands-on experience building autonomous AI
                  systems, agentic workflows, and production-ready web & mobile applications. Skilled in Claude API,
                  MERN stack, React Native, Docker, and cloud-native tools. Active hackathon builder with 55+ GitHub
                  repositories.
                </p>
              </Section>

              {/* Experience */}
              <Section title="EXPERIENCE" accent="#a855f7">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: "13px", color: "#111" }}>MERN Stack &amp; React Native Intern</p>
                      <p style={{ margin: "1px 0 4px", fontWeight: 600, color: "#7c3aed", fontSize: "12px" }}>3PL Dynamics · Pakistan</p>
                    </div>
                    <span style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", marginLeft: "8px" }}>3 Months</span>
                  </div>
                  <ul style={{ margin: "4px 0 0 14px", padding: 0, color: "#374151", fontSize: "12px" }}>
                    <li>Developed company website using React.js &amp; Node.js</li>
                    <li>Built 3PL Dynamics mobile app (Android + iOS) with React Native &amp; Expo</li>
                    <li>Designed MongoDB schemas for logistics &amp; tracking data</li>
                    <li>Built RESTful APIs with Express.js for mobile and web</li>
                    <li>Delivered real client projects in agile environment</li>
                  </ul>
                </div>
              </Section>

              {/* Projects */}
              <Section title="KEY PROJECTS" accent="#a855f7">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Project
                    title="AI Customer Success Agent"
                    tech="Claude Sonnet 4.6 · FastAPI · Kafka · Kubernetes"
                    desc="Enterprise autonomous AI handling Gmail, WhatsApp & web forms 24/7. <3s response, 99.9% uptime."
                  />
                  <Project
                    title="Autonomous AI Employee"
                    tech="Claude API · Playwright · Docker · PostgreSQL"
                    desc="Self-operating AI that reads emails, posts on social media, generates CEO briefings autonomously."
                  />
                  <Project
                    title="AI Portfolio Assistant"
                    tech="Python · Streamlit · Gemini AI"
                    desc="Conversational AI answering portfolio-scoped questions, deployed live on Streamlit."
                  />
                  <Project
                    title="Full Stack Blog Platform"
                    tech="Next.js · MongoDB · TypeScript · Tailwind"
                    desc="Blog with user auth, rich text editor, dark mode, deployed on Vercel."
                  />
                  <Project
                    title="Pixel Perfect E-commerce"
                    tech="Next.js · Sanity CMS · TypeScript"
                    desc="Full e-commerce store with admin dashboard, product catalog, cart & checkout — live on Vercel."
                  />
                  <Project
                    title="Physical AI & Humanoid Robotics Textbook"
                    tech="Next.js · Python · Anthropic API · OpenAI Agents SDK"
                    desc="Interactive AI educational platform deployed live on Vercel."
                  />
                </div>
              </Section>

            </div>

            {/* RIGHT COLUMN */}
            <div>

              {/* Skills */}
              <Section title="SKILLS" accent="#06b6d4">
                <SkillGroup label="AI & Agents" items={["Claude API", "OpenAI Agents SDK", "Agentic AI", "MCP Protocol", "Streamlit", "FastAPI"]} color="#7c3aed" />
                <SkillGroup label="Frontend" items={["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Sanity CMS"]} color="#db2777" />
                <SkillGroup label="Backend & DB" items={["Node.js", "Express.js", "Python", "FastAPI", "MongoDB", "PostgreSQL"]} color="#0891b2" />
                <SkillGroup label="DevOps & Mobile" items={["Docker", "Kubernetes", "React Native", "Expo", "Vercel", "GitHub"]} color="#16a34a" />
                <SkillGroup label="Core CS" items={["Java", "DSA", "Assembly Language", "C", "OOP", "Software Engineering"]} color="#d97706" />
              </Section>

              {/* Education */}
              <Section title="EDUCATION" accent="#06b6d4">
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <EduItem
                    degree="BS in Computer Science (CS)"
                    institute="University of Sindh, Jamshoro"
                    duration="2nd Year · In Progress"
                    color="#7c3aed"
                  />
                  <EduItem
                    degree="GenAI, Web3 &amp; Metaverse"
                    institute="Governor Sindh Initiative"
                    duration="4th Quarter · Last"
                    color="#0891b2"
                    detail="GenAI · Web3 · Cloud · Smart Contracts · DAOs"
                  />
                  <EduItem
                    degree="AI, Cloud &amp; Blockchain"
                    institute="PIAIC — Presidential Initiative"
                    duration="Quarter 6 of 7 · Ongoing"
                    color="#7c3aed"
                    detail="AI · ML · Cloud · Blockchain · IoT · Data Science"
                  />
                </div>
              </Section>

              {/* Achievements */}
              <Section title="HIGHLIGHTS" accent="#06b6d4">
                <ul style={{ margin: "0 0 0 14px", padding: 0, color: "#374151", fontSize: "12px", lineHeight: "1.8" }}>
                  <li>55+ public GitHub repositories</li>
                  <li>Hackathon finalist — AI Customer Success Agent</li>
                  <li>Built & deployed 10+ full-stack projects</li>
                  <li>Active Anthropic Claude API developer</li>
                  <li>Parallel enrollment in 2 national AI programs</li>
                </ul>
              </Section>

              {/* Languages */}
              <Section title="LANGUAGES" accent="#06b6d4">
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {[["English", "Fluent"], ["Urdu", "Native"], ["Sindhi", "Native"]].map(([lang, level]) => (
                    <div key={lang} style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 700, fontSize: "12px", color: "#111" }}>{lang}</div>
                      <div style={{ fontSize: "11px", color: "#6b7280" }}>{level}</div>
                    </div>
                  ))}
                </div>
              </Section>

            </div>
          </div>

          {/* Footer */}
          <div className="resume-footer" style={{ background: "#f8f7ff", borderTop: "2px solid #ede9fe", padding: "10px 36px", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#6b7280" }}>
            <span>github.com/Dev-AqsaShah · linkedin.com/in/aqsa-shah-</span>
            <span>aqsashah000000@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "1.5px", color: "#111" }}>{title}</span>
        <div style={{ flex: 1, height: "2px", background: accent, borderRadius: "2px", opacity: 0.6 }} />
      </div>
      {children}
    </div>
  );
}

function SkillGroup({ label, items, color }: { label: string; items: string[]; color: string }) {
  return (
    <div style={{ marginBottom: "7px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, color, display: "block", marginBottom: "3px" }}>{label}</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {items.map((s) => (
          <span key={s} style={{
            fontSize: "11px", padding: "1px 7px", borderRadius: "20px",
            background: color + "14", border: `1px solid ${color}40`, color: "#374151"
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Project({ title, tech, desc }: { title: string; tech: string; desc: string }) {
  return (
    <div style={{ borderLeft: "2px solid #a855f740", paddingLeft: "8px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: "12px", color: "#111" }}>{title}</p>
      <p style={{ margin: "1px 0 2px", fontSize: "11px", color: "#7c3aed", fontWeight: 600 }}>{tech}</p>
      <p style={{ margin: 0, fontSize: "11px", color: "#6b7280" }}>{desc}</p>
    </div>
  );
}

function EduItem({ degree, institute, duration, color, detail }: {
  degree: string; institute: string; duration: string; color: string; detail?: string;
}) {
  return (
    <div style={{ borderLeft: `2px solid ${color}60`, paddingLeft: "8px" }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: "12px", color: "#111" }}>{degree}</p>
      <p style={{ margin: "1px 0", fontSize: "12px", color, fontWeight: 600 }}>{institute}</p>
      <p style={{ margin: 0, fontSize: "11px", color: "#6b7280" }}>{duration}</p>
      {detail && <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#9ca3af" }}>{detail}</p>}
    </div>
  );
}
