import { resSkills, skills } from "../data";

const Skills = () => {
  return (
    <>
      <div id="skew" className=" sm:px-10 md:px-0 min-h-[100vh]  bg-[#191924] ">
        <div
          id="skills"
          className="flex skills  min-h-[100vh] items-center flex-col"
        >
          <div className="text-center max-sm:px-14">
            <h1 className="text-3xl mt-12 font-bold   text-[#F2F3F4]">
              Skills
            </h1>
            <p className="text-2xl my-[14px] font-bold  text-[#F2F3F4]">
              Here are some of my skills on which I have been working on .
            </p>
          </div>
          <div className="max-sm:hidden  flex justify-around max-sm:flex-col max-sm:px-10 max-sm:py-10 flex-wrap md:flex-row">
            {skills.map((skill, index) => (
              <div key={index} className=" skills-card  md:w-[40%]   ">
                {" "}
                {/* Use md:w-1/3 to make them take 1/3 of the width on larger screens */}
                <h2 className="text-2xl  font-bold my-4 h-16 text-[#191924]">
                  {skill.title}
                </h2>
                <div className="flex-wrap w-full mb-[160px] flex items-center justify-center max-h-[40vh]">
                  {skill.skills.map((item, index) => (
                    <div
                      key={index}
                      className="flex max-sm:w-25  max-sm:flex-col max-sm:m-1 max-sm:gap-1 max-sm:h-[60px] h-12 m-2 text-[#F2F3F4] justify-center gap-4 items-center bg-sky-900 font-bold border-2 rounded-xl border-gray-300 w-40"
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
          <div className="max-sm:w-full max-sm:p-5 max-sm:flex max-sm:flex-wrap  max-sm:h-[80vh]">
            <div className=" max-sm-w-full max-sm:flex-wrap glass-background max-sm:mb-10 max-sm:rounded-2xl glow-btn   max-sm:justify-center max-sm:items-center  max-sm:flex">
              {resSkills.map((skill, index) => (
                <div
                  key={index}
                  className="max-sm:flex max-sm:justify-center max-sm:rounded-lg max-sm:items-center  max-sm:w-[100px] max-sm:bg-purple-950  max-sm:flex-col max-sm:m-1 max-sm:gap-1 max-sm:h-[60px] "
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