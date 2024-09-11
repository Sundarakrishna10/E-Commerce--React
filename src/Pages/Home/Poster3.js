import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/images/EmmaTech/emmatechno1.webp';
import img2 from '../../assets/images/EmmaTech/emmatechno2.webp';
import img3 from '../../assets/images/EmmaTech/emmatechno3.webp';

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full cursor-pointer text-white z-10"
      onClick={onClick}
    >
      🠾
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full cursor-pointer text-white z-10"
      onClick={onClick}
    >
      🠸
    </div>
  );
};

const Poster3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto mt-8 relative">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Poster 1" className="w-full h-64 md:h-80 lg:h-96" />
        </div>
        <div>
          <img src={img2} alt="Poster 2" className="w-full h-64 md:h-80 lg:h-96" />
        </div>
        <div>
          <img src={img3} alt="Poster 3" className="w-full h-64 md:h-80 lg:h-96" />
        </div>
      </Slider>
    </div>
  );
};

export default Poster3;
