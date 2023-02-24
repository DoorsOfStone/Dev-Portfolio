import React from "react";

function About() {
  return (
    <div
      id="#About"
      className="w-4/5 xs:h-1/2 mb-[300px]  sm:h-[600px] flex justify-center items-center bg-[#16161691] rounded-md"
    >
      <div className="p-10 w-full h-full flex flex-col ">
        <h1 className="about xs:text-3xl   sm:text-[60px] font-medium xs:mb-[20px]  sm:h-[100px] sm:mb-[100px] text-center">
          {"My Advantages"}
        </h1>
        <article className=" text-white xs:text-sm sm:text-xl p-5 font-extralight xs:text-left sm:text-center ">
          Hello, my name is Landon Van Cleave. I was born in Detroit,MI. Art and
          technology are without a doubt my muse. For some time I thought they
          were opposed to each other, until I realized art inspires technology,
          and the advancement of technology produces more art . My passion for
          technology stems from a deep interest in helping people.To see how far
          we have come in such a short amount of time is beyond belief. Having
          the abilities to learn quickly, to problem solve efficiently, and to
          adapt to any given situation, are all attributes that have allowed me
          to not only to survive, but to thrive.
        </article>
      </div>
    </div>
  );
}

export default About;
