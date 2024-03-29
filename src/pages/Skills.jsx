import { useSelector } from "react-redux";
import { useEffect } from "react";
import { resSkills, skills } from "../data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { selectDarkMode } from "../store/features/darkModeSlice";

const Skills = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useEffect(() => {
    const skilsTextAni = () => {
      tl.from(".skills-text ", {
        opacity: 0,

        x: -200,
        duration: 0.6,
        stagger: 1,

        scrollTrigger: {
          trigger: ".skills-text",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });
    };
    const skillsParaAni = () => {
      tl.from(".skills-para ", {
        opacity: 0,

        x: 200,
        duration: 1,
        stagger: 2,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".skills-text",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
      });
    };
    const skillSmCardAni = () => {
      tl.from(".skillSmCard   ", {
        opacity: 0,
        scale: 0,
        y: -200,
        duration: 2,
        stagger: 3,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".skills-text",
          start: "top 60%",
          end: "top 25%",
          scrub: true,
        },
      });
    };
    const mobileSkillsAni = () => {
      tl.from(".mobile-skills   ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        stagger: 3,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".skills-text",
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      });
    };
    skilsTextAni();
    skillsParaAni();
    skillSmCardAni();
    mobileSkillsAni();
  }, []);

  return (
    <>
      <div
        className={` sm:px-10 md:px-0 min-h-[100vh] max-sm:h-[100vh]  ${
          isDarkModeEnabled ? "darkSkills" : "lightSkills"
        }`}
      >
        <div id="skills" className="flex min-h-[100vh] items-center flex-col">
          <div className="text-center  max-sm:px-14 overflow-hidden">
            <h1 className="skills-text  text-3xl mt-12 font-bold  ">Skills</h1>
            <p className="skills-para text-2xl my-[14px] font-bold  ">
              Here are some of my skills on which I have been working on .
            </p>
          </div>
          <div className="max-sm:hidden  flex justify-around max-sm:flex-col max-sm:px-10 max-sm:py-10 flex-wrap md:flex-row">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`skills-card   ${
                  isDarkModeEnabled ? "card-glow" : "skillsGradient"
                }  md:w-[40%]  `}
              >
                {" "}
                <h2 className="text-2xl  font-bold my-4 h-16 text-[#191924]">
                  {skill.title}
                </h2>
                <div className="flex-wrap w-full mb-[160px] flex items-center justify-center max-h-[40vh]">
                  {skill.skills.map((item, index) => (
                    <div
                      key={index}
                      className="skillSmCard flex max-sm:w-25  max-sm:flex-col max-sm:m-1 max-sm:gap-1 max-sm:h-[60px] h-12 m-2 text-[#F2F3F4] justify-center gap-4 items-center bg-[#030637]
                       font-bold border-2 rounded-xl border-gray-300 w-40"
                    >
                      <img
                        className="h-[30px] max-sm:w-5 max-sm:h-5 w-[30px]"
                        src={item.image}
                      />
                      <p className="max-sm:text-center max-sm:text-sm max-sm:text-white">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="max-sm:w-full max-sm:p-4 max-sm:flex max-sm:flex-wrap   max-sm:h-[60vh]">
            <div className=" md:hidden max-sm:h-[50vh] max-sm-w-full max-sm:flex-wrap glass-background max-sm:mb-10 max-sm:rounded-2xl glow-btn    max-sm:justify-center max-sm:items-center  max-sm:flex">
              {resSkills.map((skill, index) => (
                <div
                  key={index}
                  className="mobile-skills sm:hidden max-sm:flex bg-[#030637] max-sm:justify-center max-sm:rounded-lg max-sm:items-center  max-sm:w-[100px]   max-sm:flex-col max-sm:m-1 max-sm:gap-1 max-sm:h-[60px] "
                >
                  <img
                    className=" max-sm:w-5 max-sm:h-5 w-[30px]"
                    src={skill.image}
                  />
                  <p className="max-sm:text-center max-sm:text-sm max-sm:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
