import React, { useState, useEffect } from "react";

import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  /* Navbar background when scrolling */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Detect which section is currently visible */
  useEffect(() => {
    const sections = NAV_LINKS
      .filter(({ href }) => href.startsWith("#"))
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActive(`#${visibleSections[0].target.id}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-90px 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) =>
        observer.unobserve(section)
      );
    };
  }, []);

  /* Smooth scroll */
  const handleNavigation = (e, href) => {
   
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(href);
      setShowMenu(false);
    }
  };

  return (
    <nav className="nav-wrap fixed top-5 left-1/2 -translate-x-1/2 z-50">

      <div className={`nav-pill ${scrolled ? "scrolled" : ""}`}>

        {/* Logo */}
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) =>
            handleNavigation(e, "#home")
          }
        >
          Jit <span>Mondal</span>
        </a>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5">

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              rel="noreferrer"
              className={`nav-link ${
                active === href ? "active" : ""
              }`}
              onClick={(e) =>
                handleNavigation(e, href)
              }
            >
              {label}
            </a>
          ))}

        </div>


        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            theme === "dark"
              ? "Light mode"
              : "Dark mode"
          }
        >
          {theme === "dark" ? (
            <FaSun size={13} />
          ) : (
            <FaMoon size={13} />
          )}
        </button>


        {/* Hamburger */}
        <button
          className="hamburger-btn md:hidden"
          onClick={() => setShowMenu((v) => !v)}
          aria-label="Toggle menu"
        >
          {showMenu ? (
            <FaXmark size={13} />
          ) : (
            <FaBars size={13} />
          )}
        </button>

      </div>


      {/* Mobile Menu */}
      {showMenu && (
        <div className="mobile-menu md:hidden">

          {NAV_LINKS.map(({ label, href }, i) => (
            <React.Fragment key={href}>

              <a
                href={href}
                className={`mobile-link ${
                  active === href ? "active" : ""
                }`}
                onClick={(e) =>
                  handleNavigation(e, href)
                }
              >
                {label}
              </a>

              {i < NAV_LINKS.length - 1 && (
                <div className="mobile-divider" />
              )}

            </React.Fragment>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;