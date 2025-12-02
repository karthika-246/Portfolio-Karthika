import React from "react";

export default function Tools() {
  const tools = ["Android Studio", "Figma", "Blender", "Power BI"];

  return (
    <section className="section glass">
      <h2>Tools</h2>
      <div className="pill-container">
        {tools.map((tool, i) => (
          <span key={i} className="pill">{tool}</span>
        ))}
      </div>
    </section>
  );
}
