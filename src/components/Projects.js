import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome code icon.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Odd from '../assets/images/odd-quote-out.png'; 
import Weather from '../assets/images/weather-dashboard.png'; 
import Jate from '../assets/images/JATE-LAUNCHED.png'; 
import LogoMaker from '../assets/images/svg-logo-maker.png'; 
import ApiSocial from '../assets/images/No-sql-socialnet-api.png'; 
import MvcTechBlog from '../assets/images/the-tech-blog.png'; 

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FontAwesomeIcon icon={faCode} className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            See What I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects that I have worked on. You can check them out and see more details about each one on my repo.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a href={project.link} key={project.title} className="sm:w-1/2 w-full p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

//moving data into the projects component itself as I understand 
//dynamic imports statement inside your projects array is not a valid usage in JavaScript. 
//Dynamic imports are asynchronous and cannot be used within an object or array definition.
//therefore using static imports.

const projects = [
  {
    title: "Odd Quote Out",
    subtitle: "HTML, CSS, & JS",
    description:
      "A simple quiz app, the first group project.",
    image: Odd,
    link: "https://iab-19.github.io/odd_quote_out_kanye_edition/",
  },
  {
    title: "Weather Dashboard",
    subtitle: "HTML, CSS, and JS",
    description:
      "A weather dashboard web where a user can look up weather for a city. This app uses the openweather API to fetch weather upon the submission of the user's search input.",
    image: Weather, 
    link: "https://hafsah1976.github.io/Weather-Dashboard/",
  },
  {
    title: "J.A.T.E",
    subtitle: "A PWA text editor",
    description:
      "J.A.T.E is a Progressive Web Application (PWA) designed to provide users with a versatile and rich text editor experience.",
    image: Jate, 
    link: "https://stark-depths-32465-9c6c904f031b.herokuapp.com/",
  },
  {
    title: "SVG-LOGO-MAKER",
    subtitle: "Node.js - Inquirer prompts",
    description:
      "A CLI that asks users for their input on the shape, text, and color of the logo, and generates that logo.",
    image: LogoMaker, 
    link: "https://github.com/hafsah1976/SVG-LOGO-GENERATOR",
  },
  {
    title: "NoSQL-Social-Network API",
    subtitle: "NoSQL, MongoDB and Mongoose",
    description:
      "This is a backend application where I performed CRUD operations for a Social-Network website.",
    image: ApiSocial, 
    link: "https://github.com/hafsah1976/NoSQL-Social-Network-API",
  },
  {
    title: "A Tech Blog",
    subtitle: "MVC",
    description:
      "A CMS-style Tech blog developed using the MVC framework, where users can sign up, make posts, and add comments to other posts.",
    image: MvcTechBlog,
    link: "https://github.com/hafsah1976/A-Tech-Blog",
  },
];
