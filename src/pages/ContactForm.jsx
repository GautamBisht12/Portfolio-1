import React, { useState } from "react";
// import { contactForm } from "../data";
import { FaArrowCircleUp } from "react-icons/fa";
import { useForm } from "@formspree/react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/features/darkModeSlice";

function ContactForm() {
  const [goBackActive, setGoBackActive] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
  });

  const isDarkModeEnabled = useSelector(selectDarkMode);
  const closePopup = () => {
    setGoBackActive(true);
  };
  const [state, handleSubmit] = useForm("xdoqkrlo");
  if (state.succeeded) {
    return (
      <>
        <div className="flex flex-col justify-center mt-[50px] items-center w-full h-screen">
          <div
            className={`${
              goBackActive ? "hidden" : ""
            }  relative py-20 max-sm:w-[190px] max-sm:py-10 top-[500px] w-[300px] flex flex-col items-center justify-center  rounded-md bg-purple-950  `}
          >
            <h1 className="text-3xl text-white text-center font-bold">
              Thanks For Messaging
            </h1>
            <NavLink
              onClick={closePopup}
              className="mt-3 underline  text-blue-200"
            >
              Go back
            </NavLink>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className={`w-full    max-sm:mt-0  max-sm:min-h-[80vh] flex justify-center items-center  flex-col min-h-[100vh] ${
          isDarkModeEnabled ? "bg-[#1C1E27]" : "bg-[#DCBFFF]"
        }`}
      >
        <div className="  max-sm:h-[90vh] max-sm:justify-center  w-full flex">
          <div className="w-[30%] max-sm:hidden   h-[80vh]   flex flex-col items-center    ">
            <div
              className={`w-[30px] animate-pulse rounded-3xl h-[30px] sm:mt-[100px] ${
                isDarkModeEnabled ? "bg-yellow-100" : "bg-[#030637]"
              }   glow-btn mt-[60px]`}
            ></div>
            <div
              className={`h-[200px]  animate-pulse glow-btn w-[2px]  ${
                isDarkModeEnabled ? "bg-yellow-100" : "bg-[#030637]"
              } `}
            ></div>
            <img
              className="w-[50px]  mt-[-11px]"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/mail-8617068-6815602.png"
              alt="mail"
            />
            <div
              className={`h-[200px]  animate-pulse glow-btn w-[2px]  ${
                isDarkModeEnabled ? "bg-yellow-100" : "bg-[#030637]"
              } `}
            ></div>
            <img
              className="w-[50px] mt-[-5px]"
              src="https://static.vecteezy.com/system/resources/previews/010/871/837/original/3d-message-icon-png.png"
              alt=""
            />
          </div>
          <div className="max-sm:mt-0  max-sm:w-[100%]  max-sm:justify-center max-sm:items-center  max-sm:min-h-[80vh] w-[70%] min-h-[90vh] justify-center  flex flex-col  ">
            <h1 className="text-white text-3xl max-sm:mt-7 mt-16 font-bold mb-6">
              Let's Connect
            </h1>
            <div
              className={`card-glow      max-sm:min-h-[65%]  ${
                isDarkModeEnabled ? "bg-[#191924]" : "bg-[#80BCBD]"
              }  max-sm:p-4 max-sm:w-[90%]  w-[80%] shadow-md rounded px-8 pt-6 pb-8 mb-4 `}
            >
              <form
                action="https://formspree.io/f/xdoqkrlo"
                method="POST"
                id="contact"
                className={`mb-4     flex flex-col gap-5  ${
                  isDarkModeEnabled ? "text-white" : "text-[#030637]"
                }
                  `}
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label
                    htmlFor="username"
                    className="block max-sm:mb-0  font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    autoComplete="of"
                    name="username"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="block  font-bold  max-sm:mb-0 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="of"
                    name="email"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="subject"
                    className="block  max-sm:mb-0  font-bold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="subject"
                    id="subject"
                    autoComplete="of"
                    name="subject"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full max-md:overflow-hidden ">
                  <label
                    htmlFor="textbox"
                    className="block  max-sm:mb-0  font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className=" w-full rounded py-2 px-3"
                    rows="5"
                  ></textarea>
                </div>
                <div className="  text-center">
                  <button
                    type="submit"
                    className=" formSend max-sm:w-full  px-4 py-2 max-sm:mt-0 mt-4 rounded font-bold hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full  flex justify-end  max-sm:justify-center sticky  max-sm:bottom-[10px] bottom-0 px-10">
              <div
                onClick={() => window.scroll(0, 0)}
                className="  bg-white w-[40px]   h-[40px] card-glow animate-bounce rounded-[50%] glass-background justify-center items-center cursor-pointer flex"
              >
                <FaArrowCircleUp className="text-5xl  text-black  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
