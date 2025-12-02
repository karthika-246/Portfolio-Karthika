import React from "react";

export default function Header() {
  return (
    <header className="header glass">
      <div className="logo">KARTHIKA</div>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>

        <a href="/resume.pdf" download className="resume-btn">Resume</a>
      </nav>
    </header>
  );
}
