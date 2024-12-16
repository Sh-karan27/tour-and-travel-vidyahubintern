import React from "react";
import Hero from "../assets/images/HeroSection.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  //GSAP animation

  useGSAP(() => {
    gsap.to("#hero-heading1", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 1.5,
      ease: "power",
    });
    gsap.to("#hero-heading2", {
      opacity: 1,
      y: 0,
      duration: 1.3,
      delay: 2,
      ease: "power",
    });
    gsap.to("#hero-button", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2.3,
    });
    gsap.to("#hero-input", {
      opacity: 1,
      x: 0,
      delay: 3,
      duration: 1.5,
      ease: "slow",
    });
  }, []);

  return (
    <div className="w-full h-screen  ">
      {/* Hero Section */}
      <div
        className="h-full w-full bg-cover bg-center flex flex-col justify-evenly items-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4 md:px-10">
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight opacity-0 translate-y-10"
            id="hero-heading1"
          >
            Explore the World with Us
          </h1>
          <p
            className="mt-4 text-sm md:text-lg max-w-xl mx-auto opacity-0 translate-y-10"
            id="hero-heading2"
          >
            Discover breathtaking destinations and make unforgettable memories.
            Plan your next adventure today!
          </p>
          <button
            className="mt-6 px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition opacity-0 translate-y-10"
            id="hero-button"
          >
            Learn More
          </button>
        </div>

        {/* Input Section */}
        <div
          className="relative mt-10 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 translate-x-10 opacity-0"
          id="hero-input"
        >
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Destination*</label>
              <input
                type="text"
                placeholder="Enter a city"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Pax Number*</label>
              <input
                type="number"
                placeholder="2"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Check-in*</label>
              <input
                type="date"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Check-out*</label>
              <input
                type="date"
                className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="sm:col-span-2 md:col-span-4 flex justify-center">
              <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition">
                Inquire Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
