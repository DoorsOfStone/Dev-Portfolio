import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import profile from "../images/profile.jpg";
import sticker from "../images/surprised.png";
import axios from "axios";
import * as TfIcons from "react-icons/tfi";
import "../styles.css";
import { Link } from "react-scroll";

function Header() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ao5hn7a",
        "template_n98gsaj",
        form.current,
        "_YB-YOrGkEjxrx3Oy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message was sent");
        },
        (error) => {
          console.log(error.text);
          alert("message failed");
        }
      );
  };

  // contact form modal
  const showModal = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  return (
    <div
      id="head"
      className="xs:w-full xs:h-1/4 xs:mt-36 sm:w-4/5 sm:h-[700px] mb-[300px]   flex  flex-row bg-[#16161691] rounded-md "
    >
      <div
        className={modal ? "contact__container active" : "contact__container"}
      >
        <div className=" contact__form mt-60 items-center ">
          <label className="w-[75%] h-1/6 flex justify-start items-end  p-1 text-left text-white text-[40px] ">
            Contact <span className="name mx-1"> Here</span>.
          </label>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full h-2/3 p-10 flex flex-col flex-wrap  "
          >
            <div className="w-full  h-1/3 flex flex-col justify-center items-center ">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                className="p-1 w-4/5 h-1/2 m-3 outline-none"
              />
              <input
                name="user_email"
                type="email"
                placeholder="Example@gmail.com"
                className="p-1 w-4/5 h-1/2 outline-none"
              />
            </div>

            <div className="w-full h-2/3 flex flex-col justify-center items-center">
              <textarea
                name="message"
                className="p-1 w-4/5 h-[90%] m-2 outline-none "
                placeholder="Type here..."
              ></textarea>
              <div className="w-4/5 h-[20%]  flex justify-start">
                <button
                  onClick={sendEmail}
                  className="w-[100px] h-[40px] font-medium text-lg  bg-[#fe9600] hover:text-white  outline-none"
                >
                  send
                </button>
              </div>
            </div>
          </form>
          <div className="w-full flex flex-row justify-center items-center">
            <TfIcons.TfiClose
              className=" text-xl text-white font-bold mb-5  hover:text-[#fe9600] "
              onClick={showModal}
            />
          </div>
        </div>
      </div>
      <div className="z-30 xs:w-2/3  namebox xs:p-10  xs:mt-10 lg:p-20 lg:w-1/2 h-full flex flex-col text-left  ">
        <h1 className=" name xs:text-[25px] sm:text-[60px]  mt-1 font-medium">
          FrontEnd Developer.
        </h1>
        <h3 className="text-white xs:text-sm xs:mt-2 md:mt-2 md:mb-2 sm:text-2xl lg:text-[30px] font-extralight">
          My name is Landon. Lets work together to make tommorrow great.
        </h3>
        <button
          className="xs:invisible md:visible w-[200px] h-[70px] text-xl  mt-3  bg-[#fe9600] font-bold hover:text-white rounded-sm"
          type="submit"
          onClick={showModal}
        >
          Contact Me
        </button>
        {/* only for small screens */}
        <Link
          className="cursor-pointer xs:w-[100px] sm:w-[200px] xs:h-[30px] sm:h-[60px] md:invisible sm:text-2xl text-center p-1 bg-[#fe9600] font-bold hover:text-white rounded-sm"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
        >
          Contact Me
        </Link>
      </div>
      <div className=" xs:w-1/3 xs:mt-10 sm:w-1/2 xs:h-1/3 md:h-full flex justify-center items-center">
        <img src={sticker} />
      </div>
    </div>
  );
}

export default Header;
