import React from "react";  // Import the React library to define React components.
import { skills } from "../data";  // Import the 'skills' array from an external data source.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  // Import the FontAwesomeIcon component.
import { faCheck } from "@fortawesome/free-solid-svg-icons";  // Import the 'faCheck' icon from FontAwesome.
import { faHtml5, faCss3, faJs, faReact, faNode, faDatabase, faGripfire } from "@fortawesome/free-brands-svg-icons";  // Import various icons from FontAwesome.
import './Skills.css';  // Import the CSS file for styling this component.

// Define a functional React component named 'Skills'.
export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-10">  {/* Section for displaying skills */}
      <div className="container px-5 mx-auto">  {/* Container for centering content */}
        <div className="text-center mb-20">  {/* Center-align the content */}
          <FontAwesomeIcon icon={faGripfire} className="w-10 inline-block mb-4" />  {/* Display a FontAwesome icon */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies  {/* Display a title */}
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's a list of skills and technologies that I've learned at GW Fullstack Web-Dev bootcamp.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">  {/* Flex container for skills list */}
          {skills.map((skill, index) => (  // Map through the 'skills' array and render each skill
            <div key={index} className="p-2 sm:w-1/2 w-full">  {/* Individual skill item */}
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">  {/* Skill item container */}
                {getSkillIcon(skill)}  {/* Display the skill icon */}
                <span className="title-font font-medium text-white">
                  {skill}  {/* Display the skill name */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getSkillIcon(skill) {
  // Define the default icon properties
  const iconProps = { icon: faCheck, size: "2x" };

  // Check the skill and return the corresponding FontAwesome icon
  switch (skill) {
    case "HTML5":
      return <FontAwesomeIcon {...iconProps} icon={faHtml5} />;
    case "CSS3":
      return <FontAwesomeIcon {...iconProps} icon={faCss3} />;
    case "JavaScript":
      return <FontAwesomeIcon {...iconProps} icon={faJs} />;
    case "React":
      return <FontAwesomeIcon {...iconProps} icon={faReact} />;
    case "Node":
      return <FontAwesomeIcon {...iconProps} icon={faNode} />;
    case "MySQL":
      return <FontAwesomeIcon {...iconProps} icon={faDatabase} />;
    case "GraphQL":
      return <FontAwesomeIcon {...iconProps} icon={faGripfire} />;
    default:
      // Log an error message if the skill is unsupported
      console.error(`Unsupported skill: ${skill}`);
      // Return a default icon (a checkmark) for unsupported skills
      return <FontAwesomeIcon {...iconProps} />;
  }
}
