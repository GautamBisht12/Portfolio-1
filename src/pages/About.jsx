import "../App.css";

import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
const About = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    const aboutAni = () => {
      tl.from("#about img ", {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        delay: 2,
        stagger: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "top 50%",
          scrub: 3,
        },
      });
    };
    const aboutAniText = () => {
      tl.from(".about-text  ", {
        opacity: 0,

        x: -200,
        duration: 0.6,
        delay: 2,
        stagger: 1,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 90%",
          end: "top 50%",
          scrub: 3,
        },
      });
    };
    const aboutMeDiv = () => {
      tl.from(".aboutMe-div  ", {
        opacity: 0,
        scale: 0,

        duration: 0.6,
        delay: 2,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutMe-div",
          start: "top 90%",
          end: "top 50%",
          scrub: 3,
        },
      });
    };
    const aboutMePara = () => {
      tl.from(".aboutMe-para  ", {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutMe-para",
          start: "top 80%",
          end: "top 50%",
          scrub: 3,
        },
      });
    };
    aboutAni();
    aboutAniText();
    aboutMeDiv();
    aboutMePara();
  }, []);

  return (
    <>
      <div
        className={`about-container  max-sm:h-[100vh]   w-full min-h-[60vh]  relative  flex max-sm:flex-col justify-around items-center  ${
          isDarkModeEnabled ? "darkAbout" : "lightAbout"
        } `}
      >
        <div
          id="about"
          className="max-sm:mt-[0px]  w-[100%]  max-sm:h-[40vh] h-[50vh] flex flex-col  justify-center items-center"
        >
          <h1 className="about-text w-[300px] text-center max-sm:animate-none  animate-bounce gap-5 underline text-4xl mt-10  font-bold">
            About Me
          </h1>
          <img
            className="about-img   max-sm:w-[300px] w-[400px] "
            src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
            alt="about image"
          />
        </div>
        <div className=" sm:px-10  max-sm:w-[100%] max-sm:h-[60vh]  max-sm:px-5 max-sm:items-center relative  flex flex-col justify-center items-start  w-[100%]  h-[70vh]   rounded-xl">
          <div
            className={`aboutMe-div max-sm:w-[100%]  max-sm:mb-5 max-sm:mt-0  px-10 rounded-3xl  ${
              isDarkModeEnabled ? "darkAboutGlow-Bg" : "lightAboutGlow-Bg"
            } py-5 w-[80%] max-sm:text-center max-sm:h-[70%] sm:w-[50vw] sm:h-[45vh]`}
          >
            <p className="aboutMe-para text-justify max-sm:text-center  max-sm:leading-[24px] text-lg font-semibold">
              As a MERN stack developer, I possess a deep understanding of both
              front-end and back-end development. My passion for UI/UX design
              shines through my proficiency in frameworks like{" "}
              <span className="text-blue-950"> Tailwind CSS</span> and{" "}
              <span className="text-blue-900"> Material UI </span>, allowing me
              to build user-friendly interfaces that are both beautiful and
              functional.
            </p>
            <p className="aboutMe-para  hidden lg:block text-justify mb-5max-sm:mb-4  mt-2 text-lg font-semibold">
              {" "}
              I'm a firm believer in continuous learning and actively seek out
              new techniques and skills to stay ahead of the curve, often
              relying on
              <span className="text-red-400"> YouTube</span> tutorials to expand
              my knowledge base. This dedication to lifelong learning and my
              unwavering enthusiasm for crafting innovative projects make me a
              valuable asset to any team.
            </p>
            <div className="aboutMe-para mt-[20px]">
              <a
                href="assets/Gautam-Bisht.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkModeEnabled ? "resume-btn-dark" : "resume-btn-light "
                }  w-[100px] text-center px-5 py-2 rounded `}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
