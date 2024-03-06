import { moreProjects } from "../data";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { useSelector } from "react-redux";

const AllProjects = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);
  return (
    <section
      className={`flex flex-col ${
        isDarkModeEnabled ? "bg-[#1C1E27]" : "bg-[#DCBFFF]"
      }   justify-center text-center`}
    >
      <div className=" p-5">
        <h2
          className={`text-center ${
            !isDarkModeEnabled ? "text-[#030637]" : "text-white"
          }  text-3xl font-bold`}
        >
          More projects
        </h2>
      </div>
      <div className=" h-auto w-full flex justify-center items-center py-10">
        <div className=" flex-wrap w-[80%] flex gap-5 ">
          {moreProjects.map((project) => (
            <Card
              key={project.id}
              className="max-w-sm  hover:scale-[1.1] transition-all"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src={project.img}
                  alt={project.title}
                  className="rounded"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
                <span className="text-[19px] ml-5 text-blue-900">
                  ({project.languageUsed})
                </span>
              </h5>
              <p className=" p-2 text-gray-700 text-lg font-semibold dark:text-gray-400">
                {project.desc}
              </p>
              <div className="flex gap-5 px-5 py-2">
                <button className="bg-[#191924] text-white p-2 rounded-md">
                  <Link to={project.github} target="_blank">
                    Github
                  </Link>{" "}
                </button>
                {project.live ? (
                  <button className="bg-[#191924] text-white p-2 rounded-md">
                    <Link to={project.live} target="_blank">
                      Live
                    </Link>{" "}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
