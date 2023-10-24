import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <h2 className="text-center text-lg font-semibold">Made by Hafsah Nasreen</h2>

      <ul className="flex justify-center mt-2">
        <Fade cascade triggerOnce>
          <li className="mr-4">
            <a href="https://github.com/hafsah1976" className="social-link">
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
          </li>
          <li className="mr-4">
            <a href="https://www.linkedin.com/in/hafsah-bukhari-66b87654" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/your-user-id" className="social-link">
              <FontAwesomeIcon icon={faStackOverflow} className="w-6 h-6" />
            </a>
          </li>
        </Fade>
      </ul>
    </footer>
  );
}

export default Footer;
