import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="contact-wrapper relative py-24 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="contact-grid absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="contactGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.55" />
              <stop offset="40%" stopColor="white" stopOpacity="0.12" />
              <stop offset="75%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="contactGridMask">
              <rect
                width="100%"
                height="100%"
                fill="url(#contactGridFade)"
              />
            </mask>
          </defs>

          <g mask="url(#contactGridMask)">
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

      <div className="contact-section container mx-auto px-8 md:px-16 relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-heading-top">
            <span className="heading-line left"></span>

            <span className="contact-tag-label">
              Let's connect
            </span>

            <span className="heading-line right"></span>
          </div>

          <h2 className="contact-title">
            Get In <span>Touch</span>
          </h2>

          <p className="contact-subtitle">
            Have a project in mind or want to collaborate?
            Let's talk
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

          {/* Form */}
          <motion.div
            className="form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div>
                <label className="contact-label">
                  Your Name
                </label>

                <input
                  className="contact-input"
                  type="text"
                  placeholder="Jit Mondal"
                />
              </div>

              <div>
                <label className="contact-label">
                  Email Address
                </label>

                <input
                  className="contact-input"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="contact-label">
                  Your Message
                </label>

                <textarea
                  className="contact-input contact-textarea"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >

            {/* Location */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="info-title">Location</h3>

                <p className="info-text">
                  Kalyani, Nadia
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="info-title">Email</h3>

                <p className="info-text">
                  jitmondal631@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <FaPhone />
              </div>

              <div>
                <h3 className="info-title">Phone</h3>

                <p className="info-text">
                  Available on request
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="contact-info-item social-card">
              <h3 className="info-title">Follow Me</h3>

              <div className="social-links">
                <a
                  href="https://github.com/jitmondal-it"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jit-mondal-493a26283/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;