import React from "react";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "Java", "C", "Python", "SQL", "UI/UX"
  ];

  return (
    <section id="skills" className="section glass">
      <h2>Skills</h2>
      <div className="pill-container">
        {skills.map((skill, i) => (
          <span key={i} className="pill">{skill}</span>
        ))}
      </div>
    </section>
  );
}
