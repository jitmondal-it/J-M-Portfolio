import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="skills-wrapper relative py-24 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="skills-grid absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="skillsGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="40%" stopColor="white" stopOpacity="0.12" />
              <stop offset="75%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="skillsGridMask">
              <rect
                width="100%"
                height="100%"
                fill="url(#skillsGridFade)"
              />
            </mask>
          </defs>

          <g mask="url(#skillsGridMask)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={`${(i / 25) * 100}%`}
                y1="0"
                x2={`${(i / 25) * 100}%`}
                y2="100%"
                stroke="rgba(139,92,246,0.18)"
                strokeWidth="1"
              />
            ))}

            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={`${(i / 13) * 100}%`}
                x2="100%"
                y2={`${(i / 13) * 100}%`}
                stroke="rgba(139,92,246,0.18)"
                strokeWidth="1"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="skills-section container mx-auto px-8 md:px-16 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="skills-heading-top">
            <span className="heading-line left"></span>

            <span className="skills-tag-label">
              What I work with
            </span>

            <span className="heading-line right"></span>
          </div>

          <h2 className="skills-heading">
            My <span>Skills</span>
          </h2>

          <p className="skills-subtitle">
            Technologies I use to turn ideas into
            real-world applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              {/* Icon + Title */}
              <div className="skill-header">
                <div className="skill-icon-box">
                  <skill.icon size={22} />
                </div>

                <h3 className="skill-title">
                  {skill.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="skill-divider" />

              {/* Description */}
              <p className="skill-description">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="skill-tags">
                {skill.tags.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
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