import React from "react";
import "./App.css"; // Or use './Skills.css' if separated

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span className="tag react">React Js</span>
            <span className="tag html">HTML</span>
            <span className="tag css">CSS</span>
            <span className="tag js">JavaScript</span>
            <span className="tag bootstrap">Bootstrap</span>
            <span className="tag mui">Material UI</span>
          </div>
        </div>

        {/* Data Science Skills */}
        <div className="skill-card">
          <h3>Data Science Skills</h3>
          <div className="skill-tags">
            <span className="tag python">Python</span>
            <span className="tag sql">MySQL</span>
            <span className="tag tableau">Tableau</span>
            <span className="tag powerbi">Power BI</span>
            <span className="tag r">R Programming</span>
            <span className="tag snowflake">Snowflake</span>
            <span className="tag mongo">MongoDB</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools</h3>
          <div className="skill-tags">
            <span className="tag pandas">Pandas</span>
            <span className="tag numpy">NumPy</span>
            <span className="tag pytorch">PyTorch</span>
            <span className="tag tensorflow">TensorFlow</span>
            <span className="tag matplotlib">MatPlotLib</span>
            <span className="tag keras">Keras</span>
            <span className="tag sklearn">Scikit-learn</span>
          </div>
        </div>

        {/* Others */}
        <div className="skill-card">
          <h3>Others</h3>
          <div className="skill-tags">
            <span className="tag git">Git</span>
            <span className="tag github">GitHub</span>
            <span className="tag vscode">VS Code</span>
            <span className="tag postman">Postman</span>
            <span className="tag xd">Adobe XD</span>
            <span className="tag figma">Figma</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
