import React from "react";
import "./App.css";
import profile from "./assets/chetna-photo.jpg";
import umassLogo from "./assets/logos/umass_logo.png";
import puneLogo from "./assets/logos/pune_logo.png";
import Skills from "./Skills";
import Projects from "./Projects";
import Publication from "./Publication";
import BeyondWork from "./BeyondWork";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#publication">Publication</a></li>
          <li><a href="#beyond">Beyond Work</a></li>
        </ul>
        <a
          href="https://github.com/Chetnas8"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-text">
          <h1>Hi, I am <span className="highlight">Chetna Satla</span></h1>
          <h2>I am a <span className="typed">Tech Enthusiast</span></h2>
          <p>
            I am a motivated and versatile individual, always eager to take on new challenges.
            With a passion for learning, I am dedicated to delivering high-quality results.
            With a positive attitude and a growth mindset, I am ready to make a meaningful contribution.
          </p>
          <a
            className="resume-btn"
<<<<<<< HEAD
            href="https://github.com/Chetnas8/chetna-satla-portfolio/blob/main/public/Chetna_S_Resume.pdf"
=======
            href="./Chetna_S_Resume.pdf"
>>>>>>> 63ae017624fb6587e191ff5cfc522461953f3f89
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Resume
          </a>
        </div>
        <div className="hero-img">
          <img src={profile} alt="Chetna Satla" />
        </div>
      </header>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          <div className="edu-item">
            <div className="edu-details">
              <h3><strong>University of Massachusetts Amherst</strong></h3>
              <p><strong>Master of Engineering in Industrial Engineering and Management</strong></p>
              <p><strong>GPA: 3.9 / 4.0</strong></p>
              <p><strong>Aug 2024 – May 2026</strong></p>
            </div>
            <img src={umassLogo} alt="UMass Logo" className="edu-logo" />
          </div>

          <div className="edu-item">
            <div className="edu-details">
              <h3><strong>Savitribai Phule Pune University</strong></h3>
              <p><strong>Bachelor of Engineering in Electronics and Telecommunication</strong></p>
              <p><strong>CGPA: 3.54 / 4</strong></p>
              <p><strong>May 2018 – May 2022</strong></p>
            </div>
            <img src={puneLogo} alt="Pune University Logo" className="edu-logo" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {/* Experience 1 */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>HCM Consultant I – MASTEK Enterprise Solutions</h3>
              <span className="duration">Sep 2022 – Sep 2024</span>
              <ul>
                <li>Delivered Oracle HCM solutions (Payroll, Absence, OTL) and owned full product lifecycle: requirements → user stories → testing → UAT → Go-live → Hypercare, reducing manual processing by 80% and errors by 70%.</li>
                <li>Configured end-to-end payroll flows for UAE, Spain, and India cycles. Set up payroll elements including Salary, Housing, Transportation, Overtime, Deduction, Leave Encashment, Contributions.</li>
                <li>Developed Fast Formula for earnings/deductions, achieving 99.5% payroll accuracy.</li>
                <li>Configured absence plans with custom Fast Formula for accrual rules and proration.</li>
                <li>Implemented BPM approval workflows and managed data migration using HDL.</li>
              </ul>
              <p><strong>Skills:</strong> • Oracle HCM Cloud • Fast Formula • Payroll • HDL • Absence Management • BPM Workflow</p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Associate Consultant – MASTEK Enterprise Solutions</h3>
              <span className="duration">Jun 2022 – Aug 2022</span>
              <ul>
                <li>Collaborated with cross-functional teams to enhance system efficiency and resolved 65% of issues within 24 hours.</li>
                <li>Conducted data analysis, reporting, QA, and supported ongoing enhancements.</li>
                <li>Created technical documentation and led client demos.</li>
              </ul>
              <p><strong>Skills:</strong> • QA Testing • Documentation • Support Tickets • Knowledge Transfer • Process Flows</p>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>Data Analyst Intern – Larsen & Toubro Defence, Surat</h3>
              <span className="duration">Dec 2021 – May 2022</span>
              <ul>
                <li>Built and maintained ETL pipelines to automate data ingestion.</li>
                <li>Performed data cleaning, transformation, and validation; reduced inconsistencies by 20%.</li>
                <li>Developed Power BI dashboards and SQL reports for performance monitoring.</li>
              </ul>
              <p><strong>Skills:</strong> • ETL • Power BI • SQL • Data Cleaning • Performance Dashboards</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      {/* PUBLICATION SECTION */}
      <Publication />

      {/* SKILLS SECTION */}
      <Skills />

      {/* BEYOND WORK SECTION */}
      <BeyondWork />

      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
}

export default App;
