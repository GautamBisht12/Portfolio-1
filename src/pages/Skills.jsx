import { skills } from "../data";

const Skills = () => {
  return (
    <>
      <div id="skew" className="  h-[100vh]  bg-[#191924] ">
        <div
          id="skills"
          className="flex skills  h-[100vh] items-center flex-col"
        >
          <h1 className="text-3xl mt-12 font-bold   text-[#F2F3F4]">Skills</h1>
          <p className="text-2xl my-[14px] font-bold  text-[#F2F3F4]">
            Here are some of my skills on which I have been working on .
          </p>
          <div className="flex w-[80%]  justify-between">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex tilt-effect  card-glow glass-background justify-between items-center border-2 rounded-md mt-10 h-[50vh] bg-[#191924] flex-col w-[38%] "
              >
                <h2 className="text-2xl font-bold my-4 h-16 text-[#191924]">
                  {skill.title}
                </h2>
                <div className=" flex-wrap  mb-[160px] flex items-center justify-center max-h-[40vh] ">
                  {skill.skills.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-12 m-2  text-[#F2F3F4] justify-center gap-4 items-center bg-sky-900 font-bold border-2 rounded-xl border-gray-300 w-40"
                    >
                      <img className="h-[30px] w-[30px]" src={item.image} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
