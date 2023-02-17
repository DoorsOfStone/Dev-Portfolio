import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import Skills from "./components/Skills";

import "./styles.css";

function App() {
  return (
    <div className="home w-[screen] min-h-[screen] bg-black ">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
