import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials } from "../information"; // Assuming testimonials is an array of objects

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Move to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Move to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      id="testimonial"
      className="overflow-hidden w-full flex flex-col py-[100px] px-[25px] md:px-[50px] lg:px-[100px] bg-dark-blue"
    >
      <h1 className="text-large font-playfair font-bold">Testimonials</h1>
      <span className="block my-[30px] w-[100px] h-[2px] bg-teal"></span>

      <div className="relative w-full flex items-center justify-center">
        <button
          className="absolute left-[-20px] top-40 text-white text-4xl p-2"
          onClick={handlePrev}
        >
          &#10094;
        </button>

        <motion.div
          className="carousel items-center justify-center flex min-h-[400px]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          key={currentIndex}
        >
          <div className="testimonial-content w-[90%]">
            <div className="flex flex-col md:flex-row w-[100%]  items-center justify-center md:gap-10">
                <div className="flex flex-col">
                    <img src={testimonials[currentIndex].image} alt="avatar" className="rounded-full mb-5 overflow-hidden max-w-[250px] mx-auto" />
                    <div>
                        <div className="text-center">{testimonials[currentIndex].name}</div>
                        <div className="text-center">{testimonials[currentIndex].designation},  <span className="text-teal-shine">{testimonials[currentIndex].company}</span></div>
                        
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <span className="text-[5rem] font-playfair -mb-12 text-teal-shine">“</span>
                    <p>{testimonials[currentIndex].testimonial}</p>
                    <span className="text-[5rem] font-playfair -mt-8 text-end text-teal-shine">”</span>
                    <a className="text-teal-shine hover:text-teal underline underline-offset-4" href={testimonials[currentIndex].url}>View on LinkedIn</a>
                </div>

            </div>
          </div>
        </motion.div>

        <button
          className="absolute right-[-20px] top-40 text-white text-4xl p-2"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
