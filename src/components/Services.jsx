import { useState, useEffect } from 'react';
import serviceData from '../data/serviceData';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCardClass = (index) => {
    const position =
      (index - currentIndex + serviceData.length) % serviceData.length;

    if (position === 0) return 'translate-x-[-150%] scale-75 opacity-50';
    if (position === 1) return 'translate-x-0 scale-100 z-10 shadow-xl';
    if (position === 2) return 'translate-x-[150%] scale-75 opacity-50';
    return 'hidden';
  };

  return (
    <div className="w-11/12 min-h-[640px] mx-auto flex flex-col mt-6 lg:mt-0 bg-white py-20">
      {/* Heading Section */}
      <div className='w-full text-center py-2'>
        {' '}
        {/* Reduced py-4 to py-2 */}
        <h2 className='font-reey text-[#e8604c] text-[20px]'>Our Services</h2>
        <p className='text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 text-[#303141] text-center'>
          {' '}
          {/* Reduced mt-4 to mt-2 */}
          Elevate your Experience
        </p>
      </div>

      {/* Card Section */}
      <div className='flex-1 flex items-center justify-center relative overflow-hidden mt-12'>
        {serviceData.map((service, index) => (
          <div
            key={service.id}
            className={`absolute w-60 h-80 p-4 bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl transition-all duration-500 ease-in-out ${getCardClass(
              index
            )} card-glow`}>
            <div className='flex justify-center items-center flex-col text-center'>
              <div className='relative w-28 h-28 flex items-center justify-center rounded-full bg-gray-100 glowing-border'>
                <service.icon className='text-[#e8604c] z-10' size={60} />
              </div>
              <h3 className='text-xl font-medium mt-6'>{service.title}</h3>
              <p className='text-sm text-[#787780] font-sans mt-2 leading-loose'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
