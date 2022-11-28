import React from "react";
import Nav from "../Nav";

function Header(page) {

  return (
    <header>
      <div>
        <h1>
          <a href="/" className="name-text">
            Constance Strahan
          </a>
        </h1>
      </div>
      <Nav handleClick={page.handleClick} />
    </header>
  );
}

export default Header;