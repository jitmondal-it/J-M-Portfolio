import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="hero-section relative min-h-screen flex items-center overflow-hidden"
    >
      {/* <a
        href="/CV_JM.pdf"
        className="hero-resume-btn"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a> */}
      {/* SVG Grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="48%" stopColor="white" stopOpacity="0.3" />
              <stop offset="78%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#gridFade)" />
            </mask>
          </defs>

          <g mask="url(#gridMask)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={`${(i / 25) * 100}%`}
                y1="0"
                x2={`${(i / 25) * 100}%`}
                y2="100%"
                stroke="rgba(139,92,246,0.22)"
                strokeWidth="1"
              />
            ))}

            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={`${(i / 15) * 100}%`}
                x2="100%"
                y2={`${(i / 15) * 100}%`}
                stroke="rgba(139,92,246,0.22)"
                strokeWidth="1"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-16 pt-24 pb-16 relative z-10">
        {/* Left */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <span className="role-line"></span>

            <span className="role-badge">Full Stack Web Developer</span>
          </div>

          <div>
            <h1 className="hero-subtitle">Hi, I'm</h1>

            <h1 className="hero-name">Jit Mondal</h1>
          </div>

          <p className="hero-description">
            Building modern, scalable web applications using React, Spring Boot
            & PostgreSQL.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a href="#projects" className="btn-primary">
              View Work
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            <div className="outer-ring"></div>

            <div className="second-ring"></div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glow-border"
              style={{
                width: "clamp(180px, 25vw, 280px)",
                height: "clamp(180px, 25vw, 280px)",
              }}
            >
              <img
                src={assets.profileImg}
                alt="Jit Mondal"
                className="hero-image"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="floating-badge"
            >
              <div className="badge-content">
                <span className="badge-dot"></span>

                <span className="badge-text">Available for work</span>
              </div>
            </motion.div>

            {/* Curved hand-drawn connection to CV */}
            <svg
              className="cv-connection"
              viewBox="0 0 180 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Main hand-drawn stroke:
      starts from the photo → loop → points toward Download CV */}
              <path
                className="cv-arrow-line"
                pathLength="1"
                d="
    M 48 72
    C 53 80, 61 87, 71 88
    C 82 89, 87 82, 83 77
    C 79 72, 73 77, 77 83
    C 82 91, 96 91, 106 82
    C 116 73, 119 60, 122 48
  "
              />

              {/* Arrow head */}
              <path
                className="cv-arrow-head"
                pathLength="1"
                d="M 122 48 C 117 51, 113 54, 110 59"
              />

              <path
                className="cv-arrow-head"
                pathLength="1"
                d="M 122 48 C 121 54, 121 59, 123 64"
              />
            </svg>

            {/* CV Button */}
            <a
              href="/CV_JM.pdf"
              className="hero-resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <div className="bottom-line"></div>
    </motion.div>
  );
};

export default Hero;
