import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid"; 

export default function Navbar() {
  return (
    <header className="">
      <div className="">
        <a className="">
          {/* Logo with a link to the "about" section */}
          <a href="#about" className="">
            Hafsah Khan
          </a>
        </a>
        <nav className="">
          {/* Navigation links */}
          <a href="#projects" className="">
            My Work
          </a>
          <a href="#skills" className="">
            Skills
          </a>
          <a href="#" className="">
            
          </a>
        </nav>
        <a
          href="#contact"
          className="">
          Contact Me
          <ArrowRightIcon className="" />
        </a>
      </div>
    </header>
  );
}