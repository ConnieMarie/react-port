import React from "react";
import Nav from "../Nav";

function Header() {
  

  // const [currentItem, setCurrentItem] = useState(navigations[0]);

  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <header>
      <div>
        <h1>
          <a href="/" className="name-text">
            Constance Strahan
          </a>
        </h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
