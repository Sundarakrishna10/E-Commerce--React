import React from 'react';
import productData from '../../ProductData';
import AllProduct from './AllProduct';

const Mattresses = () => {
  const mattressProducts = productData.filter(product => product.categoryId === 'mattress');

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center p-6 rounded-lg shadow-md mx-auto ">
      <h3 className="text-4xl font-bold text-center mt-8 mb-4 text-orange-500">Mattresses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
        {mattressProducts.map((product) => (
          <AllProduct key={product.id} {...product} showAddToCart={false} />
        ))}
      </div>
    </div>
  );
};

export default Mattresses;
