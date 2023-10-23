import React, { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Navbar(props) {
  // here we are destructuring props to access currentTab and handleTabChange
  const { currentTab, handleTabChange } = props;

  // Updating the document title based on the current tab
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab);
  }, [currentTab]);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          {/* Logo with a link to the "about" section */}
          <a
            href="#about"
            onClick={() => handleTabChange("About")}
            className={
              currentTab === "About"
                ? "nav-link active text-white text-xl ml-3"
                : "nav-link text-gray-300 hover:text-white text-xl ml-3"
            }
          >
            About
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            onClick={() => handleTabChange("Projects")}
            className={
              currentTab === "Projects"
                ? "nav-link active text-white hover:text-white ml-5"
                : "nav-link text-gray-300 hover:text-white ml-5"
            }
          >
            My Work
          </a>
          <a
            href="#skills"
            onClick={() => handleTabChange("Skills")}
            className={
              currentTab === "Skills"
                ? "nav-link active text-white hover:text-white ml-5"
                : "nav-link text-gray-300 hover:text-white ml-5"
            }
          >
            Skills
          </a>
          <a
            href="#resume"
            onClick={() => handleTabChange("Resume")}
            className={
              currentTab === "Resume"
                ? "nav-link active text-white hover:text-white ml-5"
                : "nav-link text-gray-300 hover:text-white ml-5"
            }
          >
            My Resume
          </a>
        </nav>
        {/* Contact me form */}
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
