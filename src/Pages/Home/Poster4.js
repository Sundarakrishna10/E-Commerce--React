import React from 'react';
import posterimg4 from '../../assets/images/Home/emmaposter4.jpg'

const Poster4 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 md:p-12 rounded-lg">
      {/* Left section with text */}
      <div className="md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
          A true worry-free sleep experience
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="mr-4">🌙</span> 15 Years warranty
          </li>
          <li className="flex items-center">
            <span className="mr-4">🚚</span> Fast & Free Shipping
          </li>
          <li className="flex items-center">
            <span className="mr-4">✔️</span> 100-Night Trial
          </li>
          <li className="flex items-center">
            <span className="mr-4">💳</span> No-cost EMIs
          </li>
          <li className="flex items-center">
            <span className="mr-4">💰</span> Get 0% easy EMI
          </li>
        </ul>
      </div>

      {/* Right section with image */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img
          src={posterimg4}
          alt="Worry-free sleep"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Poster4;
