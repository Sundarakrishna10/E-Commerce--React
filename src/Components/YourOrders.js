
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';

const YourOrders = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user from context
  const [userInvoices, setUserInvoices] = useState([]); // State to hold all user invoices
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    if (user) {
      // Fetch all invoices from local storage
      const invoices = JSON.parse(localStorage.getItem('invoices')) || [];

      // Filter invoices to show only those that belong to the current user
      const filteredInvoices = invoices.filter(invoice => invoice.user.email === user.email);

      setUserInvoices(filteredInvoices);
      setLoading(false); // Stop loading when invoices are fetched
    } else {
      setLoading(false); // Stop loading if user is not found
    }
  }, [user]);

  // Show loading spinner or message while data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-80">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-800 bg-opacity-80"
        style={{ backgroundImage: `url(${loginbackground})` }}>
        <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
          <h2 className="text-2xl font-semibold text-gray-800">You are not logged in</h2>
          <p className="text-gray-700 mt-4">Please log in to view your orders.</p>
          <Link to="/login" className="mt-6 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  if (!userInvoices.length) {
    return (
      <div className="min-h-screen flex items-end justify-end lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
        style={{ backgroundImage: `url(${loginbackground})` }}>
        <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
          <h2 className="text-2xl font-semibold text-gray-800">No Orders Found</h2>
          <p className="text-gray-700 mt-4">You haven't placed any orders yet.</p>
          <Link to="/" className="mt-6 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="bg-white bg-opacity-70 shadow-xl rounded-lg p-8 max-w-2xl w-full m-6 lg:mr-12">
        <h1 className="text-2xl font-semibold text-orange-600 mb-6 text-center">Your Orders</h1>

        <div className="space-y-4">
          {userInvoices.map((invoice, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 font-semibold">Order ID: {invoice.orderId}</span>
                <span className="text-gray-600">{new Date(invoice.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700">Total Amount: ₹{invoice.amount}</p>
              <p className="text-gray-700">Items: {invoice.cart.length}</p>
              <Link
                to={`/orderdetails/${invoice.orderId}`}
                className="mt-2 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600"
              >
                View Invoice
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourOrders;
