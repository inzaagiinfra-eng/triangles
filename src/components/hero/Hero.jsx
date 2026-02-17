import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/home.jpg",
  "/images/office.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
           Find Your Dream Property Today
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200">
          Buy, sell, or rent residential and commercial properties with confidence. 
          We offer premium homes, office spaces for lease, and investment opportunities 
          tailored to your needs.
        </p>

        <div className="flex gap-4">
          <Link to="/about" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
            Explore Now
          </Link>

          <Link to="/services" className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;
