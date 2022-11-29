import React from "react";
import Nav from "../Nav";



function Header(props) {  
  console.log(props)

  return (
    <header>
      <div>
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