import React from 'react';
import logo from '../assets/images/logo.png';
import { navLinks } from '../data';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='w-full p-4 flex items-center justify-evenly'>
      <div className='flex items-center justify-center gap-1 text-red-500'>
        <img src={logo} alt='logo' className='w-10 h-10' />
        <span className='text-xl font-bold'>Travel</span>
      </div>

      <div className='w-1/2 flex items-center justify-evenly'>
        {navLinks.map((curr, i) => (
          <NavLink
            to={curr.link}
            key={i}
            className='relative font-semibold text-text-normal hover:text-red-500 group'>
            {curr.name}
            <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-500 group-hover:w-full'></span>
          </NavLink>
        ))}
      </div>

      <div className='flex items-center justify-center gap-2'>
        <button className='border rounded-md p-2 text-red-500'>IND|ENG</button>
        <button className='border rounded-md p-2 text-red-500'>INR</button>
      </div>
    </div>
  );
};

export default Navbar;
