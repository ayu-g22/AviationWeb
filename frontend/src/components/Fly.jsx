import React, { useEffect, useState } from 'react';
import planeImage from '../img11.png'; // Update with your plane image path
import runway from "../img12.jpg";

const Fly = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [planePosition, setPlanePosition] = useState(0); // Position of the plane
  const [tiltAngle, setTiltAngle] = useState(0); // Angle of tilt

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Update the plane position based on the scroll amount
      setPlanePosition((prevPosition) =>
        Math.min(prevPosition + scrollDifference, window.innerWidth)
      );

      // Adjust tilt angle based on scroll direction
      if (scrollDifference > 0) {
        // Scrolling down, tilt left
        setTiltAngle(-10); // Tilt left by 10 degrees
      } else if (scrollDifference < 0) {
        // Scrolling up, tilt right
        setTiltAngle(0); // Tilt right by 10 degrees
      } else {
        // Reset tilt when there is no scroll
        setTiltAngle(0);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Depend on lastScrollY to calculate the new position

  return (
    <div className="relative  flex justify-center items-center overflow-hidden">
      {/* Runway Image */}
      <img
        src={runway}
        alt="Runway"
        className="absolute w-full h-full object-cover"
        style={{
          zIndex: 0, // Set runway at a lower z-index
        }}
      />

      {/* Plane Image */}
      <img
        src={planeImage}
        alt="Plane"
        className="absolute transition-transform duration-500"
        style={{
          transform: `translateX(${planePosition}px) rotate(${tiltAngle}deg)`, // Moves the plane horizontally and applies rotation
          top: '50%', // Center vertically
          left: 0, // Starting position on the left side
          transform: `translate(${planePosition}px, -50%) rotate(${tiltAngle}deg)`, // Adjust transform to also vertically center the plane
          zIndex: 1, // Ensure plane is above the runway
        }}
      />
    </div>
  );
};

export default Fly;
