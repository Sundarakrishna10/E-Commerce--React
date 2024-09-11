import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PaymentPage from '../components/PaymentPage';
import { AuthContext } from '../Context/AuthContext';
import { ShopContext } from '../Context/ShopContext';
import { BrowserRouter } from 'react-router-dom';

// Mock the useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('PaymentPage Component', () => {
  const mockUser = {
    email: 'test@example.com',
    addresses: [{
      fullName: 'John Doe',
      phone: '1234567890',
      addressLine1: '123 Main St',
      addressLine2: '',
      city: 'Metropolis',
      state: 'NY',
      postalCode: '12345'
    }]
  };

  const mockCart = [
    { id: 1, price: 1000, quantity: 1 },
    { id: 2, price: 2000, quantity: 2 }
  ];

  const mockClearCart = jest.fn();
  const mockSetPaymentSuccess = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: mockUser }}>
          <ShopContext.Provider value={{ cart: mockCart, clearCart: mockClearCart }}>
            <PaymentPage />
          </ShopContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  });

  test('displays the correct total amount and user address', () => {
    const totalAmount = mockCart.reduce((total, item) => total + item.price * item.quantity, 0) - 700; // Subtracting example discount

    expect(screen.getByText(`₹${totalAmount.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('1234567890')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('Metropolis, NY - 12345')).toBeInTheDocument();
  });

  test('allows user to select UPI payment method and enter UPI ID', async () => {
    fireEvent.click(screen.getByText('Pay via UPI'));
    fireEvent.change(screen.getByPlaceholderText('Enter UPI ID'), { target: { value: 'test@upi' } });

    expect(screen.getByPlaceholderText('Enter UPI ID').value).toBe('test@upi');
  });

  test('allows user to select Card payment method and enter card details', async () => {
    fireEvent.click(screen.getByText('Debit/Credit cards'));

    fireEvent.change(screen.getByPlaceholderText('Card Number'), { target: { value: '4111111111111111' } });
    fireEvent.change(screen.getByPlaceholderText('Card Holder Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Expiry Date (MM/YY)'), { target: { value: '12/25' } });
    fireEvent.change(screen.getByPlaceholderText('CVV'), { target: { value: '123' } });

    expect(screen.getByPlaceholderText('Card Number').value).toBe('4111111111111111');
    expect(screen.getByPlaceholderText('Card Holder Name').value).toBe('John Doe');
    expect(screen.getByPlaceholderText('Expiry Date (MM/YY)').value).toBe('12/25');
    expect(screen.getByPlaceholderText('CVV').value).toBe('123');
  });

  test('displays a success message after payment and navigates to order details page', async () => {
    fireEvent.click(screen.getByText('Pay via UPI'));
    fireEvent.change(screen.getByPlaceholderText('Enter UPI ID'), { target: { value: 'test@upi' } });

    fireEvent.click(screen.getByText('Pay Now'));

    await waitFor(() => {
      expect(mockClearCart).toHaveBeenCalled();
      expect(screen.getByText('Payment successful! Your order has been placed.')).toBeInTheDocument();
    });
  });

  test('shows an alert when no payment method is selected', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });

    fireEvent.click(screen.getByText('Pay Now'));

    expect(window.alert).toHaveBeenCalledWith('Please select a payment method.');
  });
});
