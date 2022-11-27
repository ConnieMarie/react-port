import React, {useState} from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    // const [navigations] = useState([
    //     {
    //         name: 'about Me'
    //     },
    //     {
    //         name: 'portfolio'
    //     },
    //     {
    //         name: 'resume'
    //     },
    //     {
    //         name: 'contact'
    //     }
    // ])
    // const {
    //     // navigations = [],
    //     // setCurrentItem,
    //     // currentItem,
    //     contactSelected,
    //     setContactSelected,
    //   } = props;
    
      const [contactSelected, setContactSelected] = useState(false);

 

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentItem.name);
//   }, [currentItem]);

  return (
    <nav>
      <ul>
        <li>
          <a href="#about-me" onClick={() => setContactSelected(false)}>
            About me
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => setContactSelected(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => setContactSelected(false)}>
            Resume
          </a>
        </li>
        <li className={`${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

        {/* {navigations.map((navigations) => (
          <li
            className={`${currentItem.name === navigations.name && !contactSelected && 'navActive'}`}
            key={navigations.name}
          >
            <span
              onClick={() => {
                setCurrentItem(navigations);
                setContactSelected(true);
              }}
            >
              {capitalizeFirstLetter(navigations.name)}
            </span>
          </li>
        ))} */}
      </ul>
    </nav>
  );
}

export default Nav;
