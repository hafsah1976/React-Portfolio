import React from 'react';
import img from '../assets/images/hop.jpg'; // Import image
import { Fade } from 'react-reveal'; // Import the fade effect from react-reveal

export default function About() {
  return (
    <Fade>
      <section id="about" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto flex px-10 md:px-20 py-20 md:flex-row flex-col items-center">
          {/* Left Column */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I am Hafsah Nasreen.
              <br className="hidden lg:inline-block" />A student at the full-stack web development boot camp at George Washington University.
            </h1>
            <p className="mb-8 leading-relaxed">
              Learning at the boot camp has been amazing. While I went through a series of emotions during the last weeks of boot camp, I sincerely enjoyed working on the projects and the assignments. I am a student at the George Washington University Full-stack Web Development Bootcamp. During this program, I have had the opportunity to work on a variety of assignments and projects, which you can explore here. This portfolio is built with React and showcases a small sample of the work I've completed over the course of the program.
            </p>
          </div>
          {/* Right Column - Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Hafsah Nasreen's Portfolio"
              src={img}
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
