import React from "react";
import gitHub from "../../assets/socials/github-logo.png";
import linkedIn from "../../assets/socials/linkedin_logo.png";
import stackOverflow from "../../assets/socials/stackoverflow-logo.png"
import twitter from "../../assets/socials/twitter-logo.png";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ConnieMarie">
        <img className="social-media" src={gitHub} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/constance-strahan-89397011a">
        <img className="social-media" src={linkedIn} alt="linkedin" />
      </a>
      <a href="https://stackoverflow.com/users/19959737/conniemarie">
        <img className="social-media" src={stackOverflow} alt="linkedin" />
      </a>
      <a href="https://twitter.com/strahan_connie">
        <img className="social-media" src={twitter} alt="twitter" />
      </a>
    </div>
  );
}

export default Footer;
