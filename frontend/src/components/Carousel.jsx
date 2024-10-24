import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const MergedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: '../../images/img2.jpg',
      text: 'WE UNDERSTAND YOUR DREAMS!',
      logo: 'https://aviationinsider.com/wp-content/uploads/2019/10/Group-738@2x.png', // Example logo
      buttonLinks: [
        { text: 'About Us', url: '/about' },
      ],
    },
    {
      image: '../../images/img2.jpg',
      text: 'Learn from Industry Experts',
      logo: 'https://aviationinsider.com/wp-content/uploads/2019/10/Group-738@2x.png',
      buttonLinks: [
        { text: 'About Us', url: '/' },
        { text: 'Online Store', url: '/' },
      ],
    },
    {
      image: '../../images/img2.jpg',
      text: 'Achieve Your Dreams',
      logo: 'https://aviationinsider.com/wp-content/uploads/2019/10/Group-738@2x.png',
      buttonLinks: [
        { text: 'About Us', url: '/' },
        { text: 'Online Store', url: '/' },
      ],
    },
  ];

  // Auto-slide timer setup
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const getSlideStyle = (index) => {
    const isActive = index === currentSlide;
    const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
    const isNext = index === (currentSlide + 1) % slides.length;

    if (isActive) {
      return {
        width: '100%',
        transform: 'translateX(0)',
        opacity: 1,
        filter: 'none',
      };
    } else if (isPrev || isNext) {
      return {
        width: '0',
        opacity: 0,
        filter: 'blur(4px)',
      };
    } else {
      return {
        opacity: 0,
        width: '0',
      };
    }
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden">
      <div className="relative w-full h-[600px] flex justify-center items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out transform`}
            style={getSlideStyle(index)}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
            {/* Text Overlay */}
            {index === currentSlide && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50"
              >
                <img
                  className="hero-logo mb-4 w-40"
                  src={slide.logo}
                  alt="Logo"
                />
                <h2 className="text-lg">{slide.text}</h2> 
                <h1 className="text-2xl">Company Name</h1>
                <p>Explore Your Dreams With Flying Colors!</p>
                <div className="btn-group mt-4">
                  {slide.buttonLinks.map((link, idx) => (
                    <a
                      key={idx}
                      className={`no-underline bg-green-500 text-white py-2 px-4 rounded mx-1`}
                      href={link.url}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="text-white bg-transparent border border-white rounded-full p-2 shadow-lg hover:bg-gray-800 hover:bg-opacity-50 transition transform hover:scale-105"
        >
          <FaArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="text-white bg-transparent border border-white rounded-full p-2 shadow-lg hover:bg-gray-800 hover:bg-opacity-50 transition transform hover:scale-105"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-transparent">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-darkerGold' : 'bg-golden'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MergedCarousel;
