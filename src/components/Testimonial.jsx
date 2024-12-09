import React from "react";
import testimonialData from "../data/testimonialData";
import { RiStarSFill } from "react-icons/ri";

const Testimonial = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col py-8">
      {/* Heading Section */}
      <div className="w-full text-center py-8">
        <h2 className="font-reey text-[#e8604c] text-lg md:text-xl lg:text-2xl">
          Testimonials & Reviews
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-[#303141]">
          What They're Saying
        </p>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {testimonialData.map((testimonial) => (
          <div
            className="flex flex-col items-center text-center p-6 w-full max-w-sm bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
            key={testimonial.id}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={testimonial.imgId}
                alt="User testimonial"
                className="w-24 h-24 object-cover rounded-full border-4 border-[#e8604c]"
              />
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, index) => (
                <RiStarSFill
                  key={index}
                  className="text-[#ffa801] text-xl sm:text-2xl"
                />
              ))}
            </div>
            <p className="text-sm sm:text-base md:text-lg text-[#787780] leading-relaxed mb-4">
              {testimonial.review}
            </p>
            <h1 className="text-[#313041] text-lg md:text-xl font-medium mb-1">
              {testimonial.name}
            </h1>
            <h2 className="text-[#e8604c] text-sm sm:text-base font-medium">
              CUSTOMER
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
