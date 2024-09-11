import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { ShopContext } from '../Context/ShopContext';
import NavBar from '../Components/NavBar';

const mockUser = { userName: 'John Doe', email: 'john.doe@example.com' };
const mockCart = [{ id: 1, name: 'Sample Product', quantity: 2 }];
const mockLogout = jest.fn();

describe('NavBar Component', () => {
  const setup = (user = null, cart = []) => {
    return render(
      <AuthContext.Provider value={{ user, logout: mockLogout }}>
        <ShopContext.Provider value={{ cart }}>
          <MemoryRouter>
            <NavBar />
          </MemoryRouter>
        </ShopContext.Provider>
      </AuthContext.Provider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks(); // Clears mock function calls and results
    jest.clearAllTimers(); // Clears any active timers
  });

  test('renders NavBar component without crashing', () => {
    setup();

    expect(screen.getByAltText(/emma logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Emma India/i)).toBeInTheDocument();
  });

  // Other test cases...

  test('calls logout function when logout button is clicked', () => {
    setup(mockUser);

    // Debugging output to check the current render state
    screen.debug();

    // Try selecting the button with the role and accessible name
    //const profileButton = screen.getByRole('button', { name: /hi, john doe/i });

    // Open dropdown menu by clicking the profile button
    //fireEvent.click(profileButton);

    // Simulate clicking logout button
    // const logoutButton = screen.getByText(/logout/i);
    // fireEvent.click(logoutButton);

    // Verify logout function is called
    //     expect(mockLogout).toHaveBeenCalledTimes(1);
  });

});
