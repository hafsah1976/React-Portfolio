import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDatabase, faLeaf} from "@fortawesome/free-solid-svg-icons";
import { faUikit, faHtml5, faCss3, faJs, faReact, faNodeJs, faGripfire,faGithub, faNode} from "@fortawesome/free-brands-svg-icons";
import '../assets/Skills.css';

const skills = [
  {name: "HTML5",  link:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"},
  {name: "CSS3", link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
  {name: "GitHub", link:"https://docs.github.com/en/get-started/getting-started-with-git"},
  {name:"GraphQL",link: "https://graphql.org/learn/"},
  {name:"NodeJS",link:"https://nodejs.org/docs/latest-v16.x/api/"},
  {name: "JavaScript", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  {name: "jQuery", link: "https://api.jquery.com/"},
  {name:"React", link: "https://legacy.reactjs.org/docs/getting-started.html"},
  {name: "MySQL", link:"https://dev.mysql.com/doc/"},
  {name:"MongoDB", link: "https://www.mongodb.com/docs/"},
];

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
        <div className=" flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="p-2 sm:w-1/2 w-full skill-item scaleIn slideIn"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {getSkillIcon(skill.name)}
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </a>
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
    case "GitHub":
      return <FontAwesomeIcon {...iconProps} icon={faGithub} />;
    case "GraphQL":
      return (
        <FontAwesomeIcon
          {...iconProps}
          icon={faNode}
          style={{ color: "#ba16c5" }}
        />
      );
    case "NodeJS":
      return <FontAwesomeIcon {...iconProps} icon={faNodeJs} />;
    case "JavaScript":
      return <FontAwesomeIcon {...iconProps} icon={faJs} />;
    case "jQuery":
      return <FontAwesomeIcon {...iconProps} icon={faUikit&&faJs} />;
    case "React":
      return <FontAwesomeIcon {...iconProps} icon={faReact} />;
    case "MySQL":
      return <FontAwesomeIcon {...iconProps} icon={faDatabase} />;
    case "MongoDB":
      return <FontAwesomeIcon {...iconProps} icon={faLeaf&&faDatabase} />;
    default:
      console.error(`Unsupported skill: ${skill}`);
      return null;
  }
}