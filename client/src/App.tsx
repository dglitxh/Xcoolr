import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSect";
import About from "./components/AboutSect";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <CardSection />
      <About />
    </div>
  );
}

export default App;
