import React from "react";
import runBuddy from '../../assets/projects/run-buddy_img.png';
import horiseon from '../../assets/projects/horiseon_img.png';
import portfolio from '../../assets/projects/portfolio_img.png';
import weatherDash from '../../assets/projects/weatherdash-img.png';
import cyberJam from '../../assets/projects/cyberjam-img.png';
import enthusiast from '../../assets/projects/enthusiast-img.png';
import teamProfile from '../../assets/projects/team-profile-img.png';

function Projects() {

    return (
        <section className="project" id="portfolio">
          <h2 className="projectTitle">Portfolio</h2>
  <article>
    <a className="project-display" href="https://conniemarie.github.io/run-buddy/">
      <img id="first-project-img" src={runBuddy} alt="screenshot of runbuddy landing page" run buddy />
      <div className="project-label">
        <h5>Run Buddy</h5>
        <p>HTML/CSS</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/horiseon-challenge/">
      <img className="project-img" src={horiseon} alt="screenshot of horiseon landing page" horiseon />
      <div className="project-label">
        <h5>Horiseon</h5>
        <p>Refactor</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/portfolio/">
      <img className="project-img" src={portfolio} alt="screenshot of my portfolio landing page" portfolio />
      <div className="project-label">
        <h5>Portfolio</h5>
        <p>HTML/CSS</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/weather-dashboard/">
      <img className="project-img" src={weatherDash} alt="screenshot of my weather app page" weather dashboard />
      <div className="project-label">
        <h5>Weather Dashboard</h5>
        <p>HTML/CSS/JS/API</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/trivia/">
      <img className="project-img" src={cyberJam} alt="screenshot of trivia page" cyber jam trivia />
      <div className="project-label">
        <h5>Cyber Jam Trivia</h5>
        <p>HTML/CSS/JS/API</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://github.com/shanicesauce/enthusiast">
      <img className="project-img" src={enthusiast} alt="screenshot of social app" enthusiast />
      <div className="project-label">
        <h5>Enthusiast</h5>
        <p>HTML/CSS/JS/MySQL/Express</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://github.com/ConnieMarie/team-profile-generator">
      <img className="project-img" src={teamProfile} alt="screenshot of team-profile-generator" team profile generator />
      <div className="project-label">
        <h5>Team Profile Generator</h5>
        <p>HTML/CSS/JS/API/Express</p>
      </div>
    </a>
  </article>
</section>

    )
}

export default Projects;