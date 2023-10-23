import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid"; //for badges and icons
import { skills } from "../data"; //import projects data

export default function Skills() {
  return (
    <section id="skills" className="">
      <div className="">
        <div className="">
          <ChipIcon className="" />
          <h1 className="">
            Skills & Technologies
          </h1>
          <p className="">
            Here's a list of skills and technologies that I've learned at GW Fullstack Web-Dev bootcamp.
          </p>
        </div>
        <div className="">
          {skills.map((skill) => (
            <div key={skill} className="">
              <div className="">
                <BadgeCheckIcon className="" />
                <span className="">
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
