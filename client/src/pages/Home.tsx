import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CardSection from "../components/CardSect";
import About from "../components/AboutSect";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CardSection />
      <About />
    </div>
  );
}
