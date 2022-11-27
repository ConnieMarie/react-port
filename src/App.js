import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";
// import { render } from "@testing-library/react";

function App() {
  
  const [pages] = useState([
    {
        name: 'about'
    },
    {
        name: 'portfolio'
    },
    {
        name: 'resume'
    },
    {
        name: 'contact'
    }
])

  const [page, setPage] = useState(pages[0]);
  const handleClick = (pageState) => {
    setPage(pageState)
  }

  return (
    <div>
      <Header /> 
      <main>
        {(() => {
          switch (page) {
            case 'about':
              return <About handleClick={handleClick} />
            case 'portfolio':
              return <Projects handleClick={handleClick} />
            case 'resume':
              return <Resume handleClick={handleClick} />
            case 'contact':
              return <ContactForm handleClick={handleClick} />
            default:
              return <About />
          }
        })()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
