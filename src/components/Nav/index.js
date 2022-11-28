import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(pages) {

  // const {
  //   setCurrentPage,
  //   currentPage,
  // } = pages;
  
  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentPage);
  // }, [currentPage]);

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