import React from "react";
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {useState} from "react";
export default function App() {

  const [currentTab, handleTabChange] = useState("about");
  
  //method to render current tab value 

  const renderCurrentTab =() => {
    if(currentTab === "About"){
      return <About />;
    }
  }
  return (
    <main>
<Header />
      <About />
      <Projects />
      <Skills />
      <Resume/>
      <Contact />
      <Footer/>
    </main>
  );
}