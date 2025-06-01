import React from "react";
import "./App.css"; // Or create a separate Publication.css if needed

function Publication() {
  return (
    <section id="publication" className="section">
      <h2 className="section-title">📚 Publications</h2>
      <div className="publication-container">
        <div className="publication-item">
          <h3>EMOJIFY: Create Your Own Emoji with Deep Learning</h3>
          <p>
            Developed an effective face detection and recognition system using CNN architecture.
            The system achieved 95.71% accuracy with only a 0.09 false positive rate.
            Designed the flow: CNN Architecture → Input: FER2013 dataset → Real-time face recognition →
            Emoji mapping → Output: Real-time Emoji.
          </p>
          <p>
            <strong>Technologies: Deep Learning, CNN, Python, FER2013 dataset </strong>
          </p>
          <div className="publication-buttons">
            <a
              href="https://github.com/Chetnas8/emojify-deep-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button blue-button"
            >
              🔗 View Project on GitHub
            </a>
            <a
              href="https://ijirt.org/Article?manuscript=168243"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button blue-button"
            >
              📄 Explore Publication
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publication;
