import React from 'react';
import posterimg5 from '../../assets/images/Home/posterimg5.webp';

const Poster5 = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-8 md:p-12 rounded-lg shadow-lg">
      {/* Left section with text */}
      <div className="md:w-1/2 flex flex-col justify-center items-start transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
          Awaken your best with Emma!
        </h2>
        <p className="text-gray-700 font-bold ">
          Our sleep scientists understand Indian sleepers well. Over two years of sleep research involving 1,500 consumers helped us to develop the best mattress that gives the optimal balance of firmness and body contouring for all Indian climates and body types.
        </p>
      </div>

      {/* Right section with image */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img
          src={posterimg5}
          alt="Emma Mattress"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Poster5;

