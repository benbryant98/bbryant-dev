import React from "react";
import { useState, useEffect } from "react";
import "../css/welcome.css";
import { swashed } from "../layout";
import TextTransition, { presets } from "react-text-transition";

const passions = [
  "programming",
  "design",
  "music",
  "cats",
  "carpentry",
  "fighting games",
  "environmental conservation",
  "volleyball",
  "game design",
  "history",
];

export default function Welcome() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === passions.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <div className="pt-10 text-4xl welcome md:text-5xl md:mt-0 text-white">
      <h1>
        Hi, my name is <span className="text-purple-500">Benjamin Bryant</span>
      </h1>
      <div className="md:flex md:flex-row">
        <h1>
          I am <span className={`${swashed.className}`}>passionate</span> about
        </h1>
        <h1 className={`ml-4 passion`}>
          <TextTransition
            springConfig={presets.slow}
          >
            {passions[index % passions.length]}
          </TextTransition>
        </h1>
      </div>
    </div>
  );
}
