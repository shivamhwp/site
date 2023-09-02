import React from "react";

const Project = (props) => {
  return (
    <div className=" flex flex-col w-auto  h-auto">
      <div className="text-gray-200 lg:pt-8 font-semibold">
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>
      <div className="text-gray-300 pt-4 overflow-hidden">
        {props.description}
      </div>
    </div>
  );
};

export default Project;
