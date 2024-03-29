import React from "react";
import Nav from "../Nav";



function Header(props) {  

  return (
    <header>
      <div className="name-container">
        <h1>
          <a href="/" className="name-text">
            Constance Strahan
          </a>
        </h1>
      </div>
      <Nav handleClick={props.handleClick} page={props.page}/>
    </header>
  );
}

export default Header;