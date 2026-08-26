import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import "./About.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="about-wrapper relative py-24 overflow-hidden"
    >
      {/* =========================
          BACKGROUND GRID
          ========================= */}
      <div className="about-grid-svg">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="about-grid-svg-inner"
        >
          <defs>
            <linearGradient
              id="aboutGridFade"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopOpacity="0.6" />
              <stop offset="40%" stopOpacity="0.15" />
              <stop offset="75%" stopOpacity="0" />
            </linearGradient>

            <mask id="aboutGridMask">
              <rect
                width="100%"
                height="100%"
                fill="url(#aboutGridFade)"
              />
            </mask>
          </defs>

          <g mask="url(#aboutGridMask)">
            {/* Vertical lines */}
            {Array.from({ length: 26 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={`${(i / 25) * 100}%`}
                y1="0"
                x2={`${(i / 25) * 100}%`}
                y2="100%"
                className="about-grid-line"
              />
            ))}

            {/* Horizontal lines */}
            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={`${(i / 13) * 100}%`}
                x2="100%"
                y2={`${(i / 13) * 100}%`}
                className="about-grid-line"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* =========================
          DOODLE - TOP LEFT
          ========================= */}
      <svg
        className="doodle-b absolute pointer-events-none"
        style={{
          top: "6%",
          left: "2%",
          opacity: 0.16,
          zIndex: 1,
        }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <line
          x1="14"
          y1="2"
          x2="14"
          y2="26"
          className="about-doodle-line"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <line
          x1="2"
          y1="14"
          x2="26"
          y2="14"
          className="about-doodle-line"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* =========================
          DOODLE - TOP RIGHT
          ========================= */}
      <svg
        className="doodle-a absolute pointer-events-none"
        style={{
          top: "4%",
          right: "3%",
          opacity: 0.14,
          zIndex: 1,
        }}
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M36 8 C56 6,66 22,64 40 C62 58,46 68,28 64 C10 60,2 44,6 26 C10 10,22 6,36 8 Z"
          className="about-doodle-line"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M36 18 C52 16,60 30,58 44 C56 58,44 66,30 62 C16 58,10 46,14 32 C18 20,26 16,36 18 Z"
          className="about-doodle-line-secondary"
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* =========================
          DOODLE - BOTTOM RIGHT
          ========================= */}
      <svg
        className="doodle-b absolute pointer-events-none"
        style={{
          bottom: "8%",
          right: "2%",
          opacity: 0.1,
          zIndex: 1,
        }}
        width="60"
        height="32"
        viewBox="0 0 60 32"
        fill="none"
      >
        <path
          d="M4 6 Q30 2 56 6"
          className="about-doodle-line"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M8 16 Q32 12 52 16"
          className="about-doodle-line-secondary"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M4 26 Q30 22 56 26"
          className="about-doodle-line"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* =========================
          ATMOSPHERIC GLOW
          ========================= */}
      <div className="about-atmospheric-glow absolute pointer-events-none" />

      {/* =========================
          MAIN CONTENT
          ========================= */}
      <div className="about-section container mx-auto px-8 md:px-16 relative z-10">

        {/* =========================
            SECTION HEADING
            ========================= */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-heading-top">
            <span className="heading-line left" />

            <span className="about-section-tag">
              Get to know me
            </span>

            <span className="heading-line right" />
          </div>

          <h2 className="about-heading text-4xl md:text-5xl mb-4">
            About{" "}
            <span className="about-heading-accent">
              Me
            </span>
          </h2>

          <p className="about-subtitle">
            Discover more about my journey, skills, and passion
            for web development
          </p>
        </motion.div>

        {/* =========================
            IMAGE + CONTENT
            ========================= */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* =========================
              IMAGE
              ========================= */}
          <motion.div
            className="md:w-1/2 w-full flex justify-center items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div
              className="about-img-wrap w-full"
              style={{
                aspectRatio: "4/5",
                maxWidth: "420px",
              }}
            >
              <img
                src={assets.profileImg}
                alt="Jit Mondal"
                className="about-profile-image"
              />
            </div>
          </motion.div>

          {/* =========================
              RIGHT CONTENT
              ========================= */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >

            {/* My Journey */}
            <div className="journey-heading">
              <span className="journey-line" />

              <span className="journey-label">
                My Journey
              </span>
            </div>

            {/* Paragraph 1 */}
            <p className="about-paragraph">
              I'm an IT student and an aspiring full-stack
              developer who enjoys building modern and scalable
              web applications. My journey into development
              started with learning core programming concepts
              and Java, which gradually led me to explore
              full-stack development using React, Spring Boot,
              and PostgreSQL.
            </p>

            <div className="text-divider" />

            {/* Paragraph 2 */}
            <p className="about-paragraph">
              Outside of coursework, I actively improve my
              problem-solving skills by practicing Data
              Structures and Algorithms while continuing to
              explore new technologies. I'm naturally curious,
              consistent in learning, and motivated to grow
              into a software engineer who builds meaningful,
              impactful solutions.
            </p>

            {/* =========================
                INFO CARDS
                ========================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">

              {aboutInfo.map((data, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  {/* Icon */}
                  <div className="info-card-icon">
                    <data.icon />
                  </div>

                  {/* Title */}
                  <h4 className="info-card-title">
                    {data.title}
                  </h4>

                  {/* Description */}
                  <p className="info-card-description">
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