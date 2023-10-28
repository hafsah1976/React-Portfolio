import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleRadiation,
  faDatabase,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import {
  faFreeCodeCamp,
  faNpm,
  faUikit,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGripfire,
  faGithub,
  faGit
} from "@fortawesome/free-brands-svg-icons";
import "../assets/animation.css";

const skills = [

  {name:" HTML5",  link:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5"},
  {name:" CSS3", link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
  {name:" Git & GitHub", link:"https://docs.github.com/en/get-started/getting-started-with-git"},
  {name:" GraphQL",link: "https://graphql.org/learn/"},
  {name:" NodeJS",link:"https://nodejs.org/docs/latest-v16.x/api/"},
  {name:" Express.js", link: "https://expressjs.com/"},
  {name:" JavaScript", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  {name:" jQuery", link: "https://api.jquery.com/"},
  {name:" React", link: "https://legacy.reactjs.org/docs/getting-started.html"},
  {name:" MySQL", link:"https://dev.mysql.com/doc/"},
  {name:" MongoDB", link: "https://www.mongodb.com/docs/"},
  {name:" Template Credits to FreeCodeCamp", link:"https://www.freecodecamp.org/news/build-portfolio-website-react/"},
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
  const iconProps = { icon: faCheck, size: "2x" }

   switch (skill) {
    case " HTML5":
      return <FontAwesomeIcon {...iconProps} icon={faHtml5} style={{ color: "#33D7FF" }}
      />;
    case " CSS3":
      return <FontAwesomeIcon {...iconProps} icon={faCss3} style={{ color: "#0D6FE5" }}/>;
    case " Git & GitHub":
      return <FontAwesomeIcon {...iconProps} icon={faGithub&&faGit} style={{ color: "#33D7FF" }}/>;
    case " GraphQL":
      return (
        <FontAwesomeIcon
          {...iconProps}
          icon={faCircleRadiation}
          style={{ color: "#ba16c5" }}/>
      );
    case " NodeJS":
      return <FontAwesomeIcon {...iconProps} icon={faNodeJs} style={{ color: "#4AE53D" }}/>;
  case " Express.js":
    return<FontAwesomeIcon {...iconProps} icon = {faNpm} style={{ color: "#EA0F13" }}/>;
    case " JavaScript":
      return <FontAwesomeIcon {...iconProps} icon={faJs} style={{ color: "#E2F221" }}/>;
    case " jQuery":
      return <FontAwesomeIcon {...iconProps} icon={faUikit&&faJs} style={{ color: "#33D7FF" }}/>;
    case " React":
      return <FontAwesomeIcon {...iconProps} icon={faReact} style={{ color: "#33D7FF" }}/>;
    case " MySQL":
      return <FontAwesomeIcon {...iconProps} icon={faDatabase} style={{ color: "#F2B725" }}/>;
    case " MongoDB":
      return <FontAwesomeIcon {...iconProps} icon={faLeaf} style={{ color: "#15A224" }}/>;
    case " Template Credits to FreeCodeCamp":
      return <FontAwesomeIcon {...iconProps} icon={faFreeCodeCamp} style={{ color: "#FF6133" }}/>;
    default:
      console.error(`Unsupported skill: ${skill}`);
      return null;
  }
}