import React from "react";
const Aboutme: React.FC = () => {

  return (
    <div id="about" className="flex flex-col items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] justify-center w-full bg-dark-blue">
      <h1 className="text-large font-playfair font-bold w-full">Hey, I'm Stanley.</h1>
      <p className="w-full lg:w-[65%] text-medium font-semibold leading-[1.5] mt-[1em]">I'm a curious, solution-driven full-stack software developer and AI engineer who loves to tinker, build, and create impactful, tech-driven solutions that make a difference.</p>
      <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
      <div className="flex flex-wrap lg:flex-row-reverse flex-row h-full w-full justify-between">
        <img className="w-[100%] rounded-full lg:mt-[-100px] h-fit max-w-[450px] lg:w-[35%] md:w-[300px] md:mb-10 mb-10 sm:w-[250px] sm:mb-10" src="/stanley.jpg" alt="my picture"/>
        <div className="w-full lg:w-[64%]">
          <p className="text-small tracking-wide leading-loose">
            From a young age, I’ve been captivated by the mechanics of how things work, often taking apart gadgets at home to satisfy my curiosity. This fascination led me to pursue a degree in Computer Engineering in college, where I excelled in courses like Data Structures and Algorithms and graduated at the top of my class with a CGPA of 4.9/5.0.
          </p>
          <br />
          <p className="text-small tracking-wide leading-loose">
            I developed my full-stack skills through an intensive bootcamp at Microverse, a remote program based in the United States, where I collaborated with developers worldwide on real-world projects under tight deadlines.
          </p>
          <br />
          <p className="text-small tracking-wide leading-loose">
            With over four years of experience building software solutions and working in remote and startup environments, I have honed my expertise in both frontend and backend technologies, creating scalable and efficient solutions. I also excel in developing AI-powered application and in building AI models using pytorch and tensorflow
          </p>
        </div>
        

      </div>
    </div>
  );
};

export default Aboutme;
