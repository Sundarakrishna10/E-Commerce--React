import React from 'react';
import fastandShipping from '../../assets/images/Home/fastandShiping.png'
import hundaysleep from '../../assets/images/Home/100daysleep.png'
import warranty from '../../assets/images/Home/warranty.png'
import nocostemi from '../../assets/images/Home/nocostemi.png'
import awardicon from '../../assets/images/Home/award.png'

const Poster2 = () => {
  return (
    <div className="bg-white p-6 w-full flex flex-col items-center ">
      <div className="flex flex-wrap justify-center mb-6 ">
        <div className="flex items-center mx-4 ">
          <img src={fastandShipping} alt="Free Shipping" className="h-12 mr-2 hover:scale-105 hover:shadow-lg" />
          <span className="text-center font-bold hover:scale-105 hover:shadow-lg">Free & fast<br />shipping</span>
        </div>
        <div className="flex items-center mx-4">
          <img src={hundaysleep} alt="Risk Free" className="h-12 mr-2 hover:scale-105 hover:shadow-lg" />
          <span className="text-center font-bold hover:scale-105 hover:shadow-lg">100-night<br />risk-free trial</span>
        </div>
        <div className="flex items-center mx-4">
          <img src={warranty} alt="Warranty" className="h-12 mr-2 hover:scale-105 hover:shadow-lg" />
          <span className="text-center font-bold hover:scale-105 hover:shadow-lg">15-year<br />warranty</span>
        </div>
        <div className="flex items-center mx-4">
          <img src={nocostemi} alt="EMI" className="h-12 mr-2 hover:scale-105 hover:shadow-lg" />
          <span className="text-center font-bold hover:scale-105 hover:shadow-lg">0%<br />No-cost EMIs</span>
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <img src={awardicon} alt="Award Logo" className="h-16 mr-4 hover:scale-105 hover:shadow-lg" />
          <div className='hover:scale-105 hover:shadow-lg'>
            <span className="text-xl font-bold text-orange-500 ">Customer Service Excellence Award</span>
            <span className="text-xl font-bold"> - 2024</span>
          </div>
        </div>
        <div>
          <span className="text-lg font-semibold hover:scale-105 hover:shadow-lg">ESCDA, France</span>
        </div>
      </div>
    </div>
  );
};

export default Poster2;
