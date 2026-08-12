import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";

import "./TProjects.css";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="projects-wrapper relative py-24 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="projects-grid absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="projGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="40%" stopColor="white" stopOpacity="0.12" />
              <stop offset="75%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="projGridMask">
              <rect
                width="100%"
                height="100%"
                fill="url(#projGridFade)"
              />
            </mask>
          </defs>

          <g mask="url(#projGridMask)">
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

      <div className="projects-section container mx-auto px-8 md:px-16 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="projects-heading-top">
            <span className="heading-line left"></span>

            <span className="projects-tag-label">
              What I've built
            </span>

            <span className="heading-line right"></span>
          </div>

          <h2 className="projects-heading">
            My <span>Projects</span>
          </h2>

          <p className="projects-subtitle">
            Explore some of my recent projects and work
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View More */}
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