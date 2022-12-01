import React from "react";
import runBuddy from "../../assets/projects/run-buddy_img.png";
import ohSnap from "../../assets/projects/oh-snap-img.png";
import weatherDash from "../../assets/projects/weatherdash-img.png";
import cyberJam from "../../assets/projects/cyberjam-img.png";
import enthusiast from "../../assets/projects/enthusiast-img.png";
import textEditor from "../../assets/projects/text-editor-img.png";
import techieTalk from "../../assets/projects/techietalkss1.png";
import contactCard from "../../assets/projects/contact-card-img.png";
import gitHub from "../../assets/socials/github-logo.png";

function Projects() {
  return (
    <section className="project" id="portfolio">
      <h2 className="pageTitle">Portfolio</h2>
      <div className="project-container">
      <article className="project-display">
          <a href="https://github.com/ConnieMarie/react-port">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={ohSnap}
            alt="screenshot of J.A.T.E landing page"
          />
          <a href="https://conniemarie.github.io/photo-port">
            <div className="project-label">
              <h5>Oh Snap!</h5>
              <p>HTML/CSS/JS/React</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/PWA-text-editor">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={textEditor}
            alt="screenshot of J.A.T.E landing page"
          />
          <a href="https://agile-forest-22662.herokuapp.com/">
            <div className="project-label">
              <h5>J.A.T.E</h5>
              <p>PWA/Express/Webpack</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/contact-card">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={contactCard}
            alt="screenshot of team-profile-generator"
          />
          <a href="https://blooming-journey-73503.herokuapp.com/">
            <div className="project-label">
              <h5>Contact Card</h5>
              <p>PWA/Express/Webpack</p>
            </div>
          </a>
        </article>
        
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/enthusiast">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={enthusiast}
            alt="screenshot of social app"
          />
          <a href="https://afternoon-plateau-77681.herokuapp.com/">
            <div className="project-label">
              <h5>Enthusiast</h5>
              <p>HTML/CSS/JS/MySQL/Express</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/techie-talk-tech-blog">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={techieTalk}
            alt="screenshot of techie talk landing page"
          />
          <a href="https://morning-spire-98359.herokuapp.com/">
            <div className="project-label">
              <h5>Techie Talk</h5>
              <p>MVC/MySQL/Express</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/cyber-jam-trivia">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={cyberJam}
            alt="screenshot of trivia page"
          />
          <a href="https://conniemarie.github.io/trivia/">
            <div className="project-label">
              <h5>Cyber Jam Trivia</h5>
              <p>HTML/CSS/JS/API</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/weather-dashboard">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={weatherDash}
            alt="screenshot of my weather app page"
          />
          <a href="https://conniemarie.github.io/weather-dashboard/">
            <div className="project-label">
              <h5>Weather Dashboard</h5>
              <p>HTML/CSS/JS/API</p>
            </div>
          </a>
        </article>
        <article className="project-display">
          <a href="https://github.com/ConnieMarie/run-buddy">
            <img className="gitHub-repo" src={gitHub} alt="github logo" />
          </a>
          <img
            className="project-img"
            src={runBuddy}
            alt="screenshot of runbuddy landing page"
          />
          <a href="https://conniemarie.github.io/run-buddy/">
            <div className="project-label">
              <h5>Run Buddy</h5>
              <p>HTML/CSS</p>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Projects;
