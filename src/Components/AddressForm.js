import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';

const AddressForm = () => {
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const { user, addAddress } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAddress(user.email, address);
    alert('Address added successfully!');
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}>
      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">Add New Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={address.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              value={address.addressLine1}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Address Line 2</label>
            <input
              type="text"
              name="addressLine2"
              value={address.addressLine2}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-lg hover:bg-orange-600"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>


  );
};

export default AddressForm;
