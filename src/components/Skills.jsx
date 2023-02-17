import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";

function Skills() {
  return (
    <div className="w-4/5 h-[200px] m-10 bg-[#16161691] flex justify-center items-center rounded-md">
      <FaIcons.FaHtml5 className=" text-[70px] m-10 text-orange-500 transition-s" />
      <FaIcons.FaCss3 className=" text-[70px] m-10 text-blue-500" />
      <IoIcons.IoLogoJavascript className=" text-[70px] m-10 text-yellow-300" />
      <FaIcons.FaBootstrap className=" text-[70px] m-10 text-purple-400" />
      <SiIcons.SiTailwindcss className=" text-[70px] m-10 text-cyan-200" />
      <FaIcons.FaNodeJs className=" text-[70px] m-10 text-green-300" />
      <FaIcons.FaReact className=" text-[70px] m-10 text-cyan-500" />
    </div>
  );
}

export default Skills;
