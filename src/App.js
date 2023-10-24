import React from "react";
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from "react";

export default function App() {

  const [currentTab, handleTabChange] = useState("About"); // Fixed the initial value case
  
  // Method to render the current tab value
  const renderCurrentTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Projects") {
      return <Projects />;
    }
    if (currentTab === "Skills") {
      return <Skills />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  return (
    <>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <main>
        {renderCurrentTab()}
      </main>
      <Footer />
    </>
  );
}
