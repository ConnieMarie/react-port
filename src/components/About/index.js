import React from "react";
import selfImage from "../../assets/self/self-img.jpg";

function About() {
  return (
    <section className="about-me">
      <div  className="about-me-container">  
      <h2 className="pageTitle">About Me</h2>
        
      <img src={selfImage} className="about-me-img" alt="myself" />
      </div>
        <p>
          I grew up in a blue collar family where I learned the only way to stay afloat
          was to work hard and go without. I never really knew what exactly what I wanted 
          to do with my life, but I knew how to put in hard labor and make a dollar stretch.
          I have always loved learning new things and getting my hands dirty. Growing up
          during the tech boom, I have never had much issue keeping up new technologies. I like puzzles,
          problem solving, and figuring out how things work or why they stopped working. After many years 
          of working in mostly male dominated blue collar and service fields, I finally had an epiphany.
          I have often dreamed of gaining an engineering degree or becoming an ASC certified mechanic,
          but what I really love is computers and web technologies. I am not interested in working just to stay afloat,
          I want to move onward and upward. I took a leap into the unknown to find
          out if I can enter a field that inspires me.
        </p>
        
        
    </section>
  );
}

export default About;
