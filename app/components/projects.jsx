import React from "react";

const projectList = [{}]

export default function Projects() {
  return (
    <div>
      <h1
        data-text="PROJECTS"
        className="flex justify-center text-reflect text-5xl md:text-6xl text-slate-100 opacity-80 relative m-1 top-3 section-header"
      >
        PROJECTS
      </h1>
      <div className="flex justify-center bg-slate-900 py-10">
        <ul className="w-2/3 md:columns-2 mt-8 md:mt-0 text-center text-white text-3xl">
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/note-taker-express"
              className="projectLink w-full"
            >
              Note Taker Express
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/eshop-backend"
              className="projectLink w-full"
            >
              Online Shopping
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/readme-generator"
              className="projectLink w-full"
            >
              README Generator
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/timekeeper"
              className="projectLink w-full"
            >
              Handlebars Calendar
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/sql-employee-tracker"
              className="projectLink w-full"
            >
              SQL Employee Database
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/thoughtbook"
              className="projectLink w-full"
            >
              NoSQL Social Media
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/daily-schedule"
              className="projectLink w-full"
            >
              Daily Scheduler
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/benbryant98/take-a-quiz"
              className="projectLink w-full"
            >
              Short JavaScript Quiz
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
