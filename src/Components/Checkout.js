import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate, Link } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';
const Checkout = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 700; // Example discount, adjust as needed
  const totalAmount = subtotal - discount;

  const handleProceedToPay = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-orange-500">Emma Mattress</h1>
        </div>
        <div className="mb-4 border-b pb-4">
          <h2 className="text-xl font-bold">Order summary</h2>
          <p className="text-sm text-gray-600">{cart.length} items</p>
        </div>
        {cart.map((product) => (
          <div key={product.key} className="flex items-center mb-4">
            <img src={product.img} alt={product.name} className="w-16 h-16 rounded-lg" />
            <div className="ml-4 flex-1">
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600">Category: {product.selectedCategory}</p>
              <p className="text-sm text-gray-600">Height: {product.selectedHeight}</p>
              {/* <p className="text-sm text-gray-600">Size: {product.selectedSize}</p> */}
              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-gray-300 rounded-l"
                  onClick={() =>
                    updateCartQuantity(product.key, Math.max(1, product.quantity - 1))
                  }
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b">{product.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-300 rounded-r"
                  onClick={() =>
                    updateCartQuantity(product.key, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="text-red-500 text-sm mt-2"
                onClick={() => removeFromCart(product.key)}
              >
                Remove
              </button>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">₹{product.price * product.quantity}</p>
            </div>
          </div>
        ))}
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-bold">Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Discount</span>
            <span>-₹{discount}</span>
          </div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
          <button
            className="flex items-center justify-between w-full text-gray-800 mt-2"
            onClick={() => navigate('/address-form')}
          >
            <p>Add Delivery Address</p>
          </button>
          <button
            className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600"
            onClick={handleProceedToPay}
          >
            Proceed to Payment
          </button>
          <div className="flex justify-center items-center mt-4">
            <Link
              to="/allproduct"
              className="text-orange-500 text-sm font-semibold hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

