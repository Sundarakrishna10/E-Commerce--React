import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import loginbackground from '../assets/images/login/backgroundIMG.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${loginbackground})` }}
    >
      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Welcome to <span className="text-orange-600">Emma</span></h2>
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Sign In to Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white"
              placeholder="you@example.com"
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white"
              placeholder="********"
              autoComplete="off"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <Link to='/reset-password' className="text-sm text-orange-600 hover:text-orange-500">Forgot your password?</Link>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300"
          >
            Sign In
          </button>
          <div className="text-sm text-center mt-4 text-gray-600">
            No Account? <Link to="/signup" className="text-orange-600 hover:text-orange-500 font-medium">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

