import React from "react";
import coffeeShop from "../images/coffeeShop.png";
import recipeSearch from "../images/recipeSearch.png";
import todo from "../images/todo.png";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";


function Projects() {
  return (
    <div className="w-4/5 m-10 p-5 bg-[#16161691]  h-[1000px] flex flex-col rounded-md ">
      <div className="w-full p-5 flex justify-center items-center mb-[100px]">
        <h1 className="name text-center  text-[60px] font-medium">Projects</h1>
      </div>
      <div className="w-full  h-full flex flex-row  justify-center items-center  ">
      
      <div className="w-1/3 h-full mx-1 flex flex-col  bg-black/70 rounded-lg p-2  ">
     
          <img className="h-1/3 rounded-md contain" src={coffeeShop} />
          <div className="w-full h-1/3">
          <h1 className="w-full  text-center  m-3  text-white"> The Coffee Shop</h1>
          <p className="text-white font-md">This is a mock up eccomerce site buildt in react with tailwind. for the backend </p>
          </div>
    
          <div className="w-full h-1/3 flex flex-row flex-wrap ">
          <FaIcons.FaReact className=" text-[40px] m-10 text-cyan-500" />
          <SiIcons.SiTailwindcss className=" text-[40px] m-10 text-cyan-200" />
          </div>
      </div>
      <div className="w-1/3 h-full mx-2 flex flex-col  bg-black/70 rounded-lg p-2  ">
     
     <img className="h-1/3 rounded-md contain" src={coffeeShop} />
     <div className="w-full h-1/3">
     <h1 className="w-full  text-center  m-3  text-white"> The Coffee Shop</h1>
     <p className="text-white font-md">This is a mock up eccomerce site buildt in react with tailwind. for the backend </p>
     </div>

     <div className="w-full h-1/3 flex flex-row flex-wrap ">
     <FaIcons.FaReact className=" text-[40px] m-10 text-cyan-500" />
     <SiIcons.SiTailwindcss className=" text-[40px] m-10 text-cyan-200" />
     </div>
 </div>
       <div className="w-1/3 h-full  flex flex-col  bg-black/70 rounded-lg p-2  ">
     
          <img className="h-1/3 rounded-md contain" src={coffeeShop} />
          <div className="w-full h-1/3">
          <h1 className="w-full  text-center  m-3  text-white"> The Coffee Shop</h1>
          <p className="text-white font-md">This is a mock up eccomerce site buildt in react with tailwind. for the backend </p>
          </div>
    
          <div className="w-full h-1/3 flex flex-row flex-wrap ">
          <FaIcons.FaReact className=" text-[40px] m-10 text-cyan-500" />
          <SiIcons.SiTailwindcss className=" text-[40px] m-10 text-cyan-200" />
          </div>
      </div>

      
      </div>
    </div>
  );
}

export default Projects;
