import React from "react";
import { useState } from "react";
import "../css/about.css";

export default function About() {
  const [toggle, setToggle] = useState("hidden");
  const [rotate, setRotate] = useState("-rotate-90");
  const [bracket, setBracket] = useState("visible");

  const handleClick = () => {
    if (toggle === "visible") {
      setToggle("hidden");
      setRotate("-rotate-90");
      setBracket("visible");
      return;
    }
    setToggle("visible");
    setRotate("rotate-0");
    setBracket("hidden");
  };

  return (
    <div className="aboutContainer text-white" id='about'>
      <h1
        data-text="ABOUT ME"
        className="section-header text-reflect flex justify-center text-5xl md:text-6xl text-slate-100 opacity-80 relative m-5 top-3"
      >
        ABOUT ME
      </h1>

      <div className="py-10 about-body text-xl">
        <div>
          <p className="m-3">
            <span className="text-sky-600">const</span>{" "}
            <span className="text-yellow-200">benjaminBryant</span> = &#123;
          </p>
          <p className="ml-6">
            <span className="text-sky-300">name:</span>{" "}
            <span className="text-yellow-700">'Benjamin Bryant'</span>,{" "}
          </p>
          <p className="ml-6">
            {" "}
            <span className="text-sky-300">birthday:</span>{" "}
            <span className="text-yellow-700">'April 13'</span>,
          </p>
          <p className="ml-6">
            {" "}
            <span className="text-sky-300">email: </span>
            <a href="mailto:bryantbc98@gmail.com?subject=General Inquiry">
              <span className="text-yellow-700">'bryantbc98@gmail.com'</span>,
            </a>
          </p>

          {/* Experience section */}
          <div className="experience">
            <p className="ml-6">
              <span className="text-sky-300">workExperience:</span> &#123;
            </p>
            <p className="ml-9">
              <span className="text-green-400">position:</span>{" "}
              <span className="text-yellow-700">
                'Quality Assurance Technician'
              </span>
              ,{" "}
            </p>
            <p className="ml-9">
              <span className="text-green-400">company:</span>{" "}
              <span className="text-yellow-700">'TECHEAD'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-green-400">duration:</span>{" "}
              <span className="text-yellow-700">'2020-2022'</span>,{" "}
            </p>
          </div>
          <p className="ml-6"> &#125;,</p>

          {/* Education section */}
          <p className="ml-6">
            <span className="text-sky-300">education:</span> &#123;
          </p>
          <div className="education">
            <p className="ml-9">
              <span className="text-green-400">university:</span>{" "}
              <span className="text-yellow-700">'University of Richmond'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-green-400">certificate:</span>{" "}
              <span className="text-yellow-700">'FullStack Development'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-green-400">graduationDate:</span>{" "}
              <span className="text-yellow-700">'August 7, 2023'</span>,{" "}
            </p>
          </div>
          <p className="ml-6"> &#125;,</p>

          {/* Skills section */}
          <div className="flex">
            <p
              className={`cursor-pointer mr-3 text-fuchsia-500 ${rotate}`}
              onClick={handleClick}
            >
              &#8910;
            </p>
            <p className="">
              <span className="text-sky-300">skills:</span> &#91;{" "}
              <span className={bracket}>... &#93;,</span>
            </p>
          </div>

          <div className={`${toggle}`}>
            <p className="ml-9">
              <span className="text-yellow-700">'HTML/CSS/JS'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Node.js'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Bootstrap/Tailwind'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Webpack'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'npm/yarn'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'PWA'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'GIT'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Firebase'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'RWD/W3C/ARIA/WCAG'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'MySQL/MongoDB'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Photoshop/GIMP'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'UX/UI'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Unity'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'TypeScript'</span>,{" "}
            </p>
            <p className="ml-9">
              <span className="text-yellow-700">'Jest'</span>,{" "}
            </p>
            <p className="m-3"> &#93;,</p>
          </div>
          <p className="m-3"> &#125;;</p>
        </div>
      </div>
    </div>
  );
}
