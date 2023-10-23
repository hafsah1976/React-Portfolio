import React from 'react';

export default function About() {

  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex px-10 md:px-20 py-20 md:flex-row flex-col items-center">
        {/* Left Column */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {/* Your introduction */}
            Hello, I am Hafsah Nasreen.
            <br className="hidden lg:inline-block" />a student at the fullstack web development bootcamp at George Washington University.
          </h1>
          <p className="mb-8 leading-relaxed">
            {/* Description of your experience */}
            Learning at the bootcamp has been amazing. While I went through a series of emotions during the last weeks of bootcamp, I sincerely enjoyed working on the projects and the assignments.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Work
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Skills Gained
            </a>
            <a
              href="#resume" 
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Resume
            </a>
          </div>
        </div>
        {/* Right Column - Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./programacion.gif"
          />
        </div>
      </div>
    </section>
  );
}
