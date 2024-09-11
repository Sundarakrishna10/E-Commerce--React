import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navBarImg from '../assets/images/navBar/emmaSymbal.png';
import { AuthContext } from '../Context/AuthContext';
import { ShopContext } from '../Context/ShopContext';
const NavBar = () => {
  const { cart } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const cartItemCount = Array.isArray(cart)
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const handleProfileClick = () => {
    if (user) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false); // Close dropdown on logout
    navigate('/');
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center md:justify-center">
            <img src={navBarImg} className="h-6 mr-3 sm:h-9" alt="emma Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Emma India</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <ul className="flex flex-row font-medium space-x-4 lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/Cart"
                  className="flex py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <span>({cartItemCount})</span>
                </Link>
              </li>
              <li className="relative flex" ref={dropdownRef}>
                {user && (
                  <span className="mr-2 text-gray-700 dark:text-white hidden lg:block">
                    Hi, {user.userName}
                  </span>
                )}
                <button
                  onClick={handleProfileClick}
                  className="block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
                {user && isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <Link
                      to="/profile-edit"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on item click
                    >
                      Profile Edit
                    </Link>
                    <Link
                      to="/your-orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on item click
                    >
                      Your Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </ul>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to='/Mattresses'
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Mattresses
                </Link>
              </li>
              <li>
                <Link
                  to="/Pillows"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Pillows & Protector
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/EmmaTechnology"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Emma Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
