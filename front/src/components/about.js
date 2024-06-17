import "./about.css";
import React from "react";

function About() {
  return (
    <>
    
      <section className="about" id="about">
        <div className="intro">
          <h1>Hi, my name is</h1>
        </div>
        <div>
          <h2 className="big2">Gauraj Rakholiya</h2>
        </div>
        <div>
          <h3 className="big3"> I build things for the web.</h3>
        </div>
        <div className="para">
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at
          </p>
        </div>
        {/* <div><button>sgfd</button></div> */}
      </section>
    </>
  );
}

export default About;
