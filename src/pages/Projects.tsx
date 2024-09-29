import React, { useEffect, useRef } from "react";
import { projects } from "../information";

const Projects: React.FC = () => {
    return (
        <div id="projects" className="w-full flex flex-col min-h-screen items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-dark-blue">
            <h1 className="text-large font-playfair font-bold">Projects</h1>
            <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
            <div className="w-full flex flex-col justify-center items-center opacity-100 gap-10">
                {projects.map((project) => (
                    <div key={project.name}>
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
                                    <VideoComponent videoSrc={project.video} />
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
                                <h1 className="text-[30px] font-playfair font-bold mb-3">{project.name}</h1>
                                <p className="text-[#f2f2f2cc] mb-5">{project.description}</p>
                                <img src="/Projects/arrow.svg" className="absolute hidden md:block right-[25px] top-[33px] h-[32px] group-hover:translate-x-3 transition-transform duration-300 ease-in-out"/>
                                <div className="flex items-center justify-center flex-wrap gap-10">
                                    {project?.videos?.map((video, index) => (
                                        <VideoComponent key={index} videoSrc={video} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Separate Video Component
const VideoComponent: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        // Check if the video is loaded and play if it's paused
        const checkAndPlayVideo = () => {
            if (video && video.paused) {
                video.play().catch(error => {
                    console.error("Error playing video:", error);
                });
            }
        };

        // Adding the event listener for when the video metadata is loaded
        if (video) {
            video.addEventListener('loadedmetadata', checkAndPlayVideo);
        }

        // Cleanup the event listener on unmount
        return () => {
            if (video) {
                video.removeEventListener('loadedmetadata', checkAndPlayVideo);
            }
        };
    }, [videoSrc]);

    return (
        <video
            ref={videoRef}
            className="w-fit rounded-tl-2xl rounded-tr-2xl transform group-hover:translate-y-[-10px] transition-transform duration-300 ease-in-out"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            src={videoSrc}
        />
    );
};

export default Projects;
