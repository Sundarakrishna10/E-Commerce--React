import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from '../Context/AuthContext';
import { ShopContext } from '../Context/ShopContext';
import Cart from '../Pages/Products/Cart';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Cart Component', () => {
    // Helper function to render Cart with context
    const renderCart = (authContextValue, shopContextValue) => {
        render(
            <Router>
                <AuthContext.Provider value={authContextValue}>
                    <ShopContext.Provider value={shopContextValue}>
                        <Cart />
                    </ShopContext.Provider>
                </AuthContext.Provider>
            </Router>
        );
    };

    it('navigates to login if user is not logged in and clicks checkout', () => {
        const navigate = jest.fn();
        // Mock useNavigate to return our navigate function
        require('react-router-dom').useNavigate.mockImplementation(() => navigate);

        renderCart(
            { user: null }, // User is not logged in
            {
                cart: [], // Provide a mock cart context if needed
                updateCartQuantity: jest.fn(),
                removeFromCart: jest.fn(),
            }
        );

        // Click checkout button
        fireEvent.click(screen.getByText(/Checkout/i));

        expect(navigate).toHaveBeenCalledWith('/login');
    });

    it('navigates to checkout if user is logged in and clicks checkout', () => {
        const navigate = jest.fn();
        // Mock useNavigate to return our navigate function
        require('react-router-dom').useNavigate.mockImplementation(() => navigate);

        renderCart(
            { user: { email: 'test@example.com' } }, // User is logged in
            {
                cart: [], // Provide a mock cart context if needed
                updateCartQuantity: jest.fn(),
                removeFromCart: jest.fn(),
            }
        );

        // Click checkout button
        fireEvent.click(screen.getByText(/Checkout/i));

        expect(navigate).toHaveBeenCalledWith('/checkout');
    });
});
