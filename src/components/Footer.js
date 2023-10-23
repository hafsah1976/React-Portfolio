import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <h2 className="text-center text-lg font-semibold">Made by Hafsah Nasreen</h2>

      {/* Social media links */}
      <ul className="flex justify-center mt-2">
        <li className="mr-4">
          <a
            href="https://github.com/hafsah1976"
            className="social-link"
          >
            <VscGithubAlt className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hafsah-bukhari-66b87654/"
            className="social-link"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;