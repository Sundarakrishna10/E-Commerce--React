import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Context/AuthContext';

describe('AuthContext', () => {
  const TestComponent = () => (
    <Router>
      <AuthProvider>
        <AuthContext.Consumer>
          {(context) => (
            <>
              <div data-testid="user">{context.user ? JSON.stringify(context.user) : 'No user'}</div>
              <button
                onClick={() => context.register('Test User', 'test@example.com', 'password123')}
              >
                Register
              </button>
              <button onClick={() => context.login('test@example.com', 'password123')}>
                Login
              </button>
              <button onClick={context.logout}>Logout</button>
              <button onClick={() => context.addAddress('test@example.com', { street: '123 Test St' })}>
                Add Address
              </button>
              <button onClick={() => context.resetPassword('test@example.com', 'newpassword')}>
                Reset Password
              </button>
            </>
          )}
        </AuthContext.Consumer>
      </AuthProvider>
    </Router>
  );

  beforeEach(() => {
    localStorage.clear();
  });

  test('renders initial state without a user', () => {
    render(<TestComponent />);
    const userElement = screen.getByTestId('user');
    expect(userElement).toHaveTextContent('No user');
  });

  test('registers a new user', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Register'));
    const users = JSON.parse(localStorage.getItem('users'));
    expect(users).toHaveLength(1);
    expect(users[0].email).toBe('test@example.com');
    expect(screen.getByTestId('user')).toHaveTextContent('No user'); // user is not logged in after registration
  });

  test('logs in a user with valid credentials', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Register'));
    fireEvent.click(screen.getByText('Login'));
    const userElement = screen.getByTestId('user');
    expect(userElement).not.toHaveTextContent('No user');
    expect(userElement).toHaveTextContent('test@example.com');
  });

  test('prevents login with invalid credentials', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Login'));
    const userElement = screen.getByTestId('user');
    expect(userElement).toHaveTextContent('No user');
  });

  //   test('logs out a user', async () => {
  //     render(<TestComponent />);

  //     // Register and login a user
  //     fireEvent.click(screen.getByText('Register'));
  //     fireEvent.click(screen.getByText('Login'));

  //     // Assert user is logged in
  //     await waitFor(() => {
  //       const userElement = screen.getByTestId('user');
  //       expect(userElement).not.toHaveTextContent('No user');
  //     });

  //     // Logout the user
  //     fireEvent.click(screen.getByText('Logout'));

  //     // Wait for the user state to be updated after logout
  //     await waitFor(() => {
  //       const userElement = screen.getByTestId('user');
  //       expect(userElement).toHaveTextContent('No user');
  //     });

  //     // Check that local storage is cleared
  //     expect(localStorage.getItem('user')).toBeNull();
  //   });

  //   test('adds an address to the user profile', () => {
  //     render(<TestComponent />);
  //     fireEvent.click(screen.getByText('Register'));
  //     fireEvent.click(screen.getByText('Login'));
  //     fireEvent.click(screen.getByText('Add Address'));

  //     const users = JSON.parse(localStorage.getItem('users'));
  //     const user = users.find((u) => u.email === 'test@example.com');
  //     expect(user.addresses).toHaveLength(1);
  //     expect(user.addresses[0]).toEqual({ street: '123 Test St' });
  //   });

  //   test('resets password for a registered user', () => {
  //     render(<TestComponent />);
  //     fireEvent.click(screen.getByText('Register'));
  //     fireEvent.click(screen.getByText('Reset Password'));

  //     const users = JSON.parse(localStorage.getItem('users'));
  //     const user = users.find((u) => u.email === 'test@example.com');
  //     expect(user.password).toBe('newpassword');
  //   });
});
