import React from "react";
import selfImage from "../../assets/self/self-img.jpg";

function About() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div>        
        <p>
          This will be the about me section where I get very uncomfortable
          because I hate describing myself. I have no idea what to write here. I
          love my life, but I feel others would be bored reading about it. I
          love my partner and my pets and my days are consumed by caring for
          them and this new venture I am on to learn something I will hopefully
          be good at and find financial independence.
        </p>
        <img src={selfImage} className="about-me-img" alt="myself" />
      </div>
    </section>
  );
}

export default About;
