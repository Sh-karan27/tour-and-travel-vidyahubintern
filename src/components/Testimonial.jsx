import React from "react";
import testimonialData from "../data/testimonialData";
import { RiStarSFill } from "react-icons/ri";

const Testimonial = () => {
    return (
        <div className="w-11/12 h-screen mx-auto flex flex-col">
            
            {/* Heading Section */}
            <div className="w-full text-center py-8">
                <h2 className="font-reey text-[#e8604c] text-[20px]">Testimonials & Reviews</h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-[#303141] text-center">What They're Saying</p>
            </div>

            {/* customer cards */}
            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-4">
                {testimonialData.map((testimonial) => (
                    <div className=" flex flex-col items-center text-center p-8 w-[380px] h-[580px] gap-2"
                    key={testimonial.id}>
                        <div className="flex justify-center items-center rounded-[50%]">
                            <img src={testimonial.imgId} alt="User testimonial" className="rounded-[50%]" />
                        </div>
                        <div className="flex">
                            {[...Array(testimonial.rating)].map((_, index) => (
                                <RiStarSFill key={index} className="text-[#ffa801] text-[24px]"/>
                            ))}
                        </div>
                        <p className="font-sans text-[#787780] text-[18px] tracking-wider leading-loose">{testimonial.review}</p>

                        <h1 className="text-[#313041] text-[20px] font-medium font-sans">{testimonial.name}</h1>
                        <h2 className="text-[#e8604c] text-[16px] font-medium font-sans">CUSTOMER</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial;