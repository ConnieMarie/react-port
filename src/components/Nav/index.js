import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";



function Nav(props) {

  // const {
  //   pages = [],
  //   setCurrentPage,
  //   currentPage,
  // } = props;
  
  //   useEffect(() => {
  //     document.title = capitalizeFirstLetter(currentPage.name);
  //   },[currentPage]);

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me" activeclassname="active" onClick={() => props.handleClick("about")}>About Me</a>
        </li>
        <li>
          <a href="#portfolio" activeclassname="active" onClick={() => props.handleClick("portfolio")}>Portfolio</a>
        </li>
        <li>
          <a href="#resume" activeclassname="active" onClick={() => props.handleClick("resume")}>Resume</a>
        </li>
        <li>
          <a href="#contact-form" activeclassname="active" onClick={() => props.handleClick("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;