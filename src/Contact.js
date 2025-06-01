// src/Contact.js
import React from "react";
import "./App.css"; // Or Contact.css if using separate styles

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container center">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:satlachetna@gmail.com">satlachetna@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> +1 (413) 472-7558
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/chetna-satla-8b4b5b218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/chetna-satla-8b4b5b218
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
