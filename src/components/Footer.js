import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import '../assets/animation.css'; // Import the CSS file with the animation

function Footer() {
  return (
    <footer className="fade-in bg-gray-800 p-4 text-white">
      <h2 className="text-center text-lg font-semibold">Made by Hafsah Nasreen</h2>

      <ul className="flex justify-center mt-2">
        <li className="mr-4 fade-in:hover">
          <a href="https://github.com/hafsah1976" className="social-link" >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
        </li>
        <li className="mr-4 fade-in:hover">
          <a href="https://www.linkedin.com/in/hafsah-bukhari-66b87654" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
        </li>
        <li className="mr-4 fade-in:hover">
          <a href="https://stackoverflow.com/users/your-user-id" className="social-link">
            <FontAwesomeIcon icon={faStackOverflow} className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
