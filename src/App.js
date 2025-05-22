import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Hi, I am <span className="highlight">Chetna Satla</span></h1>
        <h2>I am a <span className="typing">Data Scientist</span></h2>
        <p>I am a data-driven and versatile individual, always eager to take on new challenges and create smart solutions from complex data.</p>
        <a href="/resume.pdf" className="btn">Check Resume</a>
      </div>
      <div className="photo">
        <img src="/profile.jpg" alt="Chetna Satla" />
      </div>
    </div>
  );
}

export default App;
