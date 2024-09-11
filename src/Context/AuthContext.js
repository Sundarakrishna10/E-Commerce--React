import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a logged-in user in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (userName, email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.email === email)) {
      alert('Email already exists');
      return;
    }

    const newUser = { userName, email, password, token: null };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Registration successful! Please login.');
    navigate('/login');
  };
  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = existingUsers.findIndex(user => user.email === email && user.password === password);

    if (userIndex !== -1) {
      const user = existingUsers[userIndex];
      const token = generateToken();
      user.token = token;
      existingUsers[userIndex] = user;
      localStorage.setItem('users', JSON.stringify(existingUsers));
      localStorage.setItem('user', JSON.stringify(user));

      // Load the user's cart from local storage
      const userCart = localStorage.getItem(`${email}_cart`);
      if (userCart) {
        localStorage.setItem('cart', userCart);
      }

      setUser(user);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = existingUsers.findIndex(user => user.email === storedUser.email);

        if (userIndex !== -1) {
          existingUsers[userIndex].token = null;
          localStorage.setItem('users', JSON.stringify(existingUsers));
        }
        // Save the current cart to the user's local storage
        const currentCart = localStorage.getItem('cart');
        localStorage.setItem(`${storedUser.email}_cart`, currentCart);
      }
      localStorage.removeItem('user');
      localStorage.removeItem('cart'); // Clear the cart on logout
      setUser(null);
      navigate('/');
    }
  };

  const addAddress = (email, newAddress) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = existingUsers.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      const user = existingUsers[userIndex];
      user.addresses = user.addresses ? [...user.addresses, newAddress] : [newAddress];
      existingUsers[userIndex] = user;
      localStorage.setItem('users', JSON.stringify(existingUsers));
      localStorage.setItem('user', JSON.stringify(user)); // Update current user
      setUser(user); // Update state
    }
  };
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };
  const generateToken = () => {
    return Math.random().toString(36).substr(2); // Simple token generation for demonstration
  };


  const resetPassword = (email, newPassword) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = existingUsers.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      existingUsers[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(existingUsers));
      alert('Password reset successful. Please login with your new password.');
      navigate('/login');
    } else {
      alert('User not found');
    }
  };
  return (
    <AuthContext.Provider value={{ user, register, login, logout, addAddress, updateUser, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

