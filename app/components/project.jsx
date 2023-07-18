import React from "react";

export default function Project(props, key) {
  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="flex justify-center mt-6">
      <div
        key={key}
        className="flex justify-center w-2/3 h-80 ml-5 mb-10  rounded-lg"
      >
        <img
          className="rounded-lg opacity-30 hover:opacity-70 hover:outline outline-offset-1 outline-fuchsia-500 w-full"
          src={props.example}
        ></img>
        <h1
          className="absolute bg-slate-900 hover:bg-slate-100 text-xl rounded-b-lg p-2 hover:text-fuchsia-500 hover:font-bold hover:pt-4 hover:cursor-pointer"
          onClick={() => openNewTab(props.link)}
        >
          {props.name}
        </h1>
        <h1
          className="absolute mt-64 bg-slate-900 hover:bg-slate-100 rounded-full p-1 hover:text-fuchsia-500 hover:font-bold hover:px-3 hover:cursor-pointer"
          onClick={() => openNewTab(`${props.link}#features`)}
        >
          {props.skills}
        </h1>
      </div>
    </div>
  );
}
