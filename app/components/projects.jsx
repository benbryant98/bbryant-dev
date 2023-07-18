import React from "react";
import Project from "./project";

const projectList = [
  {
    name: "Handlebars Calendar",
    link: "https://github.com/benbryant98/timekeeper",
    example: "./images/projects/calendar.png",
    skills: ["Express | ", "Bulma CSS | ", "Heroku"],
    key: "1",
  },

  {
    name: "Online Shopping",
    link: "https://github.com/benbryant98/eshop-backend",
    example: "./images/projects/onlineshopping.png",
    skills: ["MySQL | ", "Express | ", "DotEnv"],
    key: "2",
  },
  {
    name: "README Generator",
    link: "https://github.com/benbryant98/readme-generator",
    example: "./images/projects/readme.png",
    skills: ["Inquirer | ", "Node"],
    key: "3",
  },
  {
    name: "Note Taker Express",
    link: "https://github.com/benbryant98/note-taker-express",
    example: "./images/projects/notetaker.png",
    skills: ["Express | ", "Heroku"],
    key: "4",
  },
  {
    name: "SQL Employee Database",
    link: "https://github.com/benbryant98/sql-employee-tracker",
    example: "./images/projects/sqldatabase.png",
    skills: ["MySQL | ", "Inquirer | ", "Node"],
    key: "5",
  },
  {
    name: "MongoDB Social Media",
    link: "https://github.com/benbryant98/thoughtbook",
    example: "./images/projects/mongodb.png",
    skills: ["Insomnia | ", "Mongoose | ", "Node"],
    key: "6",
  },
  {
    name: "Daily Scheduler",
    link: "https://github.com/benbryant98/daily-schedule",
    example: "./images/projects/scheduler.png",
    skills: ["jQuery | ", "HTML/CSS"],
    key: "7",
  },
  {
    name: "JavaScript Quiz",
    link: "https://github.com/benbryant98/take-a-quiz",
    example: "./images/projects/quiz.png",
    skills: ["jQuery | ", "HTML/CSS"],
    key: "8",
  },
];

export default function Projects() {
  return (
    <div>
      <h1
        data-text="PROJECTS"
        className="flex justify-center text-reflect text-5xl md:text-6xl text-slate-100 opacity-80 relative m-1 top-3 section-header"
      >
        PROJECTS
      </h1>
      <div className="columns-1 md:columns-2 bg-slate-900 py-10">
        {projectList &&
          projectList.map((project) => (
            <Project
              key={project.key}
              name={project.name}
              link={project.link}
              example={project.example}
              skills={project.skills}
            />
          ))}
      </div>
    </div>
  );
}
