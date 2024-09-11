import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShopContextProvider, ShopContext } from '../Context/ShopContext';

describe('ShopContext', () => {
  const TestComponent = () => (
    <ShopContextProvider>
      <ShopContext.Consumer>
        {(context) => (
          <>
            <div data-testid="cart">{JSON.stringify(context.cart)}</div>
            <button
              onClick={() => context.addToCart({ id: 1, selectedCategory: 'category1', selectedHeight: 'height1', selectedSize: 'size1' })}
            >
              Add to Cart
            </button>
            <button
              onClick={() => context.updateCartQuantity('1_category1_height1_size1', 3)}
            >
              Update Quantity
            </button>
            <button
              onClick={() => context.removeFromCart('1_category1_height1_size1')}
            >
              Remove from Cart
            </button>
            <button onClick={context.clearCart}>Clear Cart</button>
          </>
        )}
      </ShopContext.Consumer>
    </ShopContextProvider>
  );

  beforeEach(() => {
    localStorage.clear();
  });

  test('renders the initial cart state', () => {
    render(<TestComponent />);
    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent('[]');
  });

  test('adds a product to the cart', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Add to Cart'));
    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent(
      JSON.stringify([{ id: 1, selectedCategory: 'category1', selectedHeight: 'height1', selectedSize: 'size1', quantity: 1, key: '1_category1_height1_size1' }])
    );
  });

  test('updates the quantity of a product in the cart', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Add to Cart')); // Add product first
    fireEvent.click(screen.getByText('Update Quantity')); // Update quantity to 3
    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent(
      JSON.stringify([{ id: 1, selectedCategory: 'category1', selectedHeight: 'height1', selectedSize: 'size1', quantity: 3, key: '1_category1_height1_size1' }])
    );
  });

  test('removes a product from the cart', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Add to Cart')); // Add product first
    fireEvent.click(screen.getByText('Remove from Cart')); // Remove product
    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent('[]');
  });

  test('clears the cart', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Add to Cart')); // Add product first
    fireEvent.click(screen.getByText('Clear Cart')); // Clear cart
    const cart = screen.getByTestId('cart');
    expect(cart).toHaveTextContent('[]');
  });
});
