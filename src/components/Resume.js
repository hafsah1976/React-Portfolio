import React from "react";
import "../assets/Skills.css";

import { BsCloudDownload } from "react-icons/bs";

import myResume from "../assets/document/Hafsah_Nasreen.pdf";

export default function Resume() {
  return (
    <div>
      <section id="welcome-section" className="bg-gray-900 py-10">
        <div className="container mx-auto text-center">
          <h2 className=" text-3xl font-bold text-white mb-4">
            Thank you for considering my portfolio.
          </h2>
          <div className="download:hover flex justify-center">
            <a href={myResume} className="download text-white hover:text-teal-400" download>
              <BsCloudDownload className="download:hover w-6 h-6 mr-2" /> Download My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
