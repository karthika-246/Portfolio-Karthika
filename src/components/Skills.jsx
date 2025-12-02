import React from "react";


const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <span className="skill-icon">💻</span>
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript, React JS</p>
        </div>

        <div className="skill-card">
          <span className="skill-icon">🛠</span>
          <h3>Backend Development</h3>
          <p>Node JS, MongoDB</p>
        </div>

        <div className="skill-card">
          <span className="skill-icon">🌐</span>
          <h3>Programming</h3>
          <p>Java, Python, C, MySQL</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
