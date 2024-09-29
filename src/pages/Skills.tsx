import React from "react";
import ComputersCanvas from "../components/canvas/Computer";
import { technologies } from "../information";

const Skills: React.FC = () => {

  return (
    <div id="skills" className="w-full flex flex-col items-start py-[100px] bg-dark-blue">
        <h1 className="text-large font-playfair font-bold ml-[25px] md:ml-[50px] lg:ml-[100px]" >Skills</h1>
        <span className="block my-[30px] w-[100px] h-[2px] bg-teal ml-[25px] md:ml-[50px] lg:ml-[100px]"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="h-[650px] -mt-52">
              <ComputersCanvas />
            </div>
            <div className="px-[25px] md:px-[50px] lg:px-[100px]">
              <div className="flex flex-row gap-5 items-center justify-center mb-10 md:-mt-20">
                <img className="w-[50px]" src="/Skills/settings.png"/>
                <h2 className="text-[18px] md:text-[20px] font-semibold">
                  TOOLS AND TECHNOLOGIES
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                {technologies.map((technology) => (
                  <div className='w-[100px] h-[100px] flex text-[13px] items-center justify-center rounded-full text-center border-2 border-solid border-gray-500/50 ' key={technology.name}>
                    {technology.name}
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="px-[25px] md:px-[50px] lg:px-[100px]">
          
        </div>
    </div>
  );
};

export default Skills;
