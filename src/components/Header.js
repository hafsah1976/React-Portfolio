import React from "react";
import Nav from "../Navigation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      {/* Header section */}
      <section>
        <header className="">
          <div>
            <h1 className="">
              Hafsah Nasreen's Portfolio
            </h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>

