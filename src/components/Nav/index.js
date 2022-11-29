import React from "react";


function Nav(props) {

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me" className={props.page === "about" ? "active" : ""} onClick={() => props.handleClick("about")}>About Me</a>
        </li>
        <li>
          <a href="#portfolio" className={props.page === "portfolio" ? "active" : ""} onClick={() => props.handleClick("portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#resume" className={props.page === "resume" ? "active" : ""} onClick={() => props.handleClick("resume")}>Resume</a>
        </li>
        <li>
          <a href="#contact-form" className={props.page === "contact" ? "active" : ""} onClick={() => props.handleClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;