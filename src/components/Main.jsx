import React from "react";
import Project from "./Project";
import { projects } from "../data";

const Main = () => {
  return (
    <div className="bg-black flex flex-col text-gray-300 lg:px-80 w-screen h-screen pt-16">
      {/* navbar : proile icons and name*/}

      <nav className="h-16 w-full text-gray-300 flex items-center justify-between">
        <div className="font-bold text-xl">shivam</div>
        <div className="font-bold ">profile icons</div>
      </nav>

      {/* main content */}

      <div className="flex flex-col items-center justify-start h-full w-full text-xl">
        {/* intro */}
        <div className="lg:pt-12">
          Hi there, I'm <span className="font-bold text-white">Shivam</span> I
          am an independent developer who loves to build things. I like design,
          web-development and music.
        </div>

        {/* projects */}
        <div className="pt-12 flex flex-col w-full ">
          <div className="text-white font-bold text-3xl">Projects</div>
          <div className="grid grid-rows-auto grid-cols-3 pr-2 gap-2">
            {projects.map((projects) => {
              return (
                <div key={projects?.id}>
                  <Project
                    title={projects?.title}
                    description={projects?.description}
                    link={projects?.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
