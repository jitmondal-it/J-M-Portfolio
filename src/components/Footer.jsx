import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#0f0f14", fontFamily: "'Saira', sans-serif" }}
    >
      <style>{`
        .footer-top-line {
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.45), transparent);
        }
        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(139,92,246,0.07);
          border: 1px solid rgba(139,92,246,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4b5fd;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .footer-social-btn:hover {
          background: rgba(139,92,246,0.18);
          border-color: rgba(139,92,246,0.45);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="footer-top-line" />

      <div className="container mx-auto px-8 md:px-16 py-8">
        <div className="flex flex-col items-center gap-3 text-center justify-between">

          {/* Logo */}
          <span style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "-0.02em",
            color: "#fff",
          }}>
            Jit{" "}
            <span style={{
              background: "linear-gradient(135deg, #c4b5fd, var(--color-pink, #ec4899))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Mondal</span>
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-3 ">
            <a href="https://github.com/jitmondal-it" target="_blank" rel="noreferrer" className="footer-social-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jit-mondal-493a26283/" target="_blank" rel="noreferrer" className="footer-social-btn">
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p style={{
            fontSize: "0.72rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "rgba(200,200,220,0.3)",
          }}>
            © {year} Jit Mondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;