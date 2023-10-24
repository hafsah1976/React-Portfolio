import React from "react";
import { VscGithubAlt } from "react-icons/vsc"; // github icon
import { AiOutlineLinkedin } from "react-icons/ai"; //linked in
import { FaStackOverflow } from "react-icons/fa"; // Import the Stack Overflow icon.

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
        <li className="mr-4"> {/* Added margin-right here to space out icons */}
          <a
            href="https://www.linkedin.com/in/hafsah-bukhari-66b87654/"
            className="social-link"
          >
            <AiOutlineLinkedin className="w-6 h-6" />
          </a>
        </li>
        <li> {/* No margin here */}
          <a href="https://stackoverflow.com/users/your-user-id" className="social-link">
            <FaStackOverflow className="w-6 h-6" /> {/* Using the Stack Overflow icon here */}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;