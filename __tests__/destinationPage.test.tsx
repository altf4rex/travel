import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import Page from '../app/(places)/[destination]/page';
import * as reduxHooks from 'react-redux';
import { Destination } from '../types/index';

const data: Destination[] = [
  {
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
  }
];

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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

jest.mock('react-redux');
const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('destination page', () => {
  beforeEach(() => {
    mockedUseSelector.mockClear();
    mockedUseDispatch.mockClear();
  });

  it('should render destination page', async () => {
    const mockDispatch = jest.fn();
    mockedUseDispatch.mockReturnValue(mockDispatch);
    mockedUseSelector.mockImplementation(selector => selector(initialState));

    render(
      <Provider store={store}>
        <Page params={{ destination: 'kanto' }} />
      </Provider>
    );

    await waitFor(() => {
      // expect(mockDispatch).toHaveBeenCalled();
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });

    screen.debug();
  });
});
