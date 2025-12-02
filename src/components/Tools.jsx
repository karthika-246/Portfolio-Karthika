import React from "react";

export default function Tools() {
  const tools = [
    { icon: "📱", title: "Android Studio", desc: "App development & Java UI design" },
    { icon: "🎨", title: "Figma", desc: "UI/UX prototyping & wireframing" },
    { icon: "🌀", title: "Blender", desc: "3D & 2D modeling and animation" },
    { icon: "📊", title: "Power BI", desc: "Data visualization & dashboards" }
  ];

  return (
    <section id="tools" className="tools-container">
      <h2 className="tools-title">Tools</h2>

      <div className="tools-grid">
        {tools.map((tool, i) => (
          <div key={i} className="tool-card">
            <span className="tool-icon">{tool.icon}</span>
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
