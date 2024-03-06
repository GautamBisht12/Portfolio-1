import { useTypewriter } from "react-simple-typewriter";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import { selectDarkMode } from "../store/features/darkModeSlice";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Developer ", "React Js Dev", "MERN Stack Dev "],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 100,
  });

  const isDarkModeEnabled = useSelector(selectDarkMode);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    const homeSecAni = () => {
      tl.from(".home-ani-text , .home-img", {
        scale: 0,
        duration: 1,
      });
    };
    const homeLastName = () => {
      tl.from(".name", {
        opacity: 0,
        y: -200,
        duration: 1,
        stagger: 1,
      });
    };

    homeSecAni();
    homeLastName();
  }, []);

  return (
    <>
      <div
        id="home"
        className={`home-ani  w-full h-[90vh] flex flex-col items-center   ${
          isDarkModeEnabled ? "darkHome" : "lightHome"
        }   `}
      >
        <h1 className="home-ani-text text-2xl mt-[120px] mb-[30px]  font-bold">
          Hey ✋ I'm
        </h1>

        <div
          className={`home-img absolute top-[290px] animate-spin w-[208px] h-[206px] rounded-[50%] ${
            isDarkModeEnabled ? "gradient-bg" : "pfpGradient"
          }`}
        ></div>
        <div
          id="card"
          className="home-img relative max-sm:top-[39px] top-[40px] w-[200px] h-[200px] rounded-[100px] "
        >
          <img
            className="rounded-[100px] "
            src="assets/pfp.jpeg"
            alt="profile"
          />
        </div>
        <h1 className="name   home-ani text-4xl mt-[90px] mb-5 linear-wipe   font-bold">
          Gautam
          <span className="lastName ml-2">Bisht</span>
        </h1>

        <h2 className=" text-2xl font-bold">
          {" "}
          <span className="hidden">i</span> {typeEffect}
        </h2>
      </div>
      <Skills />
      <About />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
