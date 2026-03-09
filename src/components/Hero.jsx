import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #1a1a1a 50%, #111111 100%)",
        fontFamily: "'Saira', sans-serif",
      }}
    >
      <style>{`
                .hero-name {
          font-family: 'Saira', sans-serif;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
        }

        .role-badge {
          font-family: 'Saira', sans-serif;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 1.125rem;
        }

        .glow-border { position: relative; }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: conic-gradient(from 180deg, var(--color-purple, #8b5cf6), var(--color-pink, #ec4899), var(--color-purple, #8b5cf6));
          z-index: -1;
          animation: spin 6s linear infinite;
          opacity: 0.8;
        }
        .glow-border::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: conic-gradient(from 180deg, var(--color-purple, #8b5cf6)33, transparent, var(--color-pink, #ec4899)33, transparent);
          z-index: -2;
          animation: spin 6s linear infinite;
          filter: blur(8px);
        }

        @keyframes spin       { to { transform: rotate(360deg); } }
        @keyframes float-slow { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(3deg)} }
        @keyframes float-med  { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-7px) rotate(-4deg)} }
        @keyframes dash-draw  { to { stroke-dashoffset: 0; } }

        .doodle-a { animation: float-slow 7s ease-in-out infinite; }
        .doodle-b { animation: float-med  5s ease-in-out infinite; }

        .btn-primary {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, var(--color-purple, #8b5cf6), #7c3aed);
          border: none; transition: all 0.3s ease; letter-spacing: 0.05em;
        }
        .btn-primary::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.4s ease;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(124,58,237,0.4); }

        .btn-secondary {
          border: 1px solid rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.05);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease; letter-spacing: 0.05em;
        }
        .btn-secondary:hover {
          border-color: rgba(139,92,246,0.8);
          background: rgba(139,92,246,0.12);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── SVG Grid: bright at top, dissolves to nothing at bottom ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="1"    />
              <stop offset="48%"  stopColor="white" stopOpacity="0.3"  />
              <stop offset="78%"  stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0"    />
            </linearGradient>
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#gridFade)" />
            </mask>
          </defs>
          <g mask="url(#gridMask)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line key={`v${i}`}
                x1={`${(i / 25) * 100}%`} y1="0"
                x2={`${(i / 25) * 100}%`} y2="100%"
                stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line key={`h${i}`}
                x1="0" y1={`${(i / 15) * 100}%`}
                x2="100%" y2={`${(i / 15) * 100}%`}
                stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
            ))}
          </g>
        </svg>
      </div>

      {/* ── Doodle: scribble circles — top-left ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "7%", left: "3%", opacity: 0.2, zIndex: 1 }}
        width="90" height="90" viewBox="0 0 90 90" fill="none">
        <path d="M45 10 C70 8,85 28,82 50 C79 72,58 84,36 80 C14 76,4 56,8 34 C12 12,30 6,45 10 Z"
          stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="200" strokeDashoffset="200"
          style={{ animation: "dash-draw 2s ease forwards 0.3s" }} />
        <path d="M45 20 C64 18,76 34,74 50 C72 67,56 77,40 74 C24 71,14 57,17 41 C20 24,33 18,45 20 Z"
          stroke="var(--color-purple, #8b5cf6)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"
          strokeDasharray="175" strokeDashoffset="175"
          style={{ animation: "dash-draw 2s ease forwards 0.6s" }} />
      </svg>

      {/* ── Doodle: curly brace — top-right ── */}
      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "5%", right: "3%", opacity: 0.15, zIndex: 1 }}
        width="56" height="110" viewBox="0 0 56 110" fill="none">
        <path d="M38 8 C18 8,18 28,28 38 C38 48,18 55,18 55 C18 55,38 62,28 72 C18 82,18 102,38 102"
          stroke="var(--color-pink, #ec4899)" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="230" strokeDashoffset="230"
          style={{ animation: "dash-draw 2.5s ease forwards 0.5s" }} />
      </svg>

      {/* ── Doodle: plus cross — mid-left ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "40%", left: "1.5%", opacity: 0.2, zIndex: 1 }}
        width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2"  x2="14" y2="26" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2"  y1="14" x2="26" y2="14" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* ── Doodle: squiggly lines — top-center ── */}
      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "11%", left: "43%", opacity: 0.13, zIndex: 1 }}
        width="72" height="38" viewBox="0 0 72 38" fill="none">
        <path d="M4 7 Q36 2 68 7"    stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 19 Q38 14 62 19" stroke="var(--color-purple, #8b5cf6)" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 31 Q38 26 66 31"  stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* ── Doodle: triangle — right side ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "25%", right: "2%", opacity: 0.14, zIndex: 1 }}
        width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 4 L40 38 L4 38 Z"
          stroke="var(--color-pink, #ec4899)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="130" strokeDashoffset="130"
          style={{ animation: "dash-draw 1.8s ease forwards 0.8s" }} />
      </svg>

      {/* ── Doodle: small diamond — left center ── */}
      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "22%", left: "8%", opacity: 0.12, zIndex: 1 }}
        width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2 L30 16 L16 30 L2 16 Z"
          stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="90" strokeDashoffset="90"
          style={{ animation: "dash-draw 1.5s ease forwards 1s" }} />
      </svg>

      {/* ── Soft purple glow — top-left atmosphere ── */}
      <div className="absolute pointer-events-none" style={{
        top: "-5%", left: "-5%", width: "480px", height: "480px", zIndex: 0,
        background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      {/* Thin decorative line — top */}
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)", zIndex: 1 }} />

      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-16 pt-24 pb-16 relative z-10">

        {/* ── Left ── */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Role badge */}
          <div className="flex items-center gap-3">
            <span className="inline-block w-6 h-px"
              style={{ background: "linear-gradient(90deg, var(--color-purple, #8b5cf6), var(--color-pink, #ec4899))" }} />
            <span className="role-badge text-purple-400">Full Stack Web Developer</span>
          </div>

          {/* Name */}
          <div>
            <h1 className="text-white text-5xl md:text-6xl leading-tight mb-1"
              style={{ fontFamily: "'Saira', sans-serif", fontWeight: 300, letterSpacing: "-0.01em" }}>
              Hi, I'm
            </h1>
            <h1 className="hero-name text-5xl md:text-7xl leading-tight">
              Jit Mondal
            </h1>
          </div>

          {/* Description */}
          <p style={{
            color: "rgba(180,180,200,0.65)",
            fontFamily: "'Saira', sans-serif",
            fontWeight: 300,
            lineHeight: "1.8",
            fontSize: "1rem",
            maxWidth: "440px",
          }}>
            Building modern, scalable web applications using React, Spring Boot &amp; PostgreSQL.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="#projects"
              className="btn-primary text-white px-7 py-3 rounded-lg text-sm font-medium">
              View Work
            </a>
            <a href="#contact"
              className="btn-secondary text-purple-300 px-7 py-3 rounded-lg text-sm font-medium">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* ── Right ── */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            {/* Outer dashed ring */}
            <div className="absolute rounded-full pointer-events-none" style={{
              inset: "-24px",
              border: "1px dashed rgba(139,92,246,0.2)",
              borderRadius: "50%",
              animation: "spin 20s linear infinite",
            }} />
            {/* Second ring */}
            <div className="absolute rounded-full pointer-events-none" style={{
              inset: "-48px",
              border: "1px solid rgba(236,72,153,0.08)",
              borderRadius: "50%",
              animation: "spin 30s linear infinite reverse",
            }} />

            {/* Floating dots on rings */}
            {[0, 120, 240].map((deg, i) => (
              <div key={i} className="absolute pointer-events-none" style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: i === 0 ? "var(--color-purple, #8b5cf6)" : i === 1 ? "var(--color-pink, #ec4899)" : "#c4b5fd",
                top: "50%", left: "50%",
                transform: `rotate(${deg}deg) translateY(-160px) translateX(-50%)`,
                boxShadow: `0 0 8px ${i === 0 ? "var(--color-purple, #8b5cf6)" : i === 1 ? "var(--color-pink, #ec4899)" : "#c4b5fd"}`,
              }} />
            ))}

            {/* Profile image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glow-border relative"
              style={{ width: "280px", height: "280px", borderRadius: "50%" }}
            >
              <img
                src={assets.profileImg}
                alt="Jit Mondal"
                style={{
                  width: "280px", height: "280px", borderRadius: "50%",
                  objectFit: "cover", objectPosition: "top",
                  display: "block", position: "relative", zIndex: 1,
                }}
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute", bottom: "-12px", right: "-20px",
                background: "rgba(15,15,25,0.9)",
                border: "1px solid rgba(139,92,246,0.35)",
                borderRadius: "12px", padding: "10px 16px",
                backdropFilter: "blur(12px)", zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#22c55e", boxShadow: "0 0 8px #22c55e",
                  display: "inline-block", animation: "pulse 2s infinite",
                }} />
                <span style={{
                  fontSize: "0.7rem", letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(200,210,220,0.8)",
                  fontFamily: "'Saira', sans-serif", fontWeight: 400,
                }}>Available for work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)" }} />
    </motion.div>
  );
};

export default Hero;
