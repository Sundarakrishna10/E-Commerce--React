import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';
const PaymentPage = () => {
  const { user } = useContext(AuthContext);
  const { cart, clearCart } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: '',
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 700; // Example discount
  const totalAmount = subtotal - discount;

  useEffect(() => {
    if (!user?.addresses || user.addresses.length === 0) {
      navigate('/address-form');
    }
  }, [user, navigate]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const generateOrderId = () => {
    return `ORDER-${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handlePayment = () => {
    if (paymentMethod) {
      const orderId = generateOrderId();
      const invoiceData = {
        orderId: orderId,
        user: user,
        cart: cart,
        deliveryAddress: user?.addresses ? user.addresses[0] : null,
        paymentInfo: {
          method: paymentMethod,
          details: paymentMethod === 'UPI' ? { upiId: paymentDetails.upiId } : {
            cardNumber: paymentDetails.cardNumber,
            cardHolder: paymentDetails.cardHolder,
            expiryDate: paymentDetails.expiryDate,
            cvv: paymentDetails.cvv,
          },
        },
        amount: totalAmount,
        date: new Date().toLocaleString(),
      };

      const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
      invoices.push(invoiceData);
      localStorage.setItem('invoices', JSON.stringify(invoices));

      clearCart();
      setPaymentSuccess(true);

      setTimeout(() => {
        navigate(`/orderdetails/${orderId}`);
      }, 2000);
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-orange-600">Emma</h1>
          <span className="text-gray-700">₹{totalAmount.toLocaleString()}</span>
        </div>

        {/* Order Summary */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <p className="text-gray-500">{cart.length} items</p>
        </div>

        {/* Delivery */}
        <div className="mb-4">
          <h3 className="text-md font-semibold">Delivery</h3>
          {user?.addresses?.length ? (
            user.addresses.map((address, index) => (
              <div key={index} className="text-gray-700">
                <p>{address.fullName}</p>
                <p>{address.phone}</p>
                <p>{address.addressLine1}</p>
                <p>{address.addressLine2}</p>
                <p>{address.city}, {address.state} - {address.postalCode}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No address available</p>
          )}
        </div>

        {/* Payment Methods */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-4">Payment methods</h3>
          <ul className="space-y-2">
            <li
              className={`bg-gray-100 p-4 rounded-md flex justify-between items-center cursor-pointer ${paymentMethod === 'UPI' ? 'bg-green-200' : ''}`}
              onClick={() => handlePaymentMethodChange('UPI')}
            >
              <span className="text-gray-700">Pay via UPI</span>
            </li>
            {paymentMethod === 'UPI' && (
              <div className="mt-2">
                <input
                  type="text"
                  name="upiId"
                  value={paymentDetails.upiId}
                  onChange={handleInputChange}
                  placeholder="Enter UPI ID"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}
            <li
              className={`bg-gray-100 p-4 rounded-md flex justify-between items-center cursor-pointer ${paymentMethod === 'Card' ? 'bg-green-200' : ''}`}
              onClick={() => handlePaymentMethodChange('Card')}
            >
              <span className="text-gray-700">Debit/Credit cards</span>
            </li>
            {paymentMethod === 'Card' && (
              <div className="mt-2 space-y-2">
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  name="cardHolder"
                  value={paymentDetails.cardHolder}
                  onChange={handleInputChange}
                  placeholder="Card Holder Name"
                  className="w-full p-2 border rounded-md"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handleInputChange}
                    placeholder="Expiry Date (MM/YY)"
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            )}
            <li
              className={`bg-gray-100 p-4 rounded-md flex justify-between items-center cursor-pointer ${paymentMethod === 'Netbanking' ? 'bg-green-200' : ''}`}
              onClick={() => handlePaymentMethodChange('Netbanking')}
            >
              <span className="text-gray-700">Netbanking</span>
            </li>
          </ul>
        </div>

        {/* Pay Now Button */}
        <div className="mt-4">
          <button
            onClick={handlePayment}
            className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-lg hover:bg-orange-600"
          >
            Pay Now
          </button>
          {paymentSuccess && (
            <p className="text-green-600 text-center mt-4">
              Payment successful! Your order has been placed.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

