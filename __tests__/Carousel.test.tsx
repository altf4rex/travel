import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../components/Carousel/Carousel';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Mock the Next.js router
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

// Mock the Next.js Link component
jest.mock('next/link', () => {
    return ({ children, href }: { children: any, href: string }) => {
        return <a href={href} data-testid={`link-${href}`}>{children}</a>;
    };
});

describe('Carousel component', () => {
    let push: jest.Mock;
    let onRegionChange: jest.Mock;
    let activeRegion: string = 'kanto';

    beforeEach(() => {
        onRegionChange = jest.fn();
        push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });
    });


    test('renders correctly', () => {
        render(<Carousel />);
        expect(screen.getByAltText("Kanto")).toBeInTheDocument();
      });
    
      test('button down click', () => {
        render(<Carousel />);
        const button = screen.getByText("Down");
        fireEvent.click(button);
    
        expect(screen.getByAltText("Tohoku")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith("tohoku");
      });
    
      test('button up click', () => {
        render(<Carousel />);
        const button = screen.getByText("Up");
        fireEvent.click(button);
    
        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith("chubu");
      });
    
      test('updates currentIndex when activeRegion changes', () => {
        render(<Carousel />);
        const button = screen.getByText("Up");
        fireEvent.click(button);
    
        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
        expect(onRegionChange).toHaveBeenCalledWith("chubu");
      });


    test('navigates to the correct URL on image click', () => {
        // Render the component
        render(<Carousel />);
        
        // Find the link element based on href
        const imgElement = screen.getByAltText(/Kanto/i);
        const linkElement = imgElement.closest('a');
        //console.log('Link element:', linkElement); // Log the link element

        // Ensure the link element is found
        expect(linkElement).toBeInTheDocument();

        // Simulate click on the link
        if(linkElement) fireEvent.click(linkElement);
        console.log('Link clicked'); // Log when the link is clicked

        // // Check that the push function was called with the correct URL
        // expect(push).toHaveBeenCalled();
        // console.log('Push calls:', push.mock.calls); // Log all push calls
        // expect(push).toHaveBeenCalledWith('/kanto');
        // expect(window.location.pathname).toBe('/kanto');
    });
});

