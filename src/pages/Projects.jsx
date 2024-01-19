import { Link } from "react-router-dom";
import Card from "../components/Card";

const Projects = () => {
  return (
    <>
      <div
        className=" flex  min-h-[100vh] justify-center flex-col items-center py-20 w-full "
        id="projects "
      >
        <div
          id="projects"
          className="w-[90%]   px-5 min-h-[100vh]  flex flex-col  justify-center items-center py-12"
        >
          <h1 className="text-center mb-10 text-white font-bold text-4xl">
            My Projects
          </h1>
          <div className="w-full  flex flex-col justify-center items-center min-h-[50vh] ">
            <Card />
          </div>

          <Link
            className="border glow-btn animate-bounce duration-300 transform translateY-4 hover:translateY-0 rounded-md w-32 text-center  mt-5 p-4 hover:bg-[#191924] font-bold hover:text-white bg-white"
            to="/allprojects"
          >
            View More{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
