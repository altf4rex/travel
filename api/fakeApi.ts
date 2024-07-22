import { Destination } from "types";

export const data: Destination[] = [
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

export const destinations: Destination[] = [
  {
    id: 1,
    region: 'kanto',
    img: '/bg-nara.jpg',
    map: '/Group 70.svg',
    overview: 'Kanto is a geographical area of Honshu, the largest island of Japan. This region includes the Greater Tokyo Area and encompasses seven prefectures.',
    topDestinations: [
      {
        name: 'Tokyo',
        img: '/todaiji-temple 1.jpg', // Replace with your image path or URL
        description: 'Tokyo, the capital of Japan, is a large city known for its modernity and rich history.',
      },
      {
        name: 'Yokohama',
        img: '/park 1.jpg', // Replace with your image path or URL
        description: 'Yokohama is known for its beautiful waterfront and historic landmarks.',
      },
      {
        name: 'Kawasaki',
        img: '/museum 1.png', // Replace with your image path or URL
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
  },
  {
    id: 2,
    region: 'tohoku',
    img: '',
    map: '/Group 70.svg',
    overview: 'tohoku is a geographical area of Honshu, the largest island of Japan. This region includes the Greater Tokyo Area and encompasses seven prefectures.',
    topDestinations: [
      {
        name: 'tohoku',
        img: '/images/tokyo.jpg', // Replace with your image path or URL
        description: 'Tokyo, the capital of Japan, is a large city known for its modernity and rich history.',
      },
      {
        name: 'tohoku',
        img: '/images/yokohama.jpg', // Replace with your image path or URL
        description: 'Yokohama is known for its beautiful waterfront and historic landmarks.',
      },
      {
        name: 'Kawasaki',
        img: '/images/kawasaki.jpg', // Replace with your image path or URL
        description: 'Kawasaki is a city known for its industrial area and cultural sites.',
      },
    ],
    morePhotos: [
      '/images/kanto1.jpg',
      '/images/kanto2.jpg',
      '/images/kanto3.jpg',
      '/images/kanto4.jpg',
      '/images/kanto5.jpg',
    ],
  },
  // Add more regions similarly
];


export const fakeFetchDestination = async (destination: string): Promise<Destination[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(destinations.filter(a => destination === a.region));
    }, 100); 
  });
};