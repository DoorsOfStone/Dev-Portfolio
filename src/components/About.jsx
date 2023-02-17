import React from "react";

function About() {
  return (
    <div className="w-4/5 m-10 h-[600px] flex justify-center items-center bg-[#16161691] rounded-md">
      <div className="p-10 w-full h-full flex flex-col ">
        <h1 className="about  text-[60px] font-medium mb-[100px] text-center">
          {"My Advantages"}
        </h1>
        <article className=" text-white text-xl p-5 font-extralight text-center ">
        Hello, my name is Landon Van Cleave. I grew up in Detroit,MI. The youngest of five, I could have never imagined that I would be here. But through all the triumph and downfall I have found a way to not only survive, but to thrive through it. Where Im found the idea of working in tech is non-existent, it's a goal of mine to change that. My truest of hopes is to become an example role model for those who will come after me, to build generational wealth and to change the outlook of my family.
        </article>
      </div>
    </div>
  );
}

export default About;
