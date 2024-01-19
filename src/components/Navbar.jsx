import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="  bg-[#191924] z-10 flex justify-between items-center px-5  fixed top-0 w-full text-yellow-50">
        <div className="h-[10vh]  flex justify-end items-center w-[450px]">
          <h2 className="  text-2xl font-bold "> Portfolio || Gautam Bisht</h2>
        </div>
        <div className="  w-1/2 responsive-nav  flex   ">
          <span
            className="md:hidden sm:block cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IoIosClose color="white" size="50" />
            ) : (
              <IoMenu color="white" size="35" />
            )}
          </span>

          {menuOpen ? (
            <div className="  w-[200px] transition-all h-[700px] py-[50px] absolute top-[70px] right-[-1px]  bg-[#1C1E27]">
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
