import React from "react";
import Hero from "../assets/images/HeroSection.jpeg";

const HeroSection = () => {
  return (
    <div className="w-full h-screen">
      {/* Hero Section */}
      <div
        className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Explore the World with Us
          </h1>
          <p className="mt-4 text-sm md:text-lg max-w-xl mx-auto">
            Discover breathtaking destinations and make unforgettable memories.
            Plan your next adventure today!
          </p>
          <button className="mt-6 px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition">
            Learn More
          </button>
        </div>

        {/* Input Section */}
        <div className="relative mt-10 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
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
