import { render, screen, act } from "@testing-library/react";
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
    // finding a carousel "Next slide" button by "aria-label" and click
    const nextButton = screen.getByLabelText('Next slide');
    expect(nextButton).toBeInTheDocument();
    await userEvent.click(nextButton);

    // finding a region by test-id and data-id, checking active
    const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
    expect(region).toHaveClass("is_active");

    // changing region
    await userEvent.click(nextButton);

    // the absence of a hover in the previous element
    expect(region).not.toHaveClass("is_active");

    // cheking is modalDescrition in document
    expect(screen.getByTestId("modal-description")).toBeInTheDocument();
  });

  // test('interacts correctly between Carousel and Map - Previous slide', async () => {
  //   const prevButton = screen.getByLabelText('Previous slide');
  //   expect(prevButton).toBeInTheDocument();
    
  //   // Initial state check
  //   const initialRegion = screen.getByTestId('map').querySelector('[data-id="hokkaido"]');
  //   expect(initialRegion).toHaveClass("is_active");

  //   // Click the Previous slide button
  //   await userEvent.click(prevButton);
    
  //   // Check new active region in Carousel
  //   const carouselRegion = await screen.findByTestId('Tohoku');
  //   expect(carouselRegion).toHaveClass("active");

  //   // Check new active region in Map
  //   const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
  //   expect(region).toHaveClass("is_active");
  
  //   // Click the Previous slide button again
  //   await userEvent.click(prevButton);

  //   // Check the previous region is no longer active
  //   expect(region).not.toHaveClass("is_active");

  //   // Check the new region is active
  //   const newRegion = screen.getByTestId('map').querySelector('[data-id="kanto"]');
  //   expect(newRegion).toHaveClass("is_active");
  // });

  test('interacts correctly between Carousel and Map - Previous slide', async () => {
    const prevButton = screen.getByLabelText('Previous slide');
    expect(prevButton).toBeInTheDocument();

    // Initial state check
    const initialRegion = screen.getByTestId('map').querySelector('[data-id="kanto"]');
    expect(initialRegion).toHaveClass("is_active");

    // Click the Previous slide button
    await userEvent.click(prevButton);
    
    // Check new active region in Carousel using findByTestId with await
    const carouselRegion = await screen.findByTestId('Chubu');
    expect(carouselRegion).toHaveClass("active");

    // Check new active region in Map
    const region = screen.getByTestId('map').querySelector('[data-id="chubu"]');
    expect(region).toHaveClass("is_active");

    // Click the Previous slide button again
    await userEvent.click(prevButton);

    // Check the previous region is no longer active
    expect(region).not.toHaveClass("is_active");

    // Check the new region is active
    const newRegion = await screen.findByTestId('Kansai');
    expect(newRegion).toHaveClass("active");
});

  test('interacts correctly between Map and Carousel', async () => {
    const region = screen.getByTestId('map').querySelector('[data-id="tohoku"]');
    expect(region).toBeInTheDocument();
    if(region) await userEvent.hover(region);

    const carouselRegion = screen.getByTestId('Tohoku');
    expect(carouselRegion).toHaveClass("active");

    const regionKanto = screen.getByTestId('map').querySelector('[data-id="kanto"]');
    expect(regionKanto).toBeInTheDocument();
    if(regionKanto) await userEvent.hover(regionKanto);

    expect(carouselRegion).not.toHaveClass("active");
  });

  test('renders all slides correctly in Carousel', () => {
    const destinations = ["Okinawa", "Kyushu", "Shikoku", "Chugoku", "Kansai", "Chubu", "Kanto", "Tohoku", "Hokkaido"];
    destinations.forEach((destination) => {
      expect(screen.getByTestId(destination)).toBeInTheDocument();
    })
  })
});
