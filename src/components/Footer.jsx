import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Footer() {
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
  return (
    <div className="min-w-screen h-screen flex justify-center items-center">
      <div
        id="Contact"
        className="xs:mx-5 sm:mx-0 w-full sm:mt-[200px]  xs:h-full h-[50%]  bg-[#16161691]  flex flex-row flex-wrap rounded-md"
      >
        <label className="text-white xs:text-5xl sm:text-6xl  flex xs:items-center sm:items-end w-[80%] h-1/4  ">
          <span className="xs:ml-6 sm:ml-[65px] xs:mr-0 md:ml-40 md:mr-4 name ">
            Lets
          </span>
          Work!
        </label>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="xs:w-[85%] md:w-[40%] xs:ml-0 md:ml-24 mr-2  h-3/4 flex flex-col flex-wrap  "
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
                className="w-[200px] h-[40px] font-medium text-lg xs:mr-4 bg-[#fe9600] rounded-sm hover:text-white  outline-none"
              >
                send
              </button>
              <form className="xs:w-[80%] md:invisible h-3/4 flex flex-col justify-center  xs:p-1 sm:p-14  text-white font-extralight xs:text-md  ">
                <label>Name: Landon Van Cleave </label>
                <label>Phone: 615-693-4726 </label>
                <label>Email: remastereddreams@gmail.com </label>
              </form>
            </div>
          </div>
        </form>
        <form className=" xs:invisible md:visible xs:w-[80%] sm:w-[40%] h-3/4 flex flex-col justify-center xs:p-2 sm:p-14 text-white font-extralight  md:text-xl  ">
          <h1 className=" text-white">
            <span className="name"> My</span> Info:
          </h1>
          <label>Name: Landon Van Cleave </label>
          <label>Phone: 615-693-4726 </label>
          <label>Email: remastereddreams@gmail.com </label>
        </form>
      </div>
    </div>
  );
}

export default Footer;
