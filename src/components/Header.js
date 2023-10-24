import React, { useEffect } from "react";
// import img from "../assets/images/hop.jpg"; // Import image
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Header(props) {
  // Destructuring props to access currentTab and handleTabChange
  const { currentTab, handleTabChange } = props;

  // Use useEffect to update the document title based on the current tab
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab);
  }, [currentTab]);

  return (
    <div>
      {/* Header section */}
      <section>
        <header className="absolute flex items-center md:sticky justify-between px-4 py-2 bg-gray-800">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Hafsah Nasreen's Portfolio
            </h1>
          </div>
          <div className="flex justify-center">
          <a
  href="#about"
  onClick={() => handleTabChange("About")}
  className={
    currentTab === "About"
      ? "inline-flex nav-link active text-white bg-teal-600 border-0 py-2 px-6 rounded text-lg"
      : "inline-flex text-white hover:bg-gray-500 rounded text-lg"
  }
>
  About Me
</a>
            <a
              href="#contact"
              onClick={() => handleTabChange("Contact")}
              className="ml-4 inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={() => handleTabChange("Projects")}
              className="ml-4 inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
            <a
              href="#skills"
              onClick={() => handleTabChange("Skills")}
              className="ml-4 inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              Skills Gained
            </a>
            <a
              href="#resume"
              onClick={() => handleTabChange("Resume")}
              className="ml-4 inline-flex text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 hover:text-white rounded text-lg"
            >
              My Resume
            </a>
          </div>
        </header>
      </section>

      {/* Hero section */}
      <section className="bg-gray-200">
        <div className="hero-cta">
          {/* <img src={img} className="my-2 w-32 h-auto" alt="thumbnail" /> */}
          {/* You can add text here */}
          <p className="text-gray-700">
            {/* Add any additional information here */}
          </p>
        </div>
      </section>
    </div>
  );
}
