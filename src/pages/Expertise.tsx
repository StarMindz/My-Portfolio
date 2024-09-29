import React from "react";
const Expertise: React.FC = () => {

  return (
    <div id="expertise" className="w-full bg-[url('/services.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-overlay-gradient">
            <h1 className="text-large font-playfair font-bold w-full">What I Do</h1>
            <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:p-[20px]">
                <div className="md:p-[20px]">
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/laptop-code-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            FRONT END DEVELOPMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        I enjoy building pixel-perfect websites and applications using TypeScript and JavaScript, with modern frameworks like React, Next.js, Three.js, and TailwindCSS, while ensuring clean, modular, and maintainable code.
                    </p>
                </div>
                <div className="md:p-[20px] lg:border-l lg:border-r-0 lg:border-t-0 lg:border-b-0" style={{borderColor: 'rgba(242, 242, 242, 0.4)'}}>
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/wand-magic-sparkles.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            AI / DEEP LEARNING
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        I specialize in creating AI-powered applications with Large Language Models and LangChain. I also build custom AI models using PyTorch and TensorFlow, focusing on delivering scalable and efficient AI solutions.
                    </p>
                </div>
                <div className="md:p-[20px] lg:border-l-0 lg:border-r-0 lg:border-t lg:border-b-0" style={{borderColor: 'rgba(242, 242, 242, 0.4)'}}>
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/database-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            BACK END DEVELOPMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        I have experience in backend development using FastAPI, Flask, and Ruby on Rails, along with PostgreSQL to build scalable and reliable applications. I’m also well-versed in CI/CD processes, Docker, AWS and GCP.
                    </p>
                </div>
                <div className="md:p-[20px] lg:border-l lg:border-r-0 lg:border-t lg:border-b-0" style={{borderColor: 'rgba(242, 242, 242, 0.4)'}} >
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/list-check-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            PROJECT MANAGEMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        I’m an experienced project manager skilled in Agile methodologies, using tools like Asana and Atlassian to streamline workflows, foster team collaboration, and deliver quality products on time and within scope.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Expertise;
