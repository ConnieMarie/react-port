import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
// import Projects from "./components/Projects";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
          <ContactForm />
        )}

        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
