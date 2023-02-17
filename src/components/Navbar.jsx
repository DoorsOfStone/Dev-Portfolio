import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import "../styles.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="z-10 sticky top-0 w-full h-[50px] flex shadow-2xl shadow-black/80">
      <nav className=" w-full h-full flex flex-row bg-[#0e0e0e]  ">
        <div className="w-2/3  h-full flex flex-row justify-start items-center ">
          <p className="text-white text-xl font-bold ml-[20px] ">
            Landon M. Van Cleave
          </p>
        </div>
        <div className="w-1/3 h-full flex flex-row justify-end items-end">
          <a href="https://github.com/DoorsOfStone" target={"_blank"}>
            <FaIcons.FaGithub className="text-[30px] m-2 text-white hover:text-[#846bdf]" />
          </a>
          <a href="#" target={"_blank"}>
            <FaIcons.FaLinkedin className="text-[30px] m-2 text-white hover:text-[#846bdf]" />
          </a>
          <a href="https://twitter.com/LandonMichael__" target={"_blank"}>
            <FaIcons.FaTwitter className="text-[30px] m-2 text-white hover:text-[#846bdf]" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
