import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Login from '../Components/Login';

describe('Login Component', () => {
  const mockLogin = jest.fn();

  const renderComponent = () =>
    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <Router>
          <Login />
        </Router>
      </AuthContext.Provider>
    );

  test('renders the login form with correct elements', () => {
    renderComponent();

    // Check if the "Welcome to" and "Emma" texts are rendered
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
    expect(screen.getByText(/Emma/i)).toBeInTheDocument();

    expect(screen.getByText(/Sign In to Your Account/i)).toBeInTheDocument();

    // Check if email and password fields are rendered
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check if the Sign In button is rendered
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();

    // Check if the "Forgot your password?" link is rendered
    expect(screen.getByText(/Forgot your password?/i)).toBeInTheDocument();

    // Check if the "Sign up" link is rendered
    expect(screen.getByText(/No Account?/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });
})      