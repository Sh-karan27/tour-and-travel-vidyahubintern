import React from "react";
import africa from "../assets/images/africa.avif";
import australia from "../assets/images/australia.avif";
import spain from "../assets/images/spain.avif";
import swizerland from "../assets/images/swizerland.avif";
import thailand from "../assets/images/thailand.avif";

const DestinationLists = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start p-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Unique Destinations</h1>

      {/* Custom Grid Layout */}
      <div className="grid grid-cols-12 gap-4 w-full max-w-6xl h-5/6">
        {/* Row 1 */}
        <div
          className="relative rounded-lg shadow-md col-span-3 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105"
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
          className="relative rounded-lg shadow-md col-span-6 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105"
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
          className="relative rounded-lg shadow-md col-span-3 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105"
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
          className="relative rounded-lg shadow-md col-span-7 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105"
          style={{
            backgroundImage: `url(${swizerland})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center text-white font-bold">
            Switzerland
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 h-0 group-hover:h-full transition-all duration-300 ease-out transform origin-bottom flex items-center justify-center z-10">
            <button className="absolute top-4 right-4 text-white bg-heading-default px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tours
            </button>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-md col-span-5 bg-cover bg-center group overflow-hidden transform transition-all duration-300 ease-out hover:scale-105"
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
