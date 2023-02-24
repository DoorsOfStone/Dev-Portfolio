import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import "../styles.css";
import { Link } from "react-router-dom";
import { Link as RcScroll } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full bg-[#000000]   h-[50px] flex shadow-2xl ">
      <nav className=" w-full h-full  flex flex-row bg-[#000000]  ">
        <div className="xs:min-w-[100%]   md:min-w-[35%]  h-full flex flex-row xs:justify-between md:justify-start items-center">
          <RcScroll
            className="cursor-pointer"
            to="head"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1500}
          >
            <p className="text-white xs:text-[18px] xs:ml-5 sm:text-[15px]  md:text-[18px]  lg:text-xl font-bold lg:ml-[20px] ">
              Landon M. VanCleave
            </p>
          </RcScroll>

          <div className="md:invisible  ml-5 flex flex-row justify-center items-center">
            <Link to="https://github.com/DoorsOfStone" target={"_blank"}>
              <FaIcons.FaGithub className="xs:text-[20px] mx-3 sm:text-[20px] md:m-2 text-white hover:text-[#846bdf]" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/landon-van-cleave-2baa63247/"
              target={"_blank"}
            >
              <FaIcons.FaLinkedin className="xs:text-[20px] mx-3 sm:text-[20px] md:m-2 text-white hover:text-[#846bdf]" />
            </Link>
            <Link to="https://twitter.com/LandonMichael__" target={"_blank"}>
              <FaIcons.FaTwitter className="xs:text-[20px] mx-3 sm:text-[20px] md:m-2 text-white hover:text-[#846bdf]" />
            </Link>
          </div>
        </div>

        {/* Nav key Routes*/}
        <div className="xs:invisible md:visible  md:min-w-[30%]   lg:w-1/3 h-full flex flex-row justify-end items-end">
          <RcScroll
            className="cursor-pointer"
            to="One"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
          >
            <h3 className="md:text-[15px]  md:mb-3 sm:text-[15px] lg:text-[20px]  mx-8 my-2 text-white">
              Projects
            </h3>
          </RcScroll>
          <RcScroll
            className="cursor-pointer"
            to="skills"
            spy={true}
            smooth={true}
            offset={-475}
            duration={1500}
          >
            <h3 className="md:text-[15px]  md:mb-3 sm:text-[15px] lg:text-[20px]  mx-8 my-2 text-white">
              Skills
            </h3>
          </RcScroll>
          <RcScroll
            className="cursor-pointer"
            to="about"
            spy={true}
            smooth="true"
            offset={-200}
            duration={1500}
          >
            <h3 className="md:text-[15px]  md:mb-3 sm:text-[15px] lg:text-[20px]  mx-8 my-2 text-white">
              About
            </h3>
          </RcScroll>
          <RcScroll
            className="cursor-pointer"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={1500}
          >
            <h3 className="md:text-[15px]  md:mb-3 sm:text-[15px] lg:text-[20px]  mx-8 my-2 text-white">
              Contact
            </h3>
          </RcScroll>
        </div>
        <div className="xs:invisible md:visible md:min-w-[20%]  lg:min-w-[33%] xs:text-[18px] md:text-[30px] h-full flex flex-row sm:justify-start md:justify-center sm:items-center lg:justify-end  lg:items-end ">
          <Link to="https://github.com/DoorsOfStone" target={"_blank"}>
            <FaIcons.FaGithub className="sm:ml- md:m-2 text-white hover:text-[#846bdf]" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/landon-van-cleave-2baa63247/"
            target={"_blank"}
          >
            <FaIcons.FaLinkedin className="sm:ml- md:m-2 text-white hover:text-[#846bdf]" />
          </Link>
          <Link to="https://twitter.com/LandonMichael__" target={"_blank"}>
            <FaIcons.FaTwitter className="sm:ml- md:m-2 text-white hover:text-[#846bdf]" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
