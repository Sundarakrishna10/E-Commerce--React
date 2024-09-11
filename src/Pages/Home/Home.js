import React from 'react';
import AllProduct from '../Products/AllProduct';
import productData from '../../ProductData';
import Poster from './Poster1';
import Poster2 from './Poster2';
import Poster3 from './Poster3';
import Poster4 from './Poster4';
import Poster5 from './Poster5';
const Home = () => {
  return (
    <div>

      <Poster data-testid="poster1" />
      <Poster4 data-testid="poster4" />
      <Poster3 data-testid="poster3" />
      <Poster5 data-testid="poster5" />

      <div className="w-full bg-gray-100 flex flex-col items-center p-6 rounded-lg shadow-md mx-auto">
        {/* Centered Heading */}
        <h3 className="text-4xl font-bold text-center mt-8 mb-4 text-orange-500 transition-transform duration-300 hover:scale-105">
          Our Products
        </h3>

        {/* Products Grid */}
        <div className="w-full flex flex-col items-center mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {productData.map((product) => (
              <div
                key={product.id}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <AllProduct {...product} showAddToCart={false} className="h-auto max-w-full rounded-lg" data-testid="product" />
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* <Poster2 /> */}
      <Poster2 data-testid="poster2" />

    </div>
  );
};

export default Home;
