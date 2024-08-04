import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import Page from '../app/(places)/[destination]/page';
import { Destination } from '../types/index';
// import { renderWithProviders } from 'utils/test-utils';

 
export const handlers = [

  http.get('api/destination', () => {
    
    return HttpResponse.json({
      id: 1,
      region: 'kanto',
      img: '/bg-nara.jpg',
      map: '/Group 70.svg',
      overview: 'Kanto is a geographical area of Honshu, the largest island of Japan. This region includes the Greater Tokyo Area and encompasses seven prefectures.',
      topDestinations: [
        {
          name: 'Tokyo',
          img: '/todaiji-temple 1.jpg',
          description: 'Tokyo, the capital of Japan, is a large city known for its modernity and rich history.',
        },
        {
          name: 'Yokohama',
          img: '/park 1.jpg', 
          description: 'Yokohama is known for its beautiful waterfront and historic landmarks.',
        },
        {
          name: 'Kawasaki',
          img: '/museum 1.png', 
          description: 'Kawasaki is a city known for its industrial area and cultural sites.',
        },
      ],
      morePhotos: [
        '/Rectangle 18.jpg',
        '/Rectangle 20.jpg',
        '/Rectangle 19.jpg',
        '/Rectangle 21.jpg',
        '/Rectangle 22.jpg',
      ],
    })
  }),
]

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('destination page', () => {
  it('should render destination page', async () => {
    render(await Page({params:{ destination:  'kanto' }}))

    await waitFor(() => {
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });
  });
});

