import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './screens/Home';
import HolidayPackage from './screens/HolidayPackage';
import Hotels from './screens/Hotels';
import Flight from './screens/Flight';
import Currency from './screens/Currency';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './screens/Error';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/flight' element={<Flight />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/holidaypackage' element={<HolidayPackage />} />
            <Route path='/currency' element={<Currency />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
