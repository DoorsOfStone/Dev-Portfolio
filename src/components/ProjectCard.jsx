import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function ProjectCard({ name, image, description, repo }) {
  return (
    <div className="content xs:w-full md:w-1/3 h-full xs:mb-3 md:mb-0 md:mx-3 flex flex-col  bg-black/70 rounded-lg p-2 shadow-xl hover:shadow-pink-400/40 ease-in-out">
      <Link className="h-1/3 rounded-md " target="_blank" to={repo}>
        <img className="w-full h-full rounded-md contain" src={image} />
      </Link>
      <div className="w-full h-2/3">
        <h1 className="w-full  text-center  my-3 text-[30px] text-white">
          {" "}
          {name}{" "}
        </h1>
        <p className=" p-4 text-center w-full h-2/3 text-md font-extralight text-white mt-10 font-md">
          {description}{" "}
        </p>
      </div>

      {/* <div className="w-full h-1/3 flex flex-row flex-wrap ">
          <FaIcons.FaReact className=" text-[40px] m-10 text-cyan-500" />
          <SiIcons.SiTailwindcss className=" text-[40px] m-10 text-cyan-200" />
          </div> */}
    </div>
  );
}

export default ProjectCard;
