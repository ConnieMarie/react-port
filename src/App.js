import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="Portfolio">
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
