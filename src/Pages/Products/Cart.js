import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import loginbackground from '../../assets/images/login/backgroundIMG.jpg';
const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(ShopContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout'); // Navigate to the checkout page if user is logged in
    } else {
      navigate('/login'); // Navigate to the login page if user is not logged in
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>

      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Your Cart - {cart.length} Items</h2>
        </div>
        <div className="mb-4">
          <p className="bg-orange-100 p-2 rounded text-orange-700">
            Free Shipping! You are just a few steps away from awakening your best.
          </p>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product.key} className="flex items-center border-b py-4">
              <img src={product.img} alt={product.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h4 className="text-xl font-bold">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.details}</p>
                <p className="text-sm text-gray-600">Category: {product.selectedCategory}</p>
                <p className="text-sm text-gray-600">Height: {product.selectedHeight}</p>
                {/* <p className="text-sm text-gray-600">Size: {product.selectedSize}</p> */}
                <p className="text-lg font-bold text-orange-500">₹{product.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-l"
                    onClick={() => updateCartQuantity(product.key, product.quantity - 1)}
                    disabled={product.quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{product.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-300 rounded-r"
                    onClick={() => updateCartQuantity(product.key, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="ml-4 text-red-500"
                onClick={() => removeFromCart(product.key)}
              >
                🗑
              </button>
            </div>
          ))
        )}
        <div className="flex justify-between items-center mt-6">
          <p className="text-2xl font-bold">Total Amount: ₹{totalAmount}</p>
          <button
            onClick={handleCheckout}
            className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600"
          >
            Checkout
          </button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
