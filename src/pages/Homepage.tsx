import React, { useEffect, useState } from "react";
import NameText from "../components/Name";
import StarsCanvas from "../components/canvas/Star";

const Homepage: React.FC<{ scrollToSection: (sectionId: string) => void }> = ({ scrollToSection }) => {
  const texts = [
    { text: "Fullstack Software Developer", colorClass: "text-white" },
    { text: "AI & Deep Learning Engineer", colorClass: "text-white" },
    { text: "Front End Developer ", colorClass: "text-white" },
    { text: "Experienced Project Manager", colorClass: "text-white" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (isTyping) {
      if (letterIndex < texts[currentIndex].text.length) {
        typingTimeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[currentIndex].text[letterIndex]);
          setLetterIndex(letterIndex + 1);
        }, 100); // Adjust typing speed here
      } else {
        setTimeout(() => setIsTyping(false), 2000); // Wait before starting to erase
      }
    } else {
      if (letterIndex > 0) {
        typingTimeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setLetterIndex(letterIndex - 1);
        }, 50); // Adjust erasing speed here
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [letterIndex, isTyping, texts, currentIndex]);

  const downloadUrl = 'https://drive.google.com/file/d/1lHWJYDkx2TEb6D9zEVigBNyR_e9TEob1/view?usp=sharing';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', '');
    link.click();
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-start -mt-10">
        <NameText />
        <div className="text-xl mb-5 font-montserrat">(StarMindz)</div>
        <div className={`text-xl max-w-[96%] font-bold flex ${texts[currentIndex].colorClass}`}>
          <span className="text-2xl font-montserrat text-center max-w-[96%]">{currentText}</span>
          <span className="border-r-2 border-white animate-blink ml-1">&nbsp;</span>
        </div>
        <div className="flex space-x-4 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/StarMindz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-44 hover:justify-between"
          >
            <div className="flex items-center justify-center h-full w-12 rounded-full text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
              <i className="fab fa-github text-xl"></i>
            </div>
            <span className="absolute font-montserrat left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 group-hover:text-gray-800">
              GitHub
            </span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/stanley-nnamani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group relative flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-44 hover:justify-between"
          >
            <div className="flex items-center justify-center h-full w-12 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </div>
            <span className="absolute font-montserrat left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600 group-hover:text-blue-600">
              LinkedIn
            </span>
          </a>
          {/* Twitter */}
          <a
            href="https://x.com/Starminds2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="group relative flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-44 hover:justify-between"
          >
            <div className="flex items-center justify-center h-full w-12 rounded-full text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </div>
            <span className="absolute font-montserrat left-20 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400 group-hover:text-blue-400">
              Twitter
            </span>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/star_mindz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group relative flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:w-44 hover:justify-between"
          >
            <div className="flex items-center justify-center h-full w-12 rounded-full text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </div>
            <span className="absolute font-montserrat left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pink-600 group-hover:text-pink-600">
              Instagram
            </span>
          </a>
        </div>
        <button onClick={handleDownload} className="mt-10 shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase bg-transparent hover:bg-teal hover:text-white dark:text-neutral-200 transition duration-200 font-montserrat">
          Download Resume
        </button>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center justify-center cursor-pointer font-montserrat" onClick={() => scrollToSection("about")}>
        Learn More
        <i className="fas fa-thin fa-caret-down fa-2xl text-white"></i>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Homepage;
