// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { Projects } from "../data";
// import Button from "./Button";

const Card = () => {
  return (
    <>
      {Projects.map((project) => (
        <div
          className=" max-sm:h-[55vh] max-sm:justify-center max-sm:items-center  w-full h-[70vh] py-4 px-16  flex"
          key={project.id}
        >
          <div className="max-sm:w-[60%] max-sm:gap-[4px] max-sm:h-[50%] max-sm:p-4 max-sm:rounded-[10px]  max-sm:flex-col  w-[49%] card-glow  hover:scale-[1.20] transition-all bg-black flex h-[60%] border rounded-[30px] absolute  hover:z-[2]">
            <img
              className="object-contain max-sm:rounded-none  max-sm:scale-2 max-sm:w-[100%] max-sm:object-cover max-sm:p-1 max-sm:h-[70%]  border rounded-[30px]"
              src={project.image}
              alt=""
            />
            <p className=" hidden max-sm:block text-center text-white ">
              {project.shortDesc}
            </p>
            <div className="hidden max-sm:flex justify-between px-3">
              <Link
                target="_blank"
                to={project.githubLink}
                type="button"
                className="hidden max-sm:block px-3 py-2 rounded-lg  text-white bg-[#191924] hover:bg-[#333348]"
              >
                {project.btnGit}
              </Link>
              <Link
                target="_blank"
                to={project.netlifyLink}
                type="button"
                className="  hidden max-sm:block px-3 py-2 rounded-lg text-white bg-[#191924] hover:bg-[#333348]"
              >
                {project.btnNet}
              </Link>
            </div>
          </div>
          <div className="max-sm:hidden p-8 w-[45%] hover:scale-[1.20]  glow-btn transition-all bg-gray-200  h-[60%] left-[650px] flex flex-col justify-between  top-[74px] rounded-[70px] border relative">
            <div className="flex flex-col justify-center  text-black items-center">
              <h1 className="font-bold text-2xl mb-4 text-purple-80000">
                {project.projectName}
              </h1>

              <p className="font-semibold  text-[18.5px]  text-black ">
                {project.description}
              </p>
            </div>
            <div className="btn flex justify-between mt-4 w-full items-end">
              <Link
                target="_blank"
                to={project.githubLink}
                type="button"
                className="inline-flex gap-4 items-center px-4 py-2 text-base font-medium rounded-lg text-white bg-[#191924] hover:bg-[#333348]"
              >
                {project.btnGit}
              </Link>
              <Link
                target="_blank"
                to={project.netlifyLink}
                type="button"
                className="inline-flex gap-4 items-center px-4 py-2 text-base font-medium rounded-lg text-white bg-[#191924] hover:bg-[#333348]"
              >
                {project.btnNet}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
