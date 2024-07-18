import { render, screen, waitFor, act } from "@testing-library/react";
import Page from "../app/page";
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import userEvent from '@testing-library/user-event';
import { resetRegion } from '../features/regionSlice';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Home Page", () => {
  beforeEach(() => {
    renderWithProvider(<Page />);
  });

  afterEach(() => {
    act(() => {
      store.dispatch(resetRegion());
    });
  });

  test('renders Carousel component', () => {
    expect(screen.getByTestId('carousel')).toBeInTheDocument();
  });

  test('renders Map component', () => {
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  test('renders ModalDescription component', () => {
    expect(screen.getByTestId('modal-description')).toBeInTheDocument();
  });

  test('interacts correctly between Carousel and Map - Next slide', async () => {
    const nextButton = screen.getByLabelText('Next slide');
    expect(nextButton).toBeInTheDocument();
    await userEvent.click(nextButton);

    // Wait for the region to become active
    await waitFor(() => {
      const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
      expect(region).toHaveClass("is_active");
    });

    await userEvent.click(nextButton);

    // Wait for the previous region to become inactive
    await waitFor(() => {
      const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
      expect(region).not.toHaveClass("is_active");
    });

    expect(screen.getByTestId("modal-description")).toBeInTheDocument();
  });

  test('interacts correctly between Carousel and Map - Previous slide', async () => {
    const prevButton = screen.getByLabelText('Previous slide');
    expect(prevButton).toBeInTheDocument();

    // Initial state check
    const initialRegion = screen.getByTestId('map').querySelector('[data-id="kanto"]');
    expect(initialRegion).toHaveClass("is_active");

    await userEvent.click(prevButton);

    await waitFor(() => {
      const carouselRegion = screen.getByTestId('Chubu');
      expect(carouselRegion).toHaveClass("active");
    });

    await waitFor(() => {
      const region = screen.getByTestId('map').querySelector('[data-id="chubu"]');
      expect(region).toHaveClass("is_active");
    });

    await userEvent.click(prevButton);

    await waitFor(() => {
      const region = screen.getByTestId('map').querySelector('[data-id="chubu"]');
      expect(region).not.toHaveClass("is_active");
    });

    await waitFor(() => {
      const newRegion = screen.getByTestId('Kansai');
      expect(newRegion).toHaveClass("active");
    });
  });

  test('interacts correctly between Map and Carousel', async () => {
    const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
    expect(region).toBeInTheDocument();
    if (region) await userEvent.hover(region);

    await waitFor(() => {
      const carouselRegion = screen.getByTestId('Tohoku');
      expect(carouselRegion).toHaveClass("active");
    });

    const regionKanto = screen.getByTestId('map').querySelector('[data-id="kanto"]');
    expect(regionKanto).toBeInTheDocument();
    if (regionKanto) await userEvent.hover(regionKanto);

    await waitFor(() => {
      const carouselRegion = screen.getByTestId('Tohoku');
      expect(carouselRegion).not.toHaveClass("active");
    });
  });

  test('renders all slides correctly in Carousel', () => {
    const destinations = ["Okinawa", "Kyushu", "Shikoku", "Chugoku", "Kansai", "Chubu", "Kanto", "Tohoku", "Hokkaido"];
    destinations.forEach((destination) => {
      expect(screen.getByTestId(destination)).toBeInTheDocument();
    });
  });
});
