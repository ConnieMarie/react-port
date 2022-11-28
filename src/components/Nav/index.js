import React from "react";

function Nav(pages) {

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me" onClick={() => pages.handleClick("about")}>About Me</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => pages.handleClick("portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#resume" onClick={() => pages.handleClick("resume")}>Resume</a>
        </li>
        <li>
          <a href="#contact-form" onClick={() => pages.handleClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;