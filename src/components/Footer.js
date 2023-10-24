import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <h2 className="text-center text-lg font-semibold">Made by Hafsah Nasreen</h2>

      <ul className="flex justify-center mt-2">
        <Slide direction="up" delay={100} triggerOnce>
          <li className="mr-4">
            <a href="https://github.com/hafsah1976" className="social-link">
              <VscGithubAlt className="w-6 h-6" />
            </a>
          </li>
        </Slide>
        <Slide direction="up" delay={300} triggerOnce>
          <li className="mr-4">
            <a href="https://www.linkedin.com/in/hafsah-bukhari-66b87654" className="social-link">
              <AiOutlineLinkedin className="w-6 h-6" />
            </a>
          </li>
        </Slide>
        <Slide direction="up" delay={500} triggerOnce>
          <li>
            <a href="https://stackoverflow.com/users/your-user-id" className="social-link">
              <FaStackOverflow className="w-6 h-6" />
            </a>
          </li>
        </Slide>
      </ul>
    </footer>
  );
}

export default Footer;