import React from 'react';

const CadetProgram = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="relative flex flex-col lg:flex-row items-center w-full h-96">
        
        {/* Text Box (70% of the screen) */}
        <div className="w-full lg:w-7/10 p-8 space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
            RUNWAY24 - The Final Word for Aviation Aspirants!
          </h1>
          <p className="text-lg font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text lg:w-7/10">
            Whether you are new to the industry or looking to further develop your skills, RUNWAY24 Aviation Academy offers a full range of courses to elevate your aviation career.
          </p>
          <p className="text-lg font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text lg:w-7/10">
            Our goal is simple: to establish the finest and most trusted aviation training academy. With high demand for competent professionals, we are committed to selecting and developing the most talented trainees.
          </p>
          <p className="text-lg font-medium bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text lg:w-7/10">
            Our focus is to assist aspirants in accessing high-quality training programs, approved by IATA and ICAO, with an affordable fee structure.
          </p>
          <div className="flex flex-col text-golden lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <a href="#" className="no-underline text-golden border-2 border-golden py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Learn More
            </a>
            <a href="#" className="no-underline text-golden border-2 border-golden py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Eligibility
            </a>
          </div>
        </div>

        {/* Image Box (30% of the screen) */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:w-3/10 h-full relative">
          <img
            src="../../images/img10.jpg"
            alt="Aviation Student"
            className="w-96 h-96 object-cover rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default CadetProgram;
