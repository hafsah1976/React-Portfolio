import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid"; 

export default function Navigation() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          {/* Logo with a link to the "about" section */}
          <a href="#about" className="ml-3 text-xl">
            Hafsah Khan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {/* Navigation links */}
          <a href="#projects" className="mr-5 hover:text-white">
            My Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* Link to download my resume */}
          <a href="#" className="mr-5 hover:text-white">
            My Resume
          </a>
        </nav>
        {/*Contact me form*/}
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}