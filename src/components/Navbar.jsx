import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="  bg-[#191924]  z-10 flex justify-between items-center px-5  fixed top-0 w-full text-yellow-50">
        <div className="h-[10vh] max-sm:justify-start   flex justify-end items-center w-[450px]">
          <h2 className="  text-3xl font-bold ">
            {" "}
            <span className="max-sm:hidden">Portfolio || </span>{" "}
            <span className="linear-wipe">Gautam Bisht</span>
          </h2>
        </div>
        <div className="  w-1/2  responsive-nav  flex   ">
          <span
            className="md:hidden  sm:block cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IoIosClose color="white" size="50" />
            ) : (
              <IoMenu color="white" size="35" />
            )}
          </span>

          {menuOpen ? (
            <div className="  w-[200px] flex flex-col transition-all h-screen py-[40px] absolute top-[71px] right-[-1px]  bg-[#191924]">
              {Links.map((item, index) => (
                <ul
                  key={index}
                  className=" flex text-lg  h-[10vh] font-bold  items-center justify-center  "
                >
                  <li className="mx-5 hover:text-purple-600">
                    <NavLink to={item.link} href={item.id}>
                      <Link
                        to={item.id}
                        smooth={true}
                        offset={-50}
                        duration={50}
                        onClick={toggleMenu}
                      >
                        {item.title}
                      </Link>
                    </NavLink>
                  </li>
                </ul>
              ))}
              <div className="mt-[150px] justify-center gap-10  flex max-sm:flex">
                <a
                  target="blank"
                  href="https://github.com/GautamBisht12"
                  className=" cursor-pointer "
                >
                  <FaGithub
                    className="hover:text-blue-400 hover:scale-[1.2]"
                    size="35"
                  />
                </a>

                <a
                  target="blank"
                  href="https://www.linkedin.com/in/gautam-bisht-863225277/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="cursor-pointer"
                >
                  <FaLinkedin
                    className="hover:text-blue-400 hover:scale-[1.2]"
                    size="35"
                  />
                </a>
              </div>
            </div>
          ) : null}
          {Links.map((item, index) => (
            <ul key={index} className=" flex text-lg font-bold   ">
              <li className="mx-5 hidden md:block">
                <NavLink to={item.link} href={item.id}>
                  <Link to={item.id} smooth={true} offset={-50} duration={50}>
                    {item.title}
                  </Link>
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
