import Card from "../components/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    const projectsAnim = () => {
      tl.from(".project-text", {
        scale: 0,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          scrub: 5,
          trigger: ".projectsDiv",
          start: "top 70%",
          end: "top 50%",
        },
      });
    };

    projectsAnim();
  }, []);

  const isDarkModeEnabled = useSelector(selectDarkMode);

  return (
    <>
      <div
        className={`projectsDiv ${
          isDarkModeEnabled ? "darkProjects" : "lightProjects"
        }   flex   min-h-[100vh] justify-center flex-col items-center py-10 w-full `}
        id="projects "
      >
        <div
          id="projects"
          className="w-100%  px-4 min-h-[100vh]  flex flex-col  justify-center items-center py-12"
        >
          <h1
            className={`project-text text-center mb-10    ${
              isDarkModeEnabled ? "text-white" : "text-[#030637]"
            } font-bold text-4xl`}
          >
            My Projects
          </h1>
          <div className=" w-full   flex flex-col justify-center items-center min-h-[50vh] ">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
