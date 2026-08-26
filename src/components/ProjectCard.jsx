import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, tech, code }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Glow */}
      <div className="project-top-glow" />

      {/* Content */}
      <div className="project-content">

        {/* Project Title */}
        <h3 className="project-title">{title}</h3>

        {/* Divider */}
        <div className="project-divider" />

        {/* Description */}
        <p className="project-description">{description}</p>

        {/* Tech Stack */}
        <div className="project-tech">
          {tech.map((item, i) => (
            <span key={i} className="tech-tag">
              {item}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="project-buttons">
          <a
            href={code}
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={14} />
            View Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;