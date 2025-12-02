import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "CT-Image Denoising",
      link: "https://github.com/karthika-246/CT-Image_Denoising",
      desc: "Developed a web-based CT image enhancement system using the Non-Local Means (NLM) algorithm to reduce noise while preserving structural details, improving diagnostic clarity without increasing radiation exposure."
    },
    {
      title: "HR Analysis Dashboard",
      link: "https://github.com/karthika-246/HR_Analysis_Dashboard",
      desc: "Designed and built an interactive HR analytics dashboard using Microsoft Power BI, featuring dynamic visualizations, attrition insights, employee performance metrics, and data filters to support HR decision-making."
    },
    {
      title: "E-Commerce Website",
      link: "https://github.com/karthika-246/Ecommerce",
      desc: "Created a full-stack e-commerce platform with product listings, category filtering, wishlist, add-to-cart, responsive UI, and a dedicated admin dashboard for inventory management and order monitoring."
    },
    {
      title: "Blood Group Detection",
      desc: "Engineered a low-cost healthcare solution integrating Arduino Uno, fingerprint sensor, and a deep learning model within a Flask web app to predict blood groups in a non-invasive and accessible manner."
    }
  ];

  return (
    <section id="projects" className="section glass">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.link && (
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
