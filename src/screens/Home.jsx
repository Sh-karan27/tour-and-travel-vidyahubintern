import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import DestinationLists from "../components/DestinationLists";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <DestinationLists />
      <Testimonial />
    </>
  );
};

export default Home;
