import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home",    href: "#home"     },
  { label: "About",   href: "#about"    },
  { label: "Skills",  href: "#skills"   },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact"  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
                .nav-wrap { font-family: 'Saira', sans-serif; }

        .nav-pill {
          position: relative;
          display: flex;
          align-items: center;
          gap: 2px;
          background: rgba(26, 26, 26, 0.65);
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 9999px;
          padding: 6px 8px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(124,58,237,0.06);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .nav-pill.scrolled {
          border-color: rgba(139, 92, 246, 0.32);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 80px rgba(124,58,237,0.1);
        }
        /* subtle top glow line */
        .nav-pill::before {
          content: '';
          position: absolute;
          top: -1px; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent);
          border-radius: 9999px;
          pointer-events: none;
        }

        /* Logo */
        .nav-logo {
          font-family: 'Saira', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.02em;
          color: #fff;
          padding: 7px 16px 7px 10px;
          margin-right: 4px;
          border-right: 1px solid rgba(139,92,246,0.2);
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-logo span {
          background: linear-gradient(135deg, #c4b5fd, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Nav link — no background by default */
        .nav-link {
          position: relative;
          padding: 7px 18px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(200, 200, 230, 0.65);
          text-decoration: none;
          transition: color 0.25s ease;
          white-space: nowrap;
          z-index: 0;
        }
        .nav-link:hover { color: rgba(255,255,255,0.9); }

        /* Active state — pill background appears ONLY when active */
        .nav-link.active {
          color: #ffffff;
        }
        .nav-link.active::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(124,58,237,0.32), rgba(236,72,153,0.18));
          border: 1px solid rgba(139,92,246,0.28);
          z-index: -1;
        }


        .hamburger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(139,92,246,0.25);
          background: rgba(124,58,237,0.08);
          color: rgba(200,200,230,0.8);
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 6px;
        }
        @media (max-width: 767px) {
          .hamburger-btn { display: flex; }
        }
        .hamburger-btn:hover {
          border-color: rgba(139,92,246,0.5);
          color: #fff;
          background: rgba(124,58,237,0.2);
        }

        /* Mobile dropdown */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 210px;
          background: rgba(26, 26, 26, 0.97);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 20px;
          padding: 18px 14px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.1);
          backdrop-filter: blur(20px);
          animation: menuIn 0.18s ease;
          z-index: 100;
        }
        @keyframes menuIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .mobile-link {
          display: block;
          padding: 9px 14px;
          border-radius: 11px;
          font-size: 0.83rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(200,200,230,0.65);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-link:hover { color: #fff; background: rgba(124,58,237,0.12); }
        /* Active mobile link — pill appears only when active */
        .mobile-link.active {
          color: #fff;
          background: linear-gradient(135deg, rgba(124,58,237,0.28), rgba(236,72,153,0.15));
          border: 1px solid rgba(139,92,246,0.25);
        }

        .mobile-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.18), transparent);
          margin: 2px 0;
        }
      `}</style>

      <nav className="nav-wrap fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className={`nav-pill ${scrolled ? "scrolled" : ""}`}>

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={() => setActive("#home")}>
            Jit <span>Mondal</span>
          </a>

          {/* Desktop links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`nav-link ${active === href ? "active" : ""}`}
                onClick={() => setActive(href)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Hamburger — mobile only (md:hidden keeps it off desktop) */}
          <button
            className="hamburger-btn md:hidden"
            onClick={() => setShowMenu(v => !v)}
            aria-label="Toggle menu"
          >
            {showMenu ? <FaXmark size={13} /> : <FaBars size={13} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {showMenu && (
          <div className="mobile-menu md:hidden">
            {NAV_LINKS.map(({ label, href }, i) => (
              <React.Fragment key={href}>
                <a
                  href={href}
                  className={`mobile-link ${active === href ? "active" : ""}`}
                  onClick={() => { setShowMenu(false); setActive(href); }}
                >
                  {label}
                </a>
                {i < NAV_LINKS.length - 1 && <div className="mobile-divider" />}
              </React.Fragment>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
