"use client";

import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Welcome from "./components/welcome";
import ParticlesComponent from "./components/background";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  const someRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  };

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <Navbar />
      <Welcome />
      <Projects />
      <About />
      <Contact id="contact" />
      <Footer />
      <ParticlesComponent />
    </div>
  );
}
