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
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="destination">
        <DestinationLists />
      </section>
      <section id="reviews">
        <Testimonial />
      </section>
    </>
  );
};

export default Home;
