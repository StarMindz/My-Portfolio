import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { motion } from "framer-motion";
// import { textVariant } from "../animations/motion";
import { experiences } from "../information";

interface Experience {
    date: string;
    iconBg: string;
    icon: string;
    company_name: string;
    title: string;
    points: string[];
  }
  
interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[100%] h-[100%] object-contain rounded-full'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
};

const Experience: React.FC = () => {      

  return (
    <div id="experience" className="w-full bg-[url('/Experience/mountain.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col min-h-screen items-start py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-overlay-gradient">
            <h1 className="text-large font-playfair font-bold " >Experience</h1>
            <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>
            <div className='mt-20 flex flex-col items-center  justify-center w-full'>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                />
                ))}
            </VerticalTimeline>
      </div>
        </div>
    </div>

  );
};

export default Experience;
