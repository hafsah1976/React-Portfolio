import React from "react";
import Nav from "../Navigation";
import img from "../../assets/images/hop.jpg"; // Correct the image path

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      {/* Header section */}
      <section>
        <header className="flex items-center justify-between px-4 py-2 bg-blue-500">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Hafsah Nasreen's Portfolio
            </h1>
          </div>
          <div>
            <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
          </div>
        </header>
      </section>

      {/* Hero section */}
      <section className="bg-gray-200 p-4">
        <div className="hero-cta text-center">
          <img
            src={img}
            className="my-2 w-full rounded-lg"
            alt="cover"
          />
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p className="text-gray-700">
            Welcome to Hafsah Nasreen's portfolio page. I am a student at the George Washington University Fullstack Web Development Bootcamp. During this program, I have had the opportunity to work on a variety of assignments and projects, which you can explore here. This portfolio is built with React and showcases a small sample of the work I've completed over the course of the program.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
