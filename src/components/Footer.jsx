import React from "react";

function Footer() {
  return (
    <div className=" w-full mt-[200px] h-[400px] bg-[#16161691]  flex flex-col rounded-md">
      <div className="w-full h-1/5">
        <h1 className="name  text-[60px] font-medium">Contact </h1>
      </div>
      <div className="w-full h-4/5 flex flex-col ">
        <h3 className="name">Email</h3>
        <input className="w-1/2 h-1/6 m-2 rounded-md" />
        <h3 className="name">input</h3>
        <textarea className="w-1/2 h-1/2 m-2 rounded-md" />
      </div>

      <button>Submit</button>
    </div>
  );
}

export default Footer;
