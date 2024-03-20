import { Link } from "react-router-dom";
import { Projects } from "../data";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const projectsCard = () => {
      tl.from(".project-card", {
        scale: 0,

        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          scrub: 4,
          trigger: ".project-card",
          start: "top 80%",
          end: "top 60%",
        },
      });
    };
    projectsCard();
  }, []);

  return (
    <>
      <div className=" w-[100%] min-h-[40vh] sm:flex p-6 flex-wrap justify-around items-center gap-10">
        {Projects.map((project) => (
          <div
            key={project.id}
            className={`project-card card max-sm:mb-10 md:w-[40%]   sm:h-[85vh] p-2 py-2   ${
              isDarkModeEnabled ? "projectDark" : "projectLight"
            } rounded-md hover:scale-[1.1] transition-transform`}
          >
            <div>
              {project.id === 2 ? (
                <video src={project.video} autoPlay={true} muted loop></video>
              ) : (
                <img src={project.image} alt={project.projectName} />
              )}
            </div>

            <div className=" details mt-5 p-4 text-lg">
              <h1 className=" font-semibold">{project.description}</h1>
            </div>
            <div className="btns flex justify-between px-5">
              <button
                className={`  max-sm:px-[18px] hover:shadow-2xl max-sm:py-[10px]    sm:w-[14vw] sm:h-[7vh] rounded-md  ${
                  isDarkModeEnabled ? "linkBtnDark" : "linkBtnLight"
                }  text-xl`}
              >
                <Link target="_blank" to={project.githubLink}>
                  GitHub
                </Link>
              </button>
              <button
                className={`sm:w-[10vw] hover:shadow-2xl sm:h-[7vh]   max-sm:px-[18px] max-sm:py-[10px] rounded-md ${
                  isDarkModeEnabled ? "linkBtnDark" : "linkBtnLight"
                } text-xl`}
              >
                <Link target="_blank" to={project.netlifyLink}>
                  Live
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
