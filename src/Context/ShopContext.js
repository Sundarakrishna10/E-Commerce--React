import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from local storage or as an empty array
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Listen to cart changes and update local storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productKey = `${product.id}_${product.selectedCategory}_${product.selectedHeight}_${product.selectedSize}`;

      // Ensure prevCart is an array
      const updatedCart = Array.isArray(prevCart) ? prevCart : [];

      const existingProduct = updatedCart.find((item) => item.key === productKey);

      let newCart;
      if (existingProduct) {
        // Update the quantity if the product already exists in the cart
        newCart = updatedCart.map((item) =>
          item.key === productKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add the new product to the cart
        newCart = [...updatedCart, { ...product, quantity: 1, key: productKey }];
      }

      return newCart;
    });
  };

  const updateCartQuantity = (productKey, quantity) => {
    setCart((prevCart) => {
      // Ensure prevCart is an array
      const updatedCart = Array.isArray(prevCart) ? prevCart : [];

      const newCart = updatedCart.map((item) =>
        item.key === productKey ? { ...item, quantity } : item
      );

      return newCart;
    });
  };

  const removeFromCart = (productKey) => {
    setCart((prevCart) => {
      // Ensure prevCart is an array
      const updatedCart = Array.isArray(prevCart) ? prevCart : [];

      const newCart = updatedCart.filter((item) => item.key !== productKey);

      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <ShopContext.Provider
      value={{ cart, addToCart, updateCartQuantity, removeFromCart, clearCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

