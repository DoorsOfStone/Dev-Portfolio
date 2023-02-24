import React from "react";

import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import ProjectCard from "./ProjectCard";
import { projects } from "../store";
// bg-[#16161691]
function Projects() {
  return (
    <div
      id="One"
      className="w-4/5 xs:h-full md:h-[1000px]  mb-[300px] p-5 bg-[#16161691]  flex flex-col rounded-md "
    >
      <div className="w-full p-5 flex justify-center items-center mb-[100px]">
        <h1 className="name text-center  text-[60px] font-medium">Projects</h1>
      </div>
      <div className="porject__card w-full  h-full flex  xs:flex-col md:flex-row  justify-center items-center  ">
        {projects.map((project, index) => (
          <ProjectCard
            name={project.name}
            image={project.image}
            repo={project.repo}
            description={project.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
