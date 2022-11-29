import React from "react";
import resumeQR from "../../assets/resume/resumeQR.png";

function Resume() {
  return (
    <section>
      <div className="qr-container">
        <h2 className="pageTitle">Resume</h2>
        <a href="https://docs.google.com/document/d/11RKxzqlhIDgkm128CqroQ3oyR-LCtfrKX2ykxZUhIWU/edit?usp=sharing">
          <img src={resumeQR} alt="resume QR code" />
        </a>
        <p>
          Please scan or click the above QR code to view or download my Resume
        </p>
      </div>
      <div className="resume-proficiencies">
      <h3>
        During my studies in the UTSA Bootcamps Full Stack Development course I
        have become proficient in the following technologies:
      </h3>
      <ul>
        <p>Front-end Languages and Frameworks</p>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <p>Backend Technologies and Frameworks</p>
        <li>Express.js</li>
        <li>Node.js</li>
        <p>Database Management Systems</p>
        <li>SQL</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>IndexedDB</li>
        <p>Version Control</p>
        <li>Git</li>
        <li>GitHub</li>
        <p>Web Hosting Platforms</p>
        <li>Heroku</li>
        <li>GitHub Pages</li>
      </ul>
      </div>
    </section>
  );
}

export default Resume;
