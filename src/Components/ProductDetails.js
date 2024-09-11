import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../ProductData';
import { ShopContext } from '../Context/ShopContext';
import { AuthContext } from '../Context/AuthContext'; // Import AuthContext

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));
  const { addToCart } = useContext(ShopContext);
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const navigate = useNavigate();

  // State to manage selected options
  const [selectedCategory, setSelectedCategory] = useState('Single');
  const [selectedHeight, setSelectedHeight] = useState('6 in');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const productWithSelection = {
      ...product,
      selectedCategory,
      selectedHeight,
    };
    addToCart(productWithSelection);
  };

  const handleOrderNow = () => {
    handleAddToCart();
    if (user) {
      // If the user is logged in, navigate to the checkout page
      navigate('/checkout');
    } else {
      // If the user is not logged in, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.img} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
            <p className="text-gray-600 mb-6">{product.details}</p>
            <p className="text-2xl font-bold text-gray-900 mb-6">₹{product.price}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Select Category</h4>
            <div className="flex flex-wrap space-x-2 gap-1">
              {product.options.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-2 px-4 rounded-lg border ${selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Select Height</h4>
            <div className="flex space-x-2 flex-wrap">
              {product.options.heights.map((height) => (
                <button
                  key={height}
                  onClick={() => setSelectedHeight(height)}
                  className={`py-2 px-4 rounded-lg border ${selectedHeight === height
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border-gray-300'
                    }`}
                >
                  {height}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              className="mt-4 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="mt-4 bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600"
              onClick={handleOrderNow}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
