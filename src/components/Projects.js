//import projects.js

import React from "react";
import { projects } from "../data"; // to get data from the projects
import { CodeIcon } from "@heroicons/react/solid"; // to add icons

export default function Projects() {
  return (
    <section id="projects" className="">
      <div className="">
        <div className="">
          <CodeIcon className="" />
          <h1 className="">
            See What I've built
          </h1>
          <p className="">
            Here are some of the projects that I have worked on, you can check them out and see more details about each one on my repo.
          </p>
        </div>
        <div className="">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="">
              <div className="">
                <img
                  alt=""
                  className=""
                  src={project.image}
                />
                <div className="">
                  <h2 className="">
                    {project.subtitle}
                  </h2>
                  <h1 className="">
                    {project.title}
                  </h1>
                  <p className="">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}