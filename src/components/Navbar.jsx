import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = ({ hasAllProjects }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [render, setRender] = useState(false);

  const isDarkModeEnabled = useSelector(selectDarkMode);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useEffect(() => {
    const logoAni = () => {
      tl.from(".logo-text span", {
        y: -200,
        duration: 1,
        delay: 0.5,
        opacity: 0,
        stagger: 0.7,
      });
    };

    logoAni();
  }, []);

  const handleRender = () => {
    useEffect(() => {
      setRender(!render);
    }, [render]);
  };
  return (
    <>
      <header
        className={` ${isDarkModeEnabled ? "darkNav" : "lightNav"}
    
          z-10 flex justify-between items-center px-5  fixed top-0 w-full text-yellow-50 `}
      >
        <div className="5w h-[10vh] max-sm:justify-start   flex justify-end items-center w-[450px]">
          <h2 className="logo-text  text-3xl font-bold ">
            {" "}
            <span className="portfolio-text max-sm:hidden">
              Portfolio ||{" "}
            </span>{" "}
            <span className="name-text linear-wipe">Gautam Bisht</span>
          </h2>
        </div>
        <div className="  w-1/2  responsive-nav  flex   ">
          <span
            className="md:hidden  sm:block cursor-pointer"
            onClick={toggleMenu}
          >
            {hasAllProjects ? null : (
              <div>
                {menuOpen ? (
                  <IoIosClose color="white" size="50" />
                ) : (
                  <IoMenu color="white" size="35" />
                )}
              </div>
            )}
          </span>

          {hasAllProjects ? null : (
            <div>
              {menuOpen ? (
                <div
                  className={`menu-links  w-[200px] flex flex-col transition-all h-screen py-[40px] absolute top-[70px] right-[-1px] ${
                    isDarkModeEnabled ? "bg-[#191924]" : "bg-[#D0A2F7]"
                  } `}
                >
                  {Links.map((item, index) => (
                    <ul
                      key={index}
                      className=" flex text-lg  h-[10vh] font-bold  items-center justify-center  "
                    >
                      <li className=" mx-5 hover:text-purple-600">
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
            </div>
          )}

          {!hasAllProjects ? (
            <div className="flex">
              {Links.map((item, index) => (
                <ul key={index} className=" flex text-lg font-bold   ">
                  <li className="mx-5 hidden md:block">
                    <Link
                      to={item.id}
                      className="cursor-pointer"
                      smooth={true}
                      offset={-50}
                      duration={50}
                    >
                      {item.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ) : (
            <NavLink
              className=" text-lg font-bold mr-5"
              to="/"
              onClick={() => handleRender()}
            >
              Home
            </NavLink>
          )}

          <DarkMode />
        </div>
      </header>
    </>
  );
};

export default Navbar;
