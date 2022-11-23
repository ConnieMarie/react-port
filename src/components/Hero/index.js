import React from "react";

function Hero() {
    return (
        <section className="hero">
  <div className="hero-text">
    <h1>Constance Strahan</h1>
    <p>Web Developer</p>
    <div>
      <a href="https://github.com/ConnieMarie">
        <img className="social-media" src="./assets/images/github-logo.png" alt='github' />
      </a>
      <a href="https://www.linkedin.com/in/constance-strahan-89397011a">
        <img className="social-media" src="./assets/images/linkedin_logo.png" alt='linkedin' />
      </a>
      <a href="https://twitter.com/strahan_connie">
        <img className="social-media" src="./assets/images/twitter-logo.png" alt='twitter' />
      </a>
    </div>
  </div>
</section>

    )
}

export default Hero;