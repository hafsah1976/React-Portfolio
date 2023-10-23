// src/components/About.js

import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex px-10 md:px-20 py-20 md:flex-row flex-col items-center">
        {/* Left Column */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
Hello, I am Hafsah Nasreen.
            <br className="hidden lg:inline-block" />a student at the fullstack web developement bootcamp at George Washington University.
            
          </h1>
          <p className="mb-8 leading-relaxed">
            Learning at bootcamp has been amazing. While I went through a series of emotions during the last weeks of bootcamp, I sincerely enjoyed 
            working on the projects and the assignments.
          </p>
</div>
</section>
