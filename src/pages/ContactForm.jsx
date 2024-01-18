import React, { useState } from "react";
import { contactForm } from "../data";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (e.g., send data to a server)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your server here
    console.log(formData);
  };

  return (
    <>
      <div className="w-full mt-[20px] flex justify-center items-center  h-[100vh] bg-[#1C1E27]">
        <div className="w-[30%] h-[80vh]   flex flex-col items-center    ">
          <div className="w-[30px] animate-pulse rounded-3xl h-[30px] bg-yellow-100   glow-btn mt-[60px]"></div>
          <div className="h-[200px]  animate-pulse glow-btn w-[2px] bg-yellow-400"></div>
          <img
            className="w-[50px]  mt-[-11px]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/mail-8617068-6815602.png"
            alt="mail"
          />
          <div className="h-[150px] glow-btn animate-pulse mt-[-6px]  w-[2px] bg-yellow-400"></div>
          <img
            className="w-[50px] mt-[-5px]"
            src="https://static.vecteezy.com/system/resources/previews/010/871/837/original/3d-message-icon-png.png"
            alt=""
          />
        </div>
        <div className="w-[70%] h-[80vh] justify-center flex flex-col  ">
          <h1 className="text-white text-3xl  font-bold mb-14">
            Let's Connect
          </h1>
          <form
            id="contact"
            className="card-glow bg-[#191924]   w-[80%] shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            {contactForm.map((item, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-bold mb-2"
                >
                  {item.label}
                </label>
                <input
                  type={item.type}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
