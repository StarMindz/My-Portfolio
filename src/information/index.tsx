// import { color } from "framer-motion";

    
  const technologies = [
    {
      name: "HTML5",
      icon: "/public/Skills/html.png",
    },
    {
      name: "CSS3",
      icon: "/public/Skills/css.png",
    },
    {
      name: "JavaScript",
      icon: "/public/Skills/js.png",
    },
    {
      name: "TypeScript",
      icon: "/public/Skills/typescript.png",
    },
    {
        name: "React",
        icon: "/public/Skills/react.svg",
      },
    {
      name: "Next.js",
      icon: "/public/Skills/next.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/public/Skills/tailwind.png",
    },
    {
        name: "Python",
        icon: "/public/Skills/python.png",
    },
    {
        name: "FastAPI",
        icon: "/public/Skills/FastAPI.png",
    },
    {
        name: "Pytorch",
        icon: "/public/Skills/pytorch.png",
    },
    {
        name: "Tensorflow",
        icon: "/public/Skills/tensorflow.png",
    },
    {
        name: "Langchain",
        icon: "/public/Skills/langchain.png",
    },
    {
        name: "Redux",
        icon: "/public/Skills/redux.png",
    },
    {
        name: "PostgreSQL",
        icon: "/public/Skills/postgresql.png",
    },
    {
        name: "Flask",
        icon: "/public/Skills/postgresql.png",
    },
    {
        name: "Ruby on Rails",
        icon: "/public/Skills/postgresql.png",
    }
  ];
  
  const experiences = [
    {
      title: "Software Developer / AI Engineer",
      company_name: "Kayros AI, France",
      icon: "/Experience/kayros.jpeg",
      iconBg: "#383E56",
      date: "Sep 2023 – Mar 2024",
      points: [
        "Built user-friendly Quest managers integrated on popular social media platforms enabling users to complete quests and earn right from their favourite social media platforms.",
        "Migrated website from Next 13 to Next 14 utilizing Tailwind CSS for styling.",
        "Built AI tool for generating custom chatbots for websites utilizing LLM models, Langchain and vector databases.",
        "Leveraged knowledge in React, Next.js, Langchain, Tailwind CSS, GIT, Typescript, Google Cloud, and OpenAI expertise.",
      ],
    },
    {
      title: "Mentor",
      company_name: "Microverse, USA",
      icon: "/Experience/microverse.jpg",
      iconBg: "#E6DEDD",
      date: "Jun 2022 – Sep 2022",
      points: [
        "Mentored Junior Web Developers, providing technical support through code reviews.",
        "Provided advice and tips on how to maintain motivation to maintain longevity in the program.",
        "Proposed improvements to code organization to improve code quality and overall performance.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Lead Software Developer",
      company_name: "Harchive, Nigeria",
      icon: "/Experience/harchive.png",
      iconBg: "#ffffff",
      date: "May 2022 – Dec 2022",
      points: [
        "Led a cross-functional team to third place finish in the Kaduna State ICT hackathon, developing a platform for efficient health record access with the potential to increase healthcare speed in the state by 5X.",
        "Leveraged skills in Full-stack software development, project management, and public speaking.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "PUP Industries",
      icon: "/Experience/pup.jpeg",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Diversified PUP Industries' product line with P2P, a mosquito repellent paint made from upcycled plastic waste, creating income opportunities for 10 at-risk youths and 20 women.",
        "Contributed to leading a team of over 150 members to develop innovative products, resulting in victory at the Enactus Nigeria National Competition and achieving fourth place in the global round of the Action with Africa challenge, securing a €5,000 grant and representing Nigeria on international stages.",
        "Assisted in securing $2,250 from the Ford Foundation and over $10,000 in non-equity funding from other competitions, supporting the successful launch of two new products.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Stanley Nnamani is a very talented developer, focused on learning, bettering himself, and building great solutions. On top of that, he's also a good communicator and a great team player. \nI had a good experience working with him.",
      name: "Didier Ganthier",
      designation: "Content Reviewer",
      company: "Stack Overflow, USA",
      image: "/Testimonials/didier.jpeg",
    },
    {
      testimonial:
        "I have had the pleasure of working closely with Stanley, and I can confidently say that he is an exceptional developer with a remarkable ability to tackle complex problems. \nOne of Stanley's greatest strengths is his ability to communicate effectively with both technical and non-technical team members. He has a talent for breaking down complex concepts into clear and understandable terms, which fosters collaboration and ensures that everyone is on the same page.",
      name: "Alaa Mekki",
      designation: "Frontend Lead Developer",
      company: "Kayros World, France",
      image: "/Testimonials/alaa.jpeg",
      url: "https://www.linkedin.com/in/stanley-nnamani"
    },
    {
      testimonial:
        "Stanley is a smart, highly skilled, and kind software developer. One of the most important strengths I would like to highlight is his ability to join people and solve problems in a smart and simple way as well. \nWe have worked together on several projects, and I can say he is a committed professional and an excellent team player. I highly recommend him for any software development role.",
      name: "Camilo Vela",
      designation: "Frontend Lead Developer",
      company: "DANE, Colombia",
      image: "/Testimonials/camilo.jpeg",
      url: "https://www.linkedin.com/in/stanley-nnamani"
    },
    {
      testimonial:
        "It's always a pleasure working with Stanley Nnamani! Two things I absolutely love about Stanley are his 'work ethic' and how critical he thinks. He always thinks outside the box and makes sure that all factors are considered before making a decision. 3 years working with him and his growth have been amazing; willing to learn, humble and always willing to take the initiative to go the extra mile.  Working with Stanley has been fulfilling and I am sure whoever decides to work with him or for him will no doubt enjoy what he has to offer.",
      name: "David Daniel Bdliya",
      designation: "Founder & Lead Strategist",
      company: "Grow With DDB, Nigeria",
      image: "/Testimonials/david.jpeg",
      url: "https://www.linkedin.com/in/stanley-nnamani"
    },
    {
      testimonial:
        "Stanley has been a great inspiration, always pursuing new things to learn, and he has been a great teammate. A multi-skilled individual with an extensive understanding of programming, algorithms, and data structures.",
      name: "Daniel Sierra",
      designation: "Lead Developer",
      company: "Horizon, Canada",
      image: "/Testimonials/daniel.jpeg",
      url: "https://www.linkedin.com/in/stanley-nnamani"
    },
  ];
  
  const projects = [
    {
      name: "Kayros World (Quest Manager)",
      type: "web",
      description:
        "AI-powered Web3 platform that enable users earn rewards directly to their wallets by engaging with social media content called Quests.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      color:"#BF40BF",
      video: "/Projects/kayros2.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "Glycobuddy",
      type: "mobile",
      description:
        "AI-powered application that helps diabetics scan their meals, plan meals, and receive daily personalized meal recommendations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      color: "#687870",
      videos: ["/Projects/glycobuddy2.mp4", "/Projects/glycobuddy4.mp4", "/public/Projects/glycobuddy5.mp4"],
      source_code_link: "https://github.com/",
    },
    {
      name: "TEDxSamaru Website",
      type: "web",
      description:
        "Official website for TEDxSamaru, where attendees can find information about upcoming events, register, and receive virtual tickets with a QR code via email.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      color: "#EB0028",
      video:"/Projects/tedx.mp4",
      source_code_link: "https://github.com/",
    },
    {
      name: "WA Health Website",
      type: "web",
      description:
        "Official Website for WA Health, an innovative startup focused on revolutionizing healthcare administration through AI automation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      color: "#00BFFF",
      video:"/Projects/wahealth.mp4",
      source_code_link: "https://github.com/",
    },

  ];
  
  export { technologies, experiences, testimonials, projects };
  