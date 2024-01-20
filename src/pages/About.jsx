import { FaArrowRightLong } from "react-icons/fa6";
import "../App.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="   max-sm:h-[100vh]   w-full min-h-[60vh]  relative  flex max-sm:flex-col justify-around items-center   bg-[#1C1E27]">
        <div
          id="about"
          className="max-sm:mt-[0px]  w-[100%]  max-sm:h-[40vh] h-[50vh] flex flex-col  justify-center items-center"
        >
          <h1 className="   text-center max-sm:animate-none  flex animate-bounce gap-5 text-white underline text-3xl mt-10  font-bold">
            {" "}
            About Me{" "}
            <FaArrowRightLong className="max-sm:hidden animate-pulse text-red-600 mt-1 text-4xl" />
          </h1>
          <img
            className="   max-sm:w-[300px] w-[400px] "
            src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
            alt="about image"
          />
        </div>
        <div className="  max-sm:w-[100%] max-sm:h-[60vh]  max-sm:px-5 max-sm:items-center relative  flex flex-col justify-center items-start  w-[100%]  h-[90vh]   rounded-xl">
          <div className=" max-sm:w-[100%]  max-sm:mb-5 max-sm:mt-0 glass-background card-glow-yellow px-10 rounded-3xl py-5 w-[80%]">
            <p className="text-justify max-sm:text-center  max-sm:leading-[24px] text-white text-lg font-semibold">
              As a MERN stack developer, I possess a deep understanding of both
              front-end and back-end development. My passion for UI/UX design
              shines through my proficiency in frameworks like{" "}
              <span className="text-blue-950"> Tailwind CSS</span> and{" "}
              <span className="text-blue-900"> Material UI </span>, allowing me
              to build user-friendly interfaces that are both beautiful and
              functional.
            </p>
            <p className=" max-sm:hidden text-justify text-white  mt-2 text-lg font-semibold">
              {" "}
              I'm a firm believer in continuous learning and actively seek out
              new techniques and skills to stay ahead of the curve, often
              relying on
              <span className="text-red-400"> YouTube</span> tutorials to expand
              my knowledge base. This dedication to lifelong learning and my
              unwavering enthusiasm for crafting innovative projects make me a
              valuable asset to any team.
            </p>
          </div>
          <Link className="max-sm:mb-[20px] bg-[#191924] text-white hover:bg-slate-50 hover:text-black transition-all w-[100px] text-center px-5 py-2 rounded-xl mt-5  ">
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
