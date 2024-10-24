import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({ service }) => {
  const [isFlipped,setIsFlipped]= useState(false);
  const handleHover= ()=>{
    setIsFlipped(!isFlipped);
  }
  return (
    <div 
    className="border-darkerGold border-2 bg-black shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    onMouseEnter={handleHover}  // Trigger flip on hover
    onMouseLeave={handleHover}  // Revert flip on mouse leave
  >
    {/* Flip Card Section */}
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      
      {/* Front of the Card */}
      <div className="cursor-pointer">
        <div className="relative">
          {/* Image Section */}
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-60 object-cover transition-opacity duration-300 hover:opacity-90 rounded-t-lg"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-6 bg-black">
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-gray-400 text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold">
            {service.description}
          </p>
        </div>
      </div>
      
      {/* Back of the Card */}
      <div className="cursor-pointer p-6 bg-black text-center">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-golden to-darkerGold mb-4">
          More Details
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          This is the back of the card with additional details about the service.
        </p>
        <button 
          className="px-4 py-2 bg-gradient-to-r from-golden to-darkerGold text-black font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300"
        >
          Flip Back
        </button>
      </div>
    
    </ReactCardFlip>
  </div>
  
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      title: "Commercial Pilot Training",
      imageUrl: "../../images/img1.jpg",
      description: "It’s an adventure every time you step into the cockpit. The excitement of firing up the engines, making them go full-thrust and take off will never get old. Seeing the beautiful sunsets or even stormy skies is a sight that will always amaze even the most seasoned pilots"
    },
    {
      title: "Cabin Crew Training",
      imageUrl: "../../images/img2.jpg",
      description: "Get paid to see the world. Flight attendants are able to fly around the world, explore new places and get to meet new cultures. This job is considered to broaden your horizon to a maximum and improve your communicating skills."
    },
    {
      title: "Cadet Pilot Program Preparation",
      imageUrl: "../../images/img3.jpg",
      description: "Cadet Pilot Program is a perfect launchpad for those who want to fly high. It aims at not only providing trained professionals to the aviation industry but also an assured job with airline, on completion of the course."
    },
    {
      title: "Drone Flying Training",
      imageUrl: "../../images/img1.jpg",
      description: "Drone piloting can be a well-paying profession. It's a rapidly expanding vocation that's playing a larger and larger role in many industries. There are a few fields where professional pilots are making a particularly strong impact."
    },
    {
      title: "Airport Operations",
      imageUrl: "../../images/img2.jpg",
      description: "One is responsible for ensuring that an airport is functioning as planned and all of the operations are in compliance with the prescribed regulations and policies."
    },
  ];

  return (
    <div className="w-7/10 mx-auto p-6"> {/* Adjust the width here */}
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} service={service} />
        ))}
        <button 
          className="px-6 py-2 bg-black text-golden font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300"
        >
          Explore All Services
        </button>
      </div>
    </div>
  );
};

export default Services;