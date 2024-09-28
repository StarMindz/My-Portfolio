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
                        <img src="Expertise/palette-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            FRONT END DEVELOPMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
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
                        Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                </div>
                <div className="md:p-[20px] lg:border-l-0 lg:border-r-0 lg:border-t lg:border-b-0" style={{borderColor: 'rgba(242, 242, 242, 0.4)'}}>
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/laptop-code-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            BACK END DEVELOPMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                </div>
                <div className="md:p-[20px] lg:border-l lg:border-r-0 lg:border-t lg:border-b-0" style={{borderColor: 'rgba(242, 242, 242, 0.4)'}} >
                    <div className="flex flex-row gap-5 mb-5 items-center">
                        <img src="Expertise/globe-solid.svg"/>
                        <h2 className="text-[16px] md:text-[20px] font-semibold">
                            PROJECT MANAGEMENT
                        </h2>
                    </div>
                    <p className="text-small mb-[40px]">
                        Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Expertise;
