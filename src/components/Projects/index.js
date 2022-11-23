import React from "react";

function Projects() {
    return (
        <section className="my-work">
  <h4>My Work</h4><br />
  <article>
    <a className="project-display" href="https://conniemarie.github.io/run-buddy/">
      <img id="first-project-img" src="./assets/images/run-buddy_img.png" alt="screenshot of runbuddy landing page" run buddy />
      <div className="project-label">
        <h5>Run Buddy</h5>
        <p>HTML/CSS</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/horiseon-challenge/">
      <img className="my-work-img" src="./assets/images/horiseon_img.png" alt="screenshot of horiseon landing page" horiseon />
      <div className="project-label">
        <h5>Horiseon</h5>
        <p>Refactor</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/portfolio/">
      <img className="my-work-img" src="./assets/images/portfolio_img.png" alt="screenshot of my portfolio landing page" portfolio />
      <div className="project-label">
        <h5>Portfolio</h5>
        <p>HTML/CSS</p>
      </div>   
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/weather-dashboard/">
      <img className="my-work-img" src="./assets/images/weatherdash-img.png" alt="screenshot of my weather app page" weather dashboard />
      <div className="project-label">
        <h5>Weather Dashboard</h5>
        <p>HTML/CSS/JS/API</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://conniemarie.github.io/trivia/">
      <img className="my-work-img" src="./assets/images/cyberjam-img.png" alt="screenshot of trivia page" cyber jam trivia />
      <div className="project-label">
        <h5>Cyber Jam Trivia</h5>
        <p>HTML/CSS/JS/API</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://github.com/shanicesauce/enthusiast">
      <img className="my-work-img" src="./assets/images/enthusiast-img.png" alt="screenshot of social app" enthusiast />
      <div className="project-label">
        <h5>Enthusiast</h5>
        <p>HTML/CSS/JS/MySQL/Express</p>
      </div>
    </a>
  </article>
  <article className="project-display">
    <a href="https://github.com/ConnieMarie/team-profile-generator">
      <img className="my-work-img" src="./assets/images/team-profile-img.png" alt="screenshot of team-profile-generator" team profile generator />
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