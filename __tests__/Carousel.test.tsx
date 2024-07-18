import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../components/Carousel/Carousel';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import { useRouter } from 'next/router';
import Link from 'next/link';
import userEvent from '@testing-library/user-event'

// Mock the Next.js router
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));


describe('Carousel component', () => {
    let push: jest.Mock;

    beforeEach(() => {
        push = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push });
    });

    const renderWithProvider = (component: React.ReactNode) => {
        return render(<Provider store={store}>{component}</Provider>);
    };

    test('renders correctly', () => {
        renderWithProvider(<Carousel />);
        expect(screen.getByAltText("Kanto")).toBeInTheDocument();
    });

    test('button down click', () => {
        renderWithProvider(<Carousel />);
        const button = screen.getByText("Down");
        fireEvent.click(button);
        expect(screen.getByAltText("Tohoku")).toBeInTheDocument();
    });

    test('button up click', () => {
        renderWithProvider(<Carousel />);
        const button = screen.getByText("Up");
        fireEvent.click(button);
        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
    });

    test('updates currentIndex when activeRegion changes', () => {
        renderWithProvider(<Carousel />);
        const button = screen.getByText("Up");
        fireEvent.click(button);
        expect(screen.getByAltText("Chubu")).toBeInTheDocument();
    });

    test('navigates to the correct URL on image click', async () => {
      renderWithProvider(<Carousel />);
      const imgElement = screen.getByAltText(/Kanto/i);
      const linkElement = imgElement.closest('a');
  
      console.log('imgElement:', imgElement);
      console.log('linkElement:', linkElement);
  
      expect(linkElement).toBeInTheDocument();
      if (linkElement) await userEvent.click(linkElement);
  
      console.log('push calls:', push.mock.calls);
      expect(push).toHaveBeenCalledWith('/kanto');
  });
});