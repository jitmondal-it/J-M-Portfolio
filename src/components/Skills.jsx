import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111111 0%, #1a1a1a 50%, #111111 100%)" }}
    >
      <style>{`
                .skills-section { font-family: 'Saira', sans-serif; }

        .skills-heading {
          font-family: 'Saira', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .skills-tag-label {
          font-family: 'Saira', sans-serif;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: #c4b5fd;
        }

        /* Skill card */
        .skill-card {
          position: relative;
          background: rgba(26, 26, 26, 0.75);
          border: 1px solid rgba(139, 92, 246, 0.14);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.35s ease;
          backdrop-filter: blur(8px);
          overflow: hidden;
          cursor: pointer;
        }
        /* top glow line on card */
        .skill-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        /* bottom left corner accent */
        .skill-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 60px; height: 60px;
          background: radial-gradient(circle at bottom left, rgba(124,58,237,0.12), transparent 70%);
          pointer-events: none;
        }
        .skill-card:hover {
          border-color: rgba(139, 92, 246, 0.32);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.08);
        }
        .skill-card:hover::before {
          opacity: 1;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent);
        }

        /* Icon box */
        .skill-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1));
          border: 1px solid rgba(139,92,246,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c4b5fd;
          transition: all 0.3s ease;
        }
        .skill-card:hover .skill-icon-box {
          background: linear-gradient(135deg, rgba(124,58,237,0.32), rgba(236,72,153,0.18));
          border-color: rgba(139,92,246,0.4);
          box-shadow: 0 0 20px rgba(124,58,237,0.2);
        }

        /* Tech tags */
        .tech-tag {
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(200,200,230,0.6);
          background: rgba(139,92,246,0.08);
          border: 1px solid rgba(139,92,246,0.14);
          transition: all 0.2s ease;
        }
        .tech-tag:hover {
          color: #fff;
          background: rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.35);
        }

        /* Doodle floats */
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-med  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .doodle-a { animation: float-slow 7s ease-in-out infinite; }
        .doodle-b { animation: float-med  5s ease-in-out infinite; }
      `}</style>

      {/* ── Background grid: fades top to bottom ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="skillsGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0.55" />
              <stop offset="40%"  stopColor="white" stopOpacity="0.12" />
              <stop offset="75%"  stopColor="white" stopOpacity="0"    />
            </linearGradient>
            <mask id="skillsGridMask">
              <rect width="100%" height="100%" fill="url(#skillsGridFade)" />
            </mask>
          </defs>
          <g mask="url(#skillsGridMask)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line key={`v${i}`}
                x1={`${(i / 25) * 100}%`} y1="0"
                x2={`${(i / 25) * 100}%`} y2="100%"
                stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={`h${i}`}
                x1="0" y1={`${(i / 13) * 100}%`}
                x2="100%" y2={`${(i / 13) * 100}%`}
                stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
            ))}
          </g>
        </svg>
      </div>

      {/* ── Doodles ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "5%", left: "2%", opacity: 0.16, zIndex: 1 }}
        width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2"  x2="14" y2="26" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2"  y1="14" x2="26" y2="14" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "4%", right: "3%", opacity: 0.13, zIndex: 1 }}
        width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 4 L40 38 L4 38 Z"
          stroke="var(--color-pink, #ec4899)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      <svg className="doodle-a absolute pointer-events-none"
        style={{ bottom: "6%", left: "3%", opacity: 0.1, zIndex: 1 }}
        width="60" height="32" viewBox="0 0 60 32" fill="none">
        <path d="M4 6 Q30 2 56 6"   stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16 Q32 12 52 16" stroke="var(--color-purple, #8b5cf6)" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 26 Q30 22 56 26" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* ── Atmospheric glow ── */}
      <div className="absolute pointer-events-none" style={{
        top: "5%", left: "-5%", width: "420px", height: "420px", zIndex: 0,
        background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "0%", right: "-5%", width: "350px", height: "350px", zIndex: 0,
        background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="skills-section container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, transparent, var(--color-purple, #8b5cf6))",
            }} />
            <span className="skills-tag-label">What I work with</span>
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, var(--color-purple, #8b5cf6), transparent)",
            }} />
          </div>
          <h2 className="skills-heading text-4xl md:text-5xl text-white mb-4">
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, #c4b5fd, var(--color-pink, #ec4899))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Skills</span>
          </h2>
          <p style={{
            color: "rgba(200,200,220,0.5)",
            fontWeight: 300,
            fontSize: "0.95rem",
            maxWidth: "420px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>
            Technologies I use to turn ideas into real-world applications
          </p>
        </motion.div>

        {/* ── Skill cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {/* Icon + Title row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="skill-icon-box">
                  <skill.icon size={22} />
                </div>
                <h3 style={{
                  fontFamily: "'Saira', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}>
                  {skill.title}
                </h3>
              </div>

              {/* Thin divider */}
              <div style={{
                height: "1px",
                background: "linear-gradient(90deg, rgba(139,92,246,0.25), transparent)",
                marginBottom: "16px",
              }} />

              {/* Description */}
              <p style={{
                color: "rgba(200,200,220,0.55)",
                fontSize: "0.83rem",
                fontWeight: 300,
                lineHeight: 1.75,
                marginBottom: "18px",
              }}>
                {skill.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
