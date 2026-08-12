import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, tech,demo,code }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Glow */}
      <div className="project-top-glow" />

      {/* Image — title lives here so it overlays the photo */}
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-image-fade" />
        <h3 className="project-title">{title}</h3>
      </div>

      {/* Content */}
      <div className="project-content">
        <div className="project-divider" />

        <p className="project-description">{description}</p>

        {/* Tech Tags */}
        <div className="project-tech">
          {tech.map((item, i) => (
            <span key={i} className="tech-tag">
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-buttons">
          <a href={demo} className="demo-btn">
            <FaExternalLinkAlt size={11} />
            Demo Soon
          </a>

          <a
            href={code}
            className="github-btn"
          >
            <FaGithub size={13} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;