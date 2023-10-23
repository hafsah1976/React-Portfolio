// src/components/About.js

import React from 'react';

export default function About() {
  return (
    <section id="about" className="">
      <div className="">
        {/* Left Column */}
        <div className="">
          <h1 className="">
Hello, I am Hafsah Nasreen.
            <br className="" />a student at the fullstack web developement bootcamp at George Washington University.
            
          </h1>
          <p className="">
            Learning at bootcamp has been amazing. While I went through a series of emotions during the last weeks of bootcamp, I sincerely enjoyed 
            working on the projects and the assignments.
          </p>
<div className="">
    <a
    href="#projects"
    className="">
        
    </a>
            <a
              href="#contactme"
              className="">
              Work With Me
            </a>
          </div>
        </div>
        <div className="">
          <img
            className=""
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}