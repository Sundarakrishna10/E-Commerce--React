import React from 'react';
import fastandShipping from '../../assets/images/Home/fastandShiping.png';
import hundaysleep from '../../assets/images/Home/100daysleep.png';
import warranty from '../../assets/images/Home/warranty.png';
import nocostemi from '../../assets/images/Home/nocostemi.png';
import awardicon from '../../assets/images/Home/award.png';

const Poster2 = () => {
  return (
    <div className=" bg-gray-100 p-4 md:p-6 w-full flex flex-col items-center gap-4">
      {/* Shipping & Warranty Section */}
      <div className="grid grid-cols-2 gap-4 mb-6 md:flex md:justify-center md:items-center">
        <div className="flex items-center gap-2">
          <img src={fastandShipping} alt="Free Shipping" className="h-10 md:h-12 hover:scale-105 hover:shadow-lg" />
          <span className="text-sm md:text-base text-center font-bold">
            Free & fast<br />shipping
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={hundaysleep} alt="Risk Free" className="h-10 md:h-12 hover:scale-105 hover:shadow-lg" />
          <span className="text-sm md:text-base text-center font-bold">
            100-night<br />risk-free trial
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={warranty} alt="Warranty" className="h-10 md:h-12 hover:scale-105 hover:shadow-lg" />
          <span className="text-sm md:text-base text-center font-bold">
            15-year<br />warranty
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={nocostemi} alt="EMI" className="h-10 md:h-12 hover:scale-105 hover:shadow-lg" />
          <span className="text-sm md:text-base text-center font-bold">
            0%<br />No-cost EMIs
          </span>
        </div>
      </div>

      {/* Award Section */}
      <div className="text-center flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-4">
          <img src={awardicon} alt="Award Logo" className="h-14 md:h-16 mb-2 md:mb-0 md:mr-4 hover:scale-105 hover:shadow-lg" />
          <div>
            <span className="text-lg md:text-xl font-bold text-orange-500">Customer Service Excellence Award</span>
            <span className="text-lg md:text-xl font-bold"> - 2024</span>
          </div>
        </div>
        <div>
          <span className="text-sm md:text-lg font-semibold">ESCDA, France</span>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
