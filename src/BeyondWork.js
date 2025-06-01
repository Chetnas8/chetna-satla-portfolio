import React from "react";
import "./App.css"; // adjust if using a separate CSS file
import image1 from "./assets/image1.jpg"; // Replace with your actual image names
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

function BeyondWork() {
  return (
    <section id="beyond" className="section">
      <h2 className="section-title">Beyond Work</h2>

      {/* Images Row */}
      <div className="beyondwork-images-row">
        <img src={image1} alt="Beyond Work Activity 1" className="beyond-img" />
        <img src={image2} alt="Beyond Work Activity 2" className="beyond-img" />
        <img src={image3} alt="Beyond Work Activity 3" className="beyond-img" />
      </div>

      {/* Content */}
      <div className="beyondwork-box">
        {/* NSS */}
        <div className="beyondwork-item">
          <h3>📌 National Service Scheme (NSS)</h3>
          <p>
            Actively engaged in community service initiatives, including AIDS awareness campaigns,
            afforestation drives, blood donation camps, environmental cleanliness, and disaster management activities.
          </p>
        </div>

        {/* Freelancing */}
        <div className="beyondwork-item">
          <h3>📌 Freelancing</h3>
          <p>
            Supported organizations in enhancing their operations through project management, web development, and content writing.
            Delivered impactful copywriting, marketing materials, and sales copy to support diverse client needs.{" "}
            <a href="https://chetnasatla18.wixsite.com/chetna-satla" target="_blank" rel="noopener noreferrer">
              Portfolio Link
            </a>
          </p>
        </div>

        {/* Volunteering */}
        <div className="beyondwork-item">
          <h3>📌 Volunteering for Non-Profits</h3>
          <p>
            Participated in field visits and research initiatives focused on sustainable development for tribal communities,
            aiming to preserve their unique heritage. Volunteered for various community services including food and book distribution,
            cupcake drives, and winter blanket donations.
          </p>
        </div>

        {/* Badminton */}
        <div className="beyondwork-item">
          <h3>📌 Badminton University Level</h3>
          <p>
            Achieved runner-up status in singles at the university badminton tournament, demonstrating dedication and a competitive spirit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeyondWork;
