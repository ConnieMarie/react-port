import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props) {

  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  
    useEffect(() => {
      document.title = capitalizeFirstLetter(currentPage.name);
    },[currentPage]);

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me" onClick={() => props.handleClick("about")}>About Me</a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => props.handleClick("portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#resume" onClick={() => props.handleClick("resume")}>Resume</a>
        </li>
        <li>
          <a href="#contact-form" onClick={() => props.handleClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;