import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap');

        .about-section { font-family: 'DM Sans', sans-serif; }

        .about-heading {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .about-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: #a78bfa;
        }

        /* Grid visible at top, fades out — same as Hero */
        .about-grid-svg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* Image card */
        .about-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(139,92,246,0.18);
          box-shadow: 0 0 0 1px rgba(139,92,246,0.06) inset, 0 24px 60px rgba(0,0,0,0.5);
        }
        .about-img-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(10,10,20,0.7) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Info cards */
        .info-card {
          background: rgba(15,15,26,0.7);
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 18px;
          padding: 24px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
        }
        .info-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
          pointer-events: none;
        }
        .info-card:hover {
          border-color: rgba(139,92,246,0.35);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.08);
        }

        .info-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1));
          border: 1px solid rgba(139,92,246,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 1.2rem;
          color: #a78bfa;
        }

        /* Decorative doodles — same style as Hero */
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-med  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .doodle-a { animation: float-slow 7s ease-in-out infinite; }
        .doodle-b { animation: float-med  5s ease-in-out infinite; }

        /* Divider line between paragraphs */
        .text-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(139,92,246,0.3), transparent);
          margin: 20px 0;
        }
      `}</style>

      {/* ── Background grid — fades from top like Hero ── */}
      <div className="about-grid-svg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="aboutGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0.6" />
              <stop offset="40%"  stopColor="white" stopOpacity="0.15" />
              <stop offset="75%"  stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="aboutGridMask">
              <rect width="100%" height="100%" fill="url(#aboutGridFade)" />
            </mask>
          </defs>
          <g mask="url(#aboutGridMask)">
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

      {/* ── Doodle: cross — top left ── */}
      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "6%", left: "2%", opacity: 0.16, zIndex: 1 }}
        width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2"  x2="14" y2="26" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2"  y1="14" x2="26" y2="14" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* ── Doodle: scribble circle — top right ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "4%", right: "3%", opacity: 0.14, zIndex: 1 }}
        width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path d="M36 8 C56 6,66 22,64 40 C62 58,46 68,28 64 C10 60,2 44,6 26 C10 10,22 6,36 8 Z"
          stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M36 18 C52 16,60 30,58 44 C56 58,44 66,30 62 C16 58,10 46,14 32 C18 20,26 16,36 18 Z"
          stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>

      {/* ── Doodle: squiggly lines — bottom right ── */}
      <svg className="doodle-b absolute pointer-events-none"
        style={{ bottom: "8%", right: "2%", opacity: 0.1, zIndex: 1 }}
        width="60" height="32" viewBox="0 0 60 32" fill="none">
        <path d="M4 6 Q30 2 56 6"   stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16 Q32 12 52 16" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 26 Q30 22 56 26" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* ── Atmospheric glow ── */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", right: "-5%", width: "400px", height: "400px", zIndex: 0,
        background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="about-section container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Section heading ── */}
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
              background: "linear-gradient(90deg, transparent, #7c3aed)",
            }} />
            <span className="about-section-tag">Get to know me</span>
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, #7c3aed, transparent)",
            }} />
          </div>
          <h2 className="about-heading text-4xl md:text-5xl text-white mb-4">
            About <span style={{
              background: "linear-gradient(135deg, #a78bfa, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Me</span>
          </h2>
          <p style={{
            color: "rgba(200,200,220,0.5)",
            fontWeight: 300,
            fontSize: "0.95rem",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>
            Discover more about my journey, skills, and passion for web development
          </p>
        </motion.div>

        {/* ── Image + Content ── */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="about-img-wrap w-full" style={{ aspectRatio: "4/5", maxWidth: "420px" }}>
              <img
                src={assets.profileImg}
                alt="Jit Mondal"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* My Journey heading */}
            <div className="flex items-center gap-3">
              <span style={{
                display: "inline-block", width: "20px", height: "1px",
                background: "linear-gradient(90deg, #7c3aed, #ec4899)",
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "1.45rem",
                color: "#a78bfa",
              }}>My Journey</span>
            </div>

            {/* Para 1 */}
            <p style={{
              color: "rgba(200,200,220,0.6)",
              fontWeight: 300,
              lineHeight: 1.85,
              fontSize: "0.95rem",
            }}>
              I'm an IT student and an aspiring full-stack developer who enjoys building modern and
              scalable web applications. My journey into development started with learning core
              programming concepts and Java, which gradually led me to explore full-stack development
              using React, Spring Boot, and PostgreSQL.
            </p>

            <div className="text-divider" />

            {/* Para 2 */}
            <p style={{
              color: "rgba(200,200,220,0.6)",
              fontWeight: 300,
              lineHeight: 1.85,
              fontSize: "0.95rem",
            }}>
              Outside of coursework, I actively improve my problem-solving skills by practicing
              Data Structures and Algorithms while continuing to explore new technologies. I'm
              naturally curious, consistent in learning, and motivated to grow into a software
              engineer who builds meaningful, impactful solutions.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {aboutInfo.map((data, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-card-icon">
                    <data.icon />
                  </div>
                  <h4 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#fff",
                    marginBottom: "8px",
                    letterSpacing: "-0.01em",
                  }}>
                    {data.title}
                  </h4>
                  <p style={{
                    color: "rgba(200,200,220,0.55)",
                    fontSize: "0.82rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}>
                    {data.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;