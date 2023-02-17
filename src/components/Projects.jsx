import React from "react";
import coffeeShop from "../images/coffeeShop.png";
import recipeSearch from "../images/recipeSearch.png";
import todo from "../images/todo.png";

function Projects() {
  return (
    <div className="w-4/5 m-10 p-5 bg-[#16161691]  h-[1000px] flex flex-col rounded-md ">
      <div className="w-full p-5 flex justify-center items-center mb-[100px]">
        <h1 className="name text-center  text-[60px] font-medium">Projects</h1>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center items-center  ">
        <a
          target="_blank"
          className="w-1/4 h-[300px] hover:opacity-50"
          href="https://github.com/DoorsOfStone/TheCoffeeShop"
        >
          <img className="w-full h-full contain" src={coffeeShop} />
        </a>

        <a
          target="_blank"
          className="w-1/4  h-[300px] m-5 hover:opacity-50"
          href="https://github.com/DoorsOfStone/react_resturant"
        >
          <img className="w-full h-full" src={recipeSearch} />
        </a>
        <a
          target="_blank"
          className="w-1/4  h-[300px] m-5 hover:opacity-50"
          href="https://github.com/DoorsOfStone/QuickJot"
        >
          <img className="w-full h-full" src={todo} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
