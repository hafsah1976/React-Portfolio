// Import React for creating React components
import React from "react";

// Import myResume, which is a link to the PDF resume file
import Resume from "./assets/document/Hafsah Nasreen.pdf";

// Import icons from various icon libraries, possibly for use in the component
import { BsCloudDownload } from "react-icons/bs"; // Download cloud icon

// Create and export Resume component
export default function Resume() {
  return (
    <div>
      {/* Resume Section */}
      <section id="welcome-section" className="bg-gray-900 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            My Resume
          </h2>
          <div className="flex justify-center">
            <a href={Resume} className="text-white hover:text-gray-400" download>
              <BsCloudDownload className="w-6 h-6 mr-2" /> {/* Download cloud icon */}
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
