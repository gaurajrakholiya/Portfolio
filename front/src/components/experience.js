import "./experience.css";
import React from "react";

function Experience() {
  return (
    <>
      <section className="aboutme" id="experience">
        <h1 className="heading">About me</h1>
        <div className="information">
          <div className="paragraph">
            <div>
            <p>
              Hello! My name is Gauraj and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2022 
            </p>
            <p>
              "I am currently pursuing computer engineer at L.D.R.P.-ITR , gandhinagar.
               Throughout my academic journey, I have gained
              a solid foundation in computer science principles and a strong
              understanding of various programming languages, algorithms, and
              data structures. My coursework has equipped me with the knowledge
              necessary to tackle complex problems and find innovative
              solutions."
            </p>
            <p>

            </p>
          </div>
          <ul className="ulist">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li></li>
          </ul>
          </div>
          <div>
            <img src="photo.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
