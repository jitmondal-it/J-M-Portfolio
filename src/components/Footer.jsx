import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="container mx-auto px-8 md:px-16 py-8">
        <div className="footer-content">

          {/* Logo */}
          <span className="footer-logo">
            Jit <span>Mondal</span>
          </span>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="https://github.com/jitmondal-it"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jit-mondal-493a26283/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {year} Jit Mondal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;