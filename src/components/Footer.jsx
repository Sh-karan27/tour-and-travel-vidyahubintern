import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

import footerImg from "../assets/images/footerImg.jpg";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer
      className="text-white w-full"
      style={{
        backgroundImage: `url(${footerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay for better text contrast
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto py-12 px-4 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center justify-left">
            <h1 className="text-3xl font-bold mb-4 text-[#FF6347]">Tevily</h1>
            <img src={logo} alt="logo" className="w-10 h-10 mb-4" />
          </div>
          <p className="text-sm text-gray-200">
            Welcome to our Trip and Tour Agency. Learn simply text amet cing
            elit.
          </p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center text-gray-300">
              <FaPhoneAlt className="text-[#FF6347] mr-2" />
              +92 666 999 0000
            </p>
            <p className="flex items-center text-gray-300">
              <FaEnvelope className="text-[#FF6347] mr-2" />
              needhelp@company.com
            </p>
            <p className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-[#FF6347] mr-2" />
              666 Road, Brooklyn Street, New York
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FF6347]">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition-colors">About Us</li>
            <li className="hover:text-white transition-colors">
              Community Blog
            </li>
            <li className="hover:text-white transition-colors">Rewards</li>
            <li className="hover:text-white transition-colors">Work with Us</li>
            <li className="hover:text-white transition-colors">
              Meet the Team
            </li>
          </ul>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FF6347]">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition-colors">Account</li>
            <li className="hover:text-white transition-colors">Legal</li>
            <li className="hover:text-white transition-colors">Contact</li>
            <li className="hover:text-white transition-colors">
              Affiliate Program
            </li>
            <li className="hover:text-white transition-colors">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#FF6347]">Newsletter</h3>
          <p className="text-gray-200 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-md mb-4 text-black"
            />
            <button className="bg-[#FF6347] hover:bg-[#FF4500] text-white py-2 px-6 rounded-md">
              Subscribe
            </button>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-200">
              I agree to all terms and policies
            </label>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-300 hover:text-[#FF6347]">
            <BsFacebook size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF6347]">
            <BsTwitter size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF6347]">
            <BsPinterest size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#FF6347]">
            <BsInstagram size={20} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; All Copyright 2024, Tevily
        </p>
      </div>
    </footer>
  );
};

export default Footer;
