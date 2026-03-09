import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, tech }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        background: "rgba(22, 22, 32, 0.9)",
        border: "1px solid rgba(139,92,246,0.14)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.35), 0 0 40px rgba(139,92,246,0.1)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        borderColor: hovered ? "rgba(139,92,246,0.32)" : "rgba(139,92,246,0.14)",
      }}
    >
      {/* ── Top glow line ── */}
      <div style={{
        position: "absolute",
        top: 0, left: "15%", right: "15%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* ── Image section ── */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        height: "200px",
        flexShrink: 0,
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            transition: "transform 0.6s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Bottom fade on image */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "70px",
          background: "linear-gradient(to top, rgba(22,22,32,1), transparent)",
          pointerEvents: "none",
        }} />
      </div>

      {/* ── Content section — solid dark background ── */}
      <div style={{
        padding: "18px 22px 22px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        background: "rgba(22, 22, 32, 0.97)",
      }}>

        {/* Title */}
        <h3 style={{
          fontWeight: 700,
          fontSize: "1rem",
          color: "#ffffff",
          letterSpacing: "-0.01em",
          marginBottom: "8px",
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, rgba(139,92,246,0.35), transparent)",
          marginBottom: "10px",
        }} />

        {/* Description */}
        <p style={{
          color: "rgba(200,200,220,0.6)",
          fontSize: "0.8rem",
          fontWeight: 300,
          lineHeight: 1.75,
          marginBottom: "14px",
          flex: 1,
        }}>
          {description}
        </p>

        {/* Tech tags */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "18px",
        }}>
          {tech.map((item, i) => (
            <span key={i} style={{
              padding: "4px 11px",
              borderRadius: "9999px",
              fontSize: "0.7rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "#c4b5fd",
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.22)",
            }}>
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="#" style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "9px 14px",
            borderRadius: "10px",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.03em",
            color: "#fff",
            background: "linear-gradient(135deg, var(--color-purple, #8b5cf6), #7c3aed)",
            textDecoration: "none",
            border: "1px solid rgba(139,92,246,0.4)",
            boxShadow: "0 4px 16px rgba(139,92,246,0.25)",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(139,92,246,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(139,92,246,0.25)";
            }}
          >
            <FaExternalLinkAlt size={11} />
            Demo Soon
          </a>
          <a href="#" style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            padding: "9px 14px",
            borderRadius: "10px",
            fontSize: "0.78rem",
            fontWeight: 400,
            letterSpacing: "0.03em",
            color: "#c4b5fd",
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.28)",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(139,92,246,0.15)";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(139,92,246,0.06)";
              e.currentTarget.style.borderColor = "rgba(139,92,246,0.28)";
              e.currentTarget.style.color = "#c4b5fd";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FaGithub size={13} />
            Code Soon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;