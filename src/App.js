import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./App.css";


function App() {

const [currentPage, setCurrentPage] = useState('about');


  const handleClick = (pageState) => {
    setCurrentPage(pageState)
  }

  return (
    <div>
      <Header handleClick={handleClick} page={currentPage} />
      <main>
        {(() => {
          switch (currentPage) {
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
