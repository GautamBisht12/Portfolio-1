import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/features/darkModeSlice";

const Projects = () => {
  const [render, setRender] = useState(false);

  const handleRender = () => {
    useEffect(() => {
      setRender(!render);
    }, [render]);
  };

  const isDarkModeEnabled = useSelector(selectDarkMode);

  return (
    <>
      <div
        className={`${
          isDarkModeEnabled ? "darkProjects" : "lightProjects"
        }   flex   min-h-[100vh] justify-center flex-col items-center py-10 w-full `}
        id="projects "
      >
        <div
          id="projects"
          className="w-[90%]   px-5 min-h-[100vh]  flex flex-col  justify-center items-center py-12"
        >
          <h1
            className={`text-center mb-10    ${
              isDarkModeEnabled ? "text-white" : "text-[#030637]"
            } font-bold text-4xl`}
          >
            My Projects
          </h1>
          <div className="w-full  flex flex-col justify-center items-center min-h-[50vh] ">
            <Card />
          </div>

          <Link
            className="border glow-btn animate-bounce duration-300 transform translateY-4 hover:translateY-0 rounded-md w-32 text-center  mt-5 p-4 hover:bg-[#191924] font-bold hover:text-white bg-white text-black"
            to="/allprojects"
            onClick={() => handleRender()}
          >
            View More{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
