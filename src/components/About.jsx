import React from "react";
import stripe from "../assets/images/stripe.png";
import aboutImg from "../assets/images/aboutImg.png";
import crow from "../assets/images/crow.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiCheckboxCircleFill } from "react-icons/ri";

const About = () => {
    return (
        <div className="w-full h-screen flex items-center justify-evenly bg-[#ffffff] my-16 sm:flex-col md:flex-row lg:flex-row">
        {/* left section */}
        <div className="flex flex-col w-full pl-10 relative -mt-20 z-0 ">
        <img src={crow} className="absolute left-36 top-12 animate-crowArc"/>
    <img src={aboutImg} className=""/>
    <div className="absolute flex flex-col justify-start items-start z-10 -space-y-10 right-0 top-20">
        <h2 className="font-reey text-[80px] text-[#e8604c] w-full">30%</h2>
        <p className="font-sans text-[50px] text-[#313041] font-medium w-full">Discount</p>
    </div>


            {/* booking div */}
            <div className="flex justify-center items-center gap-4 bg-white px-7 py-5 rounded-lg absolute z-10 bottom-48 left-2 border border-[#e0e0e0] shadow-sm cursor-pointer">
    <FaPhoneVolume className="text-[#e8604c] text-[20px]" />
    <div className="flex flex-col">
        <p className="font-sans text-[10px] text-[#787780] font-medium tracking-wide">BOOK TOUR NOW</p>
        <p className="font-sans text-[18px] text-[#313041] font-medium tracking-wide">666-888-0000</p>
    </div>
</div>

        </div>

        {/* right section */}
        <div className="flex flex-col w-full relative z-10 px-24">
            <img src={stripe} className="absolute -z-10 right-32 -top-12 animate-bounce-slow"/>
            <h2 className="font-reey text-[20px] text-[#e8604c]">Get to know us</h2>
            <h1 style={{wordSpacing:"-0.1rem"}}
            className="text-[50px] font-sans font-semibold text-[#313041] leading-tight">Plan Your Trip with Trevily</h1>

            <p className="text-[18px] text-[#787780] font-sass my-10 leading-loose">
            There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't look even slightly.</p>

            <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                    <RiCheckboxCircleFill className="text-[#e8604c] text-[20px]"/>
                    <p className="text-[18px] text-[#313041] font-sass">Invest in your simply neighborhood</p>
                </div>
                <div className="flex gap-3 items-center">
                    <RiCheckboxCircleFill className="text-[#e8604c] text-[20px]"/>
                    <p className="text-[18px] text-[#313041] font-sass">Support people in free text extreme need</p>
                </div>
                <div className="flex gap-3 items-center">
                    <RiCheckboxCircleFill className="text-[#e8604c] text-[20px]"/>
                    <p className="text-[18px] text-[#313041] font-sass">Largest global industrial business community</p>
                </div>
            </div>
            {/* wrapped inside div because it is taking the full width of div */}
            <div className="flex justify-start my-16">
                <button
                    className="relative inline-block px-6 py-4 bg-[#e8604c] text-white font-semibold text-[12px] hover:bg-red-600 rounded-lg tracking-widest overflow-hidden group"
                    style={{ wordSpacing: "0.1rem" }}
                >
                    <span className="absolute inset-0 bg-[#313041] transform scale-y-0 transition-transform duration-700 ease-in-out group-hover:scale-y-100 origin-bottom"></span>
                    <span className="relative z-10">BOOK WITH US NOW</span>
                </button>
            </div>



        </div>

        </div>
    );
};

export default About;
