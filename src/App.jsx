import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import HolidayPackage from "./screens/HolidayPackage";
import Hotels from "./screens/Hotels";
import Flight from "./screens/Flight";
import Currency from "./screens/Currency";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./screens/Error";
import About from "./components/About";
import Services from "./components/Services";
import DestinationLists from "./components/DestinationLists";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/holidaypackage" element={<HolidayPackage />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/destination" element={<DestinationLists />} />
            <Route path="/whyus" element={<WhyChooseUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
