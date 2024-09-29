import React, {useEffect} from "react";
import { projects } from "../information";

const Projects: React.FC = () => {
    useEffect(() => {
        const videoElements = document.querySelectorAll('video');
        videoElements.forEach(video => {
            // Only attempt to play the video if it is currently paused
            if (video.paused) {
                video.play().catch(error => {
                    console.error("Error playing video:", error);
                });
            }
        });
    }, [])

    return (
        <div id="projects" className="w-full flex flex-col min-h-screen items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-dark-blue">
            <h1 className="text-large font-playfair font-bold">Projects</h1>
            <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
            <div className="w-full flex flex-col justify-center items-center opacity-100 gap-10" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                {projects.map((project) => (
                    <>
                        {project.type === 'web' ? (
                            <div className="w-[100%] lg:w-[80%] p-0 md:p-[8px] relative rounded-3xl outline outline-1 outline-[#f2f2f265] outline-offset-[-1px] bg-[#f2f2f20a] shadow-[0_40px_80px_#00000080] hover:shadow-[0_40px_80px_#000000cc] transition-all duration-300 ease-in-out">
                                <div className="bg-gradient-to-br from-[#252525] to-[var(--background)] text-[var(--on-background)] border border-[#3d3d3d] transition-all duration-400 ease-[cubic-bezier(.165,.84,.44,1)] overflow-hidden pt-[26px] px-[24px] md:pt-[32px] md:px-[29px] h-auto rounded-3xl self-stretch p-[8px] relative md:h-[710px] group" 
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundImage = `radial-gradient(circle at 50% 0, ${project.color}40, transparent 60%), repeating-radial-gradient(circle at 50% 0, ${project.color}66, transparent)`;
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundImage = 'none';
                                        e.currentTarget.style.backgroundColor = '#0d1321';
                                      }}
                                >
                                    <h1 className="text-[30px] font-playfair font-bold mb-3">{project.name}</h1>
                                    <p className="text-[#f2f2f2cc] mb-5">{project.description}</p>
                                    <img src="/Projects/arrow.svg" className="absolute hidden md:block right-[25px] top-[33px] h-[32px] group-hover:translate-x-3 transition-transform duration-300 ease-in-out"/>
                                    <video className="w-fit rounded-tl-2xl rounded-tr-2xl transform group-hover:translate-y-[-10px] transition-transform duration-300 ease-in-out" autoPlay muted loop playsInline controls={false} src={project.video}/>
                            </div>
                        </div>
                        ) : (
                            <div className="p-[8px] w-[100%] lg:w-[80%] pt-[26px] px-[24px] md:pt-[32px] md:px-[29px] relative rounded-3xl outline outline-1 outline-[#f2f2f201] outline-offset-[-1px] shadow-[0_40px_80px_#00000080] group"
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundImage = `radial-gradient(circle at 50% 0, ${project.color}40, transparent 60%), repeating-radial-gradient(circle at 50% 0, ${project.color}66, transparent)`;
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundImage = 'none';
                                e.currentTarget.style.backgroundColor = '#0d1321';
                              }}
                            >
                                <h1 className="text-[30px] font-playfair font-bold mb-3 float-">{project.name}</h1>
                                <p className="text-[#f2f2f2cc] mb-5">{project.description}</p>
                                <img src="/Projects/arrow.svg" className="absolute hidden md:block right-[25px] top-[33px] h-[32px] group-hover:translate-x-3 transition-transform duration-300 ease-in-out"/>
                                <div className="flex items-center justify-center flex-wrap gap-10 ">
                                    {project?.videos?.map((video) => (
                                        <video src={video} className="rounded-xl object-contain overflow-hidden max-h-[81vh] max-w-[80vw] group-hover:translate-y-[-5px] transition-transform duration-300 ease-in-out" muted autoPlay loop playsInline controls={false} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};    

export default Projects;
