import { FaArrowRightLong } from "react-icons/fa6";
import "../App.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="relative  w-full h-[80vh]  flex  justify-start items-center bg-[#1C1E27]">
        <div
          id="about"
          className="w-[40%] h-[80vh] flex flex-col justify-center items-center"
        >
          <h1 className="text-center flex animate-bounce gap-5 text-white underline text-3xl mt-10  font-bold">
            {" "}
            About Me{" "}
            <FaArrowRightLong className="animate-pulse text-red-600 mt-1 text-4xl" />
          </h1>
          <img
            className="w-[400px] "
            src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
            alt=""
          />
        </div>
        <div className="  relative  flex flex-col justify-center  mt-[50px] ml-[100px] w-[60%]  h-[90vh]   rounded-xl">
          <div className="glass-background card-glow-yellow px-10 rounded-3xl py-5 w-[70%]">
            <p className="text-justify text-white text-lg font-semibold">
              As a MERN stack developer, I possess a deep understanding of both
              front-end and back-end development. My passion for UI/UX design
              shines through my proficiency in frameworks like{" "}
              <span className="text-blue-950"> Tailwind CSS</span> and{" "}
              <span className="text-blue-900"> Material UI </span>, allowing me
              to build user-friendly interfaces that are both beautiful and
              functional.
            </p>
            <p className="text-justify text-white  mt-5 text-lg font-semibold">
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
          <Link className=" bg-[#191924] text-white hover:bg-slate-50 hover:text-black transition-all w-[100px] text-center px-5 py-2 rounded-xl mt-5  ">
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
