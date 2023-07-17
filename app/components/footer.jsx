import React from "react";

export default function Footer() {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <footer className="flex justify-center">
      <img
        onClick={() => openNewTab("https://linkedin.com/in/bbryant98")}
        className="w-28 opacity-40 hover:opacity-100 hover:cursor-pointer"
        src="./images/LinkedIn.png"
      ></img>
      <img
        onClick={() => openNewTab("https://github.com/benbryant98")}
        className="w-20 h-20 mt-4 opacity-40 hover:opacity-100 hover:cursor-pointer"
        src="./images/GitHub.png"
      ></img>
      <img
        onClick={() => openNewTab("https://climateclock.world/")}
        className="w-16 h-16 rounded-xl opacity-40 m-5 mt-6 hover:opacity-100 hover:cursor-pointer"
        src="./images/ClimateClock.jpg"
      ></img>
    </footer>
  );
}
