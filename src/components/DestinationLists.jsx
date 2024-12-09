import React from "react";
import africa from "../assets/images/africa.avif";
import australia from "../assets/images/australia.avif";
import spain from "../assets/images/spain.avif";
import swizerland from "../assets/images/swizerland.avif";
import thailand from "../assets/images/thailand.avif";

const DestinationLists = () => {
  return (
    <div
      className="w-full h-screen  flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 bg-white"
      id="DestinationList"
    >
      {/* Heading */}
      <h3 className="font-reey text-[#e8604c] text-[20px]">
        Destination Lists
      </h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-[#303141] text-center">
        Go Exotic Places
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 w-full max-w-6xl mt-10">
        {/* Row 1 */}
        <div
          className="relative rounded-lg shadow-md col-span-1 lg:col-span-3 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 h-64"
          style={{
            backgroundImage: `url(${africa})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            Africa
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-md col-span-1 sm:col-span-2 lg:col-span-6 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 h-64"
          style={{
            backgroundImage: `url(${australia})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            Australia
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-md col-span-1 lg:col-span-3 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 h-64"
          style={{
            backgroundImage: `url(${spain})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            Spain
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="relative rounded-lg shadow-md col-span-1 sm:col-span-2 lg:col-span-7 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 h-64"
          style={{
            backgroundImage: `url(${swizerland})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            Switzerland
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-md col-span-1 lg:col-span-5 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 h-64"
          style={{
            backgroundImage: `url(${thailand})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            Thailand
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationLists;
