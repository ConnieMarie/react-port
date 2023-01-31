import React from "react";

function Resume() {
  return (
    <section>
      <div className="qr-container">
        <h2 className="pageTitle">Resume</h2>
        <a href="https://drive.google.com/file/d/1hklO9Bfuv0fgHgWYYQtMem9Yoq44VfOO/view?usp=sharing">
        <p>
          Please click here to view or download my resume
        </p>
        </a>
        
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
