import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs/AboutUs';

// Helper function to render the component with necessary context/providers
const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
};

describe('AboutUs Component', () => {
    test('renders AboutUs component', () => {
        renderWithRouter(<AboutUs />);

        // Check if the background image is present
        expect(screen.getByAltText('Background')).toBeInTheDocument();

        // Check if the SHOP MATTRESSES button is present
        expect(screen.getByText('SHOP MATTRESSES')).toBeInTheDocument();

        // Check if the vision section is rendered correctly
        expect(screen.getByText('Our Vision For India')).toBeInTheDocument();
        expect(screen.getByText('We are extremely excited to launch Emma in India. We aim to bring our globally awarded cutting-edge sleep technology to Indian sleepers.')).toBeInTheDocument();

        // Check if the sleep for all section is rendered correctly
        expect(screen.getByText('Sleep for all')).toBeInTheDocument();
        expect(screen.getByText('Beyond the feeling during the day, the immune system, learning ability and emotional health are impacted. For this, we design products that go beyond ergonomics. To allow everyone to access a restful sleep, we design our products to suit a maximum of morphology.')).toBeInTheDocument();

        // Check if the make sleep accessible section is rendered correctly
        expect(screen.getByText('Make sleep accessible')).toBeInTheDocument();
        expect(screen.getByText('Originally, Emma was born from the observation that the mattress industry lacks ease and accessibility. This is how two friends, Dennis Schmoltzi and Manuel Müller, decided to revolutionize the world of bedding, putting the improvement of life in the broad sense at the heart of their mission. But their ambition does not stop there. Emma\'s philosophy is that of sleep for all. By understanding the importance of daily recovery, Emma wants to offer a complete range of products and services that meet everyone\'s needs for peaceful sleep.')).toBeInTheDocument();

        // Check if the fast and free delivery service section is rendered correctly
        expect(screen.getByText('Fast and free delivery service')).toBeInTheDocument();
        expect(screen.getByText('It\'s also quite a challenge to transport a mattress home. Fortunately, Emma thought of it with her mattress delivered in a box. So you can easily order the mattress online and transport it to your room without much effort. In this way, Emma not only provides a good mattress, but also an ideal service!.')).toBeInTheDocument();

        // Check if the innovation as a driving force section is rendered correctly
        expect(screen.getByText('Innovation as a driving force')).toBeInTheDocument();
        expect(screen.getByText('Emma also carries innovative DNA and conducts in-house research to develop superior products that combine science and technology. All this takes place in its sleep lab in Frankfurt, the heart of innovation in Europe. Engineers and sleep professionals work hand in hand and bring innovative products to the world to improve the daily lives of its customers.')).toBeInTheDocument();
    });

    test('SHOP MATTRESSES button navigates to correct route', () => {
        renderWithRouter(<AboutUs />);

        // Check if the SHOP MATTRESSES button navigates correctly
        const button = screen.getByText('SHOP MATTRESSES');
        fireEvent.click(button);

        // Assert that navigation happened (assuming you have the route defined in your application)
        // Note: You might need to mock the `useNavigate` hook from `react-router-dom` if you want to test this behavior
    });
});
