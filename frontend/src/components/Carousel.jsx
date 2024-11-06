import React from 'react';
import NavBar from './NavBar';

const MergedCarousel = () => {
  const videoSrc = '../../videos/Chasing The Moon.mp4'; // Path to your video file

  return (
    <div className="relative w-full h-screen mx-auto overflow-hidden ">
      <div className="relative w-full h-full flex justify-center items-center">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>


        <NavBar />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <img
            className="hero-logo mb-4 w-40"
            src="https://aviationinsider.com/wp-content/uploads/2019/10/Group-738@2x.png"
            alt="Logo"
          />
          <h2 className="text-lg">WE UNDERSTAND YOUR DREAMS!</h2>
          <h1 className="text-2xl">Company Name</h1>
          <p>Explore Your Dreams With Flying Colors!</p>
          <div className="btn-group mt-4">
            <a
              className="no-underline bg-green-500 text-white py-2 px-4 rounded mx-1"
              href="/about"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergedCarousel;
