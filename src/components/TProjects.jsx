import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111111 0%, #1a1a1a 50%, #111111 100%)" }}
    >
      <style>{`
        .projects-section { font-family: 'Saira', sans-serif; }

        .projects-tag-label {
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: #c4b5fd;
        }

        .projects-heading {
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .view-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 10px;
          border: 1px solid rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.05);
          color: #c4b5fd;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-decoration: none;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .view-more-btn:hover {
          border-color: rgba(139,92,246,0.7);
          background: rgba(139,92,246,0.14);
          color: #fff;
          transform: translateY(-2px);
        }
        .view-more-btn svg {
          transition: transform 0.3s ease;
        }
        .view-more-btn:hover svg {
          transform: translateX(4px);
        }

        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-med  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .doodle-a { animation: float-slow 7s ease-in-out infinite; }
        .doodle-b { animation: float-med  5s ease-in-out infinite; }
      `}</style>

      {/* ── Background grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="projGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0.55" />
              <stop offset="40%"  stopColor="white" stopOpacity="0.12" />
              <stop offset="75%"  stopColor="white" stopOpacity="0"    />
            </linearGradient>
            <mask id="projGridMask">
              <rect width="100%" height="100%" fill="url(#projGridFade)" />
            </mask>
          </defs>
          <g mask="url(#projGridMask)">
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
      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "5%", left: "2%", opacity: 0.15, zIndex: 1 }}
        width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2"  x2="14" y2="26" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2"  y1="14" x2="26" y2="14" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "4%", right: "3%", opacity: 0.13, zIndex: 1 }}
        width="56" height="110" viewBox="0 0 56 110" fill="none">
        <path d="M38 8 C18 8,18 28,28 38 C38 48,18 55,18 55 C18 55,38 62,28 72 C18 82,18 102,38 102"
          stroke="var(--color-pink, #ec4899)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="doodle-b absolute pointer-events-none"
        style={{ bottom: "6%", right: "2%", opacity: 0.1, zIndex: 1 }}
        width="60" height="32" viewBox="0 0 60 32" fill="none">
        <path d="M4 6 Q30 2 56 6"   stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16 Q32 12 52 16" stroke="var(--color-purple, #8b5cf6)" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 26 Q30 22 56 26" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* ── Glows ── */}
      <div className="absolute pointer-events-none" style={{
        top: "0%", right: "-5%", width: "420px", height: "420px", zIndex: 0,
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "5%", left: "-5%", width: "360px", height: "360px", zIndex: 0,
        background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="projects-section container mx-auto px-8 md:px-16 relative z-10">

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
            <span className="projects-tag-label">What I've built</span>
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, var(--color-purple, #8b5cf6), transparent)",
            }} />
          </div>
          <h2 className="projects-heading text-4xl md:text-5xl text-white mb-4">
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, #c4b5fd, var(--color-pink, #ec4899))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Projects</span>
          </h2>
          <p style={{
            color: "rgba(200,200,220,0.5)",
            fontWeight: 300,
            fontSize: "0.95rem",
            maxWidth: "400px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>
            Explore some of my recent projects and work
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* ── View more ── */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#" className="view-more-btn">
            <span>View More Projects</span>
            <FaArrowRight size={13} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;