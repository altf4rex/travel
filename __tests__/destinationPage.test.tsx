import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import Page from '../app/(places)/[destination]/page';
import { Destination } from '../types/index';
import { renderWithProviders } from 'utils/test-utils';
import { data } from "../api/fakeApi";


const initialState = {
  destination: {
    destination: data,
    loading: 'succeeded'
  },
  region: {
    data: {
      nextRegion: null,
      prevRegion: null,
    }
  }
};

export const handlers = [
  http.get('/api/destination', async () => {
    await delay(200);
    return HttpResponse.json(initialState);
  })
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('destination page', () => {
  it('should render destination page', async () => {
    renderWithProviders(<Page params={{ destination: 'kanto' }} />);

    await waitFor(() => {
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });
  });
});
