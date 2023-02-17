import React, { useState } from "react";
import profile from "../images/profile.jpg";
import sticker from "../images/surprised.png";
import "../styles.css";

function Header() {
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  return (
    <div className="w-4/5 h-[700px] m-10  flex flex-row bg-[#16161691] rounded-md ">
      <div
        className={modal ? "contact__container active" : "contact__container"}
      >
        <div className=" contact__form ">
          <h1 className="name">Contact</h1>
          <div className="w-full h-2/3 ">
            <h4>email</h4>
            <input className="w-2/3 h-[30px]" />
            <h4>message</h4>
            <input className="w-2/3 h-[30px]" />
          </div>

          <button
            className="w-[200px] h-[50px] bg-slate-400"
            onClick={showModal}
          >
            Close
          </button>
        </div>
      </div>
      <div className=" namebox p-20 w-1/2 h-full flex flex-col text-left  ">
        <h1 className=" name text-[60px] font-medium">FrontEnd Developer.</h1>
        <h3 className="text-white text-[40px] ">
          My name is Landon. Lets work together to make tommorrow great.
        </h3>
        <button
          onClick={showModal}
          className=" w-[200px] h-[70px] text-xl mt-5 bg-slate-200  hover:bg-[#846bdf] hover:text-white rounded-lg "
        >
          Contact Me
        </button>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <img src={sticker} />
      </div>
    </div>
  );
}

export default Header;
