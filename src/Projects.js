import React from "react";
import "./App.css"; // Ensure your CSS styles are loaded here

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">

        {/* Project 1: ACAML */}
        <div className="project-item">
          <h3>🚀 ACAML — Adaptive Constraint-Aware AutoML</h3>
          <p>
            Empowering users to build, evaluate, and interpret ML models with a single drag-and-drop.
            ACAML simplifies AutoML with intuitive visuals and lightning-fast optimizations. It detects
            classification vs. regression, selects the best estimator under time constraints, and integrates SHAP
            for transparency. Fully containerized and deployed on Streamlit Cloud for global accessibility.
          </p>
          <p>
            <strong>Technologies:</strong> Streamlit, FLAML, Python, SHAP, Docker, Streamlit Cloud
          </p>
          <a
            href="https://github.com/Chetnas8/acaml-web-app"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            🔗 Visit GitHub Repository
          </a>
        </div>

        {/* Project 2: Fire Incident Analysis */}
        <div className="project-item">
          <h3>🔥 Fire Incident Analysis Using NASA FIRMS Data</h3>
          <p>
            Transforming raw satellite data into actionable insights! This project dives into NASA FIRMS data to classify
            fire confidence levels, predict radiative power, and detect anomalies. Includes EDA, Random Forests,
            Gradient Boosting, and Isolation Forest with interactive dashboards for global fire hotspots.
          </p>
          <p>
            <strong>Technologies:</strong> Python, Pandas, Scikit-learn, Jupyter Notebook, EDA Visualizations
          </p>
          <a
            href="https://github.com/Chetnas8/Fire_Incident_Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            🔗 Visit GitHub Repository
          </a>
        </div>

        {/* Project 3: EMOJIFY */}
        <div className="project-item">
          <h3>😎 EMOJIFY — Real-Time Face Recognition with Emoji Mapping</h3>
          <p>
            Unleash creativity with EMOJIFY — a fun and interactive face detection and emoji generator! Using CNNs
            trained on the FER2013 dataset, this project detects faces in real-time, classifies emotions, and maps
            them to expressive emojis. Achieved 95.71% accuracy with a 0.09 false positive rate.
          </p>
          <p>
            <strong>Technologies:</strong> Deep Learning, CNN, FER2013, Python, OpenCV, Real-Time Vision
          </p>
          <a
            href="https://github.com/Chetnas8/EMOJIFY"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            🔗 Visit GitHub Repository
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
