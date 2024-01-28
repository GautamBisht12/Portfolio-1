import { useTypewriter } from "react-simple-typewriter";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import ContactForm from "./ContactForm";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Developer ", "React Js Dev", "MERN Stack Dev "],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <>
      <div
        id="home"
        className="  w-full h-[90vh] flex flex-col items-center bg-[#1C1E27] "
      >
        <h1 className="text-2xl mt-[120px] mb-[30px] text-white font-bold">
          Hey ✋ I'm
        </h1>
        <div className="absolute top-[290px] animate-spin w-[205px] h-[205px] rounded-[50%] gradient-bg"></div>
        <div
          id="card"
          className="relative max-sm:top-[39px] top-[40px] w-[200px] h-[200px] rounded-[100px] bg-red-600"
        >
          <img
            className="rounded-[100px] "
            src="assets/pfp.jpeg"
            alt="profile"
          />
        </div>
        <h1 className="text-4xl mt-[90px] mb-5 linear-wipe  text-white font-bold">
          Gautam Bisht
        </h1>

        <h2 className=" text-2xl text-white font-bold">
          {" "}
          <span className="text-[#1C1E27]">i</span> {typeEffect}
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
