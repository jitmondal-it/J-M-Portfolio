import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

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
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #111111 0%, #1a1a1a 50%, #111111 100%)" }}
    >
      <style>{`
        .contact-section { font-family: 'Saira', sans-serif; }

        .contact-tag-label {
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: #c4b5fd;
        }

        /* Form inputs */
        .contact-input {
          width: 100%;
          background: rgba(22, 22, 32, 0.8);
          border: 1px solid rgba(139,92,246,0.18);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-family: 'Saira', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          resize: none;
        }
        .contact-input::placeholder { color: rgba(200,200,220,0.3); }
        .contact-input:focus {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.08);
        }

        /* Submit button */
        .contact-submit {
          width: 100%;
          padding: 12px 24px;
          border-radius: 12px;
          font-family: 'Saira', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #fff;
          background: linear-gradient(135deg, var(--color-purple, #8b5cf6), #7c3aed);
          border: 1px solid rgba(139,92,246,0.4);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(139,92,246,0.25);
        }
        .contact-submit::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.4s ease;
        }
        .contact-submit:hover::before { left: 100%; }
        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(139,92,246,0.4);
        }

        /* Info item */
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 16px;
          background: rgba(22,22,32,0.7);
          border: 1px solid rgba(139,92,246,0.12);
          transition: border-color 0.3s ease, transform 0.3s ease;
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
        }
        .contact-info-item::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);
        }
        .contact-info-item:hover {
          border-color: rgba(139,92,246,0.28);
          transform: translateX(4px);
        }

        .contact-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1));
          border: 1px solid rgba(139,92,246,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c4b5fd;
          font-size: 1rem;
        }

        /* Social buttons */
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(22,22,32,0.8);
          border: 1px solid rgba(139,92,246,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4b5fd;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background: rgba(139,92,246,0.18);
          border-color: rgba(139,92,246,0.45);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(139,92,246,0.2);
        }

        /* Form card */
        .form-card {
          background: rgba(22,22,32,0.7);
          border: 1px solid rgba(139,92,246,0.14);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
        }
        .form-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
        }

        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-med  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        .doodle-a { animation: float-slow 7s ease-in-out infinite; }
        .doodle-b { animation: float-med  5s ease-in-out infinite; }
      `}</style>

      {/* ── Background grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="contactGridFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="white" stopOpacity="0.55" />
              <stop offset="40%"  stopColor="white" stopOpacity="0.12" />
              <stop offset="75%"  stopColor="white" stopOpacity="0"    />
            </linearGradient>
            <mask id="contactGridMask">
              <rect width="100%" height="100%" fill="url(#contactGridFade)" />
            </mask>
          </defs>
          <g mask="url(#contactGridMask)">
            {Array.from({ length: 26 }).map((_, i) => (
              <line key={`v${i}`}
                x1={`${(i / 25) * 100}%`} y1="0"
                x2={`${(i / 25) * 100}%`} y2="100%"
                stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={`h${i}`}
                x1="0" y1={`${(i / 13) * 100}%`}
                x2="100%" y2={`${(i / 13) * 100}%`}
                stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
            ))}
          </g>
        </svg>
      </div>

      {/* ── Doodles ── */}
      <svg className="doodle-a absolute pointer-events-none"
        style={{ top: "5%", left: "2%", opacity: 0.15, zIndex: 1 }}
        width="28" height="28" viewBox="0 0 28 28" fill="none">
        <line x1="14" y1="2"  x2="14" y2="26" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="2"  y1="14" x2="26" y2="14" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <svg className="doodle-b absolute pointer-events-none"
        style={{ top: "4%", right: "3%", opacity: 0.13, zIndex: 1 }}
        width="72" height="72" viewBox="0 0 72 72" fill="none">
        <path d="M36 8 C56 6,66 22,64 40 C62 58,46 68,28 64 C10 60,2 44,6 26 C10 10,22 6,36 8 Z"
          stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M36 18 C52 16,60 30,58 44 C56 58,44 66,30 62 C16 58,10 46,14 32 C18 20,26 16,36 18 Z"
          stroke="var(--color-purple, #8b5cf6)" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>

      <svg className="doodle-a absolute pointer-events-none"
        style={{ bottom: "8%", left: "2%", opacity: 0.1, zIndex: 1 }}
        width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 4 L40 38 L4 38 Z"
          stroke="var(--color-pink, #ec4899)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* ── Glows ── */}
      <div className="absolute pointer-events-none" style={{
        top: "0%", left: "-5%", width: "420px", height: "420px", zIndex: 0,
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "0%", right: "-5%", width: "360px", height: "360px", zIndex: 0,
        background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="contact-section container mx-auto px-8 md:px-16 relative z-10">

        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, transparent, var(--color-purple, #8b5cf6))",
            }} />
            <span className="contact-tag-label">Let's connect</span>
            <span style={{
              display: "inline-block", width: "24px", height: "1px",
              background: "linear-gradient(90deg, var(--color-purple, #8b5cf6), transparent)",
            }} />
          </div>
          <h2 style={{
            fontWeight: 800,
            letterSpacing: "-0.03em",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: "12px",
          }}>
            Get In{" "}
            <span style={{
              background: "linear-gradient(135deg, #c4b5fd, var(--color-pink, #ec4899))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Touch</span>
          </h2>
          <p style={{
            color: "rgba(200,200,220,0.5)",
            fontWeight: 300,
            fontSize: "0.95rem",
            maxWidth: "400px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}>
            Have a project in mind or want to collaborate? Let's talk
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

          {/* ── Form ── */}
          <motion.div
            className="form-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(200,200,220,0.5)",
                  marginBottom: "8px",
                }}>
                  Your Name
                </label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Jit Mondal"
                />
              </div>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(200,200,220,0.5)",
                  marginBottom: "8px",
                }}>
                  Email Address
                </label>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(200,200,220,0.5)",
                  marginBottom: "8px",
                }}>
                  Your Message
                </label>
                <textarea
                  className="contact-input"
                  style={{ height: "140px" }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* ── Contact Info ── */}
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
                <h3 style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff", marginBottom: "4px" }}>
                  Location
                </h3>
                <p style={{ color: "rgba(200,200,220,0.55)", fontSize: "0.83rem", fontWeight: 300 }}>
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
                <h3 style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff", marginBottom: "4px" }}>
                  Email
                </h3>
                <p style={{ color: "rgba(200,200,220,0.55)", fontSize: "0.83rem", fontWeight: 300 }}>
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
                <h3 style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff", marginBottom: "4px" }}>
                  Phone
                </h3>
                <p style={{ color: "rgba(200,200,220,0.55)", fontSize: "0.83rem", fontWeight: 300 }}>
                  Available on request
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="contact-info-item" style={{ flexDirection: "column", gap: "14px" }}>
              <h3 style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff" }}>
                Follow Me
              </h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href="https://github.com/jitmondal-it"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jit-mondal-493a26283/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  title="LinkedIn"
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