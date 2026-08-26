import React, { useEffect, useState } from "react";
import "./Intro.css";

const Intro = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!exit) return;

    const timer = setTimeout(() => {
      onComplete();
    }, 800);

    return () => clearTimeout(timer);
  }, [exit, onComplete]);

  return (
    <div className={`intro-screen ${exit ? "intro-exit" : ""}`}>
      
      <div className="handwriting-wrapper">

        <svg
          className="hello-svg"
          viewBox="0 0 700 220"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Hello"
        >
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            className="hello-text"
          >
            hello
          </text>
        </svg>

        <p className="intro-subtitle">
          Welcome to my portfolio
        </p>

      </div>

    </div>
  );
};

export default Intro;