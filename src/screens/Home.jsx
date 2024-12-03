import React from 'react';
import Hero from '..//assets/images/HeroSection.jpeg';

const Home = () => {
  return (
    <div className='w-full h-screen'>
      {/* Hero Section */}
      <div
        className='h-1/2 w-full bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: `url(${Hero})` }}>
        <div className='text-center text-white'>
          <h1 className='text-4xl font-bold'>Travelling Around the World</h1>
          <p className='mt-4 text-lg'>
            Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic.
          </p>
          <button className='mt-6 px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600'>
            Continue Reading
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className=' mt-10 w-full bg-white flex items-center justify-center'>
        <div className='w-3/4 bg-gray-100 shadow-md rounded-lg p-6'>
          <form className='flex justify-between gap-4'>
            <div className='flex flex-col w-1/4'>
              <label className='mb-2 text-gray-700'>Search Destination*</label>
              <input
                type='text'
                placeholder='Delhi'
                className='p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300'
              />
            </div>
            <div className='flex flex-col w-1/4'>
              <label className='mb-2 text-gray-700'>Pax Number*</label>
              <input
                type='number'
                placeholder='2'
                className='p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300'
              />
            </div>
            <div className='flex flex-col w-1/4'>
              <label className='mb-2 text-gray-700'>Checkin Date*</label>
              <input
                type='date'
                className='p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300'
              />
            </div>
            <div className='flex flex-col w-1/4'>
              <label className='mb-2 text-gray-700'>Checkout Date*</label>
              <input
                type='date'
                className='p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300'
              />
            </div>
            <button className='self-end px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600'>
              Inquire Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
