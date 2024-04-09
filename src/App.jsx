import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ConnectWithMe from "./Components/ConnectWithMe";

function App() {
  return (
    <div className="font-mono">
      <Header />
      <Hero />
      <Info />
      <Skills />
      <Projects />
      <ConnectWithMe />
      <Footer />
    </div>
  );
}

export default App;
