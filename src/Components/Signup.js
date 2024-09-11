import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import sideimg from '../assets/images/Home/backgroundIMG.jpg';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [errors, setErrors] = useState({});
  const { register } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!formValues.userName) newErrors.userName = 'Username is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formValues.email))
      newErrors.email = 'Please enter a valid email';
    if (!formValues.password) newErrors.password = 'Password is required';
    else if (formValues.password.length < 5)
      newErrors.password = 'Password must be at least 5 characters long';
    if (!formValues.cpassword)
      newErrors.cpassword = 'Confirm password is required';
    else if (formValues.cpassword !== formValues.password)
      newErrors.cpassword = 'Password does not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      register(formValues.userName, formValues.email, formValues.password);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center lg:justify-end bg-cover bg-center bg-gray-800 bg-opacity-80"
      style={{ backgroundImage: `url(${sideimg})` }}
    >
      <div className="bg-white bg-opacity-40 shadow-xl rounded-lg p-8 max-w-md w-full m-6 lg:mr-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Register for <span className="text-orange-600">Emma</span>
        </h2>
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">
          Create an Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formValues.userName}
              onChange={handleInputChange}
              className={`mt-2 block w-full border ${errors.userName ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white`}
              autoComplete="off"
            />
            {errors.userName && (
              <div className="text-red-500 text-sm mt-1">
                {errors.userName}
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              className={`mt-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white`}
              autoComplete="off"
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              className={`mt-2 block w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white`}
              autoComplete="off"
            />
            {errors.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="cpassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={formValues.cpassword}
              onChange={handleInputChange}
              className={`mt-2 block w-full border ${errors.cpassword ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm p-3 bg-white`}
              autoComplete="off"
            />
            {errors.cpassword && (
              <div className="text-red-500 text-sm mt-1">{errors.cpassword}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300"
          >
            Register
          </button>
          <div className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-orange-600 hover:text-orange-500 font-medium"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

