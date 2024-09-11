import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';
const Invoice = () => {
  const { orderId } = useParams(); // Extract orderId from the URL
  const [invoice, setInvoice] = useState(null); // State to hold the specific invoice

  useEffect(() => {
    // Fetch all invoices from local storage
    const invoices = JSON.parse(localStorage.getItem('invoices')) || [];
    
    // Find the invoice that matches the orderId from the URL
    const specificInvoice = invoices.find(invoice => invoice.orderId === orderId);
    
    // Set the state with the found invoice
    setInvoice(specificInvoice);
  }, [orderId]);

  if (!invoice) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="bg-white bg-opacity-70 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <h1 className="text-2xl font-semibold text-center text-orange-600 mb-4">Emma-Sleep.In</h1>
        <hr className="mb-4" />

        <div className="flex justify-between mb-6 flex-col">
          <h2 className="text-lg font-semibold text-gray-800 underline">Invoice</h2>
          <div className="text-gray-700">
            <div className=' text-gray-800 font-semibold'>Date: {new Date(invoice.date).toLocaleDateString()}</div>
            <div className=' text-gray-800 font-semibold'>Invoice ID: {invoice.orderId}</div>
          </div>
        </div>

        {/* User Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Bill To:</h3>
          <p className="text-gray-700">{invoice.user?.userName}</p>
          <p className="text-gray-700">{invoice.user?.email}</p>
          <p className="text-gray-700">{invoice.deliveryAddress?.addressLine1}</p>
          <p className="text-gray-700">
            {invoice.deliveryAddress?.city}, {invoice.deliveryAddress?.state} - {invoice.deliveryAddress?.postalCode}
          </p>
        </div>

        {/* Checkout Details */}
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-800">Description</th>
              <th className="text-right font-bold text-gray-800">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.cart?.map((product) => (
              <tr key={product.key}>
                <td className="text-left text-gray-700">{product.name}</td>
                <td className="text-right text-gray-700">₹{product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-gray-800">Discount</td>
              <td className="text-right font-bold text-gray-800">₹700</td>
            </tr>
            <tr>
              <td className="text-left font-bold text-gray-800">Total</td>
              <td className="text-right font-bold text-gray-800">₹{invoice.amount}</td>
            </tr>
          </tfoot>
        </table>

        <p className="text-gray-700 mb-4">Thank you for your business!</p>

        <Link
          to="/"
          className="w-full inline-block bg-orange-500 text-white py-2 rounded-lg shadow-lg text-center hover:bg-orange-600"
        >
          Order Again
        </Link>
      </div>
    </div>
  );
};

export default Invoice;
