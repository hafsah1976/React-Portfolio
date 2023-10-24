import React from "react";
import { skills } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3, faJs, faReact, faNode, faGripfire } from "@fortawesome/free-brands-svg-icons";
import '../assets/Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 text-white py-10 fadeInUp">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <FontAwesomeIcon icon={faGripfire} className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 fadeInUp">
            Skills & Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto fadeInUp">
            Here's a list of skills and technologies that I've learned at GW Fullstack Web-Dev bootcamp.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full skill-item scaleIn slideIn">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {getSkillIcon(skill)}
                <span className="title-font font-medium text-white">
                  {skill}
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
  const iconProps = { icon: faCheck, size: "2x" };

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
    case "MongoDB":
      return <FontAwesomeIcon {...iconProps} icon={faDatabase && faLeaf} />;
    default:
      console.error(`Unsupported skill: ${skill}`);
      return null;
  }
}