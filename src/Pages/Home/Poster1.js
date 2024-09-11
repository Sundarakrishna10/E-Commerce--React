import React, { useState, useEffect } from 'react';
import homepagePosterImg from '../../assets/images/Home/homepageposter1.webp';
import { Link } from 'react-router-dom';

const Poster = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-80 hover:shadow-xl">
      <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left text-orange-500">Europe's Best Selling Mattress</h2>
        
        {/* OFFER ENDS IN */}
        <div className="flex items-center mb-4">
          <span className="text-lg md:text-xl font-semibold mr-2">OFFER ENDS IN:</span>
          <div className="flex space-x-2 text-base md:text-lg font-mono">
            <div className="flex flex-col items-center text-base md:text-xl font-semibold">
              <span>{timeLeft.days}</span>
              <span className="text-xs md:text-sm">DAYS</span>
            </div>
            <div className="flex flex-col items-center text-base md:text-xl font-semibold">
              <span>{timeLeft.hours}</span>
              <span className="text-xs md:text-sm">HOURS</span>
            </div>
            <div className="flex flex-col items-center text-base md:text-xl font-semibold">
              <span>{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm">MINUTES</span>
            </div>
            <div className="flex flex-col items-center text-base md:text-xl font-semibold">
              <span>{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm">SECONDS</span>
            </div>
          </div>
        </div>

        <Link to='/Mattresses'>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full text-lg font-semibold mb-4 transition-transform duration-300 hover:scale-105">
            SHOP NOW
          </button>
        </Link>

        <div className="flex flex-col items-center mb-4">
          <span className="text-2xl font-bold text-orange-500">UPTO 55% OFF</span>
          <span className="text-xl">PAYDAY SALE</span>
        </div>
      </div>

      {/* Poster Image */}
      <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105">
        <img src={homepagePosterImg} alt="homepagePosterImg" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Poster;
