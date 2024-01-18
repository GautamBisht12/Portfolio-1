import { NavLink } from "react-router-dom";
import { Links } from "../data";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <header className=" bg-[#191924] z-10 flex justify-between items-center  fixed top-0 w-full text-yellow-50">
        <div className="h-[10vh]  flex justify-center items-center w-1/2 ">
          <h2 className="text-2xl font-bold "> Portfolio || Gautam Bisht</h2>
        </div>
        <div className="flex w-1/2 justify-center items-center    ">
          {Links.map((item, index) => (
            <ul key={index} className=" flex text-lg font-bold   ">
              <li className="mx-5">
                <NavLink to={item.link} href={item.id}>
                  <Link to={item.id} smooth={true} offset={-50} duration={50}>
                    {item.title}
                  </Link>
                </NavLink>
              </li>
            </ul>
          ))}
          {/* <button className="dark-mode-button flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <span className="sun-icon hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M17.293 5.293A7.996 7.996 0 0 0 10.004 13.293H2.707L2.707 4.707C2.707 2.12 4.81 0 7.293 0H12.707L12.707 5.293C12.707 3.186 14.814 1.293 17.293 1.293Z"
                />
                <path
                  fill="currentColor"
                  d="M14.707 12.707A7.996 7.996 0 0 0 7.004 5.707V2.707L2.707 2.707C2.707 4.81 0 6.914 0 9.307L2.707 12.707L5.293 12.707C7.386 12.707 9.493 11.614 11.093 10.207Z"
                />
              </svg>
            </span>
            <span className="moon-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M17.293 5.293A7.996 7.996 0 0 0 10.004 13.293H2.707L2.707 4.707C2.707 2.12 4.81 0 7.293 0H12.707L12.707 5.293C12.707 3.186 14.814 1.293 17.293 1.293Z"
                />
              </svg>
            </span>
            <span>Switch to Dark Mode</span>
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
