import React from 'react';
import { render, screen } from '@testing-library/react';
import EmmaTech from '../Pages/EmmaTech/EmmaTech';

describe('EmmaTech Component', () => {
    test('renders the main heading', () => {
        render(<EmmaTech />);
        const headingElement = screen.getByText(/Emma Technology/i);
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass('text-4xl');
    });

    test('renders the first post with correct image and text', () => {
        render(<EmmaTech />);
        const imgElements = screen.getAllByAltText('homepagePosterImg');
        const textElement = screen.getByText(/Designed by Industry Experts/i);

        expect(imgElements[0]).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });

    test('renders the second post with correct image and text', () => {
        render(<EmmaTech />);
        const imgElements = screen.getAllByAltText('homepagePosterImg');
        const textElement = screen.getByText(/Adapted to Indian Sleep Patterns/i);

        expect(imgElements[1]).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });

    test('renders the third post with correct image and text', () => {
        render(<EmmaTech />);
        const imgElements = screen.getAllByAltText('homepagePosterImg');
        const textElement = screen.getByText(/Designed to last a Lifetime/i);

        expect(imgElements[2]).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });
});
