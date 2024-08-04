import { NextRequest, NextResponse } from 'next/server';

// Пример данных, которые вы хотите вернуть
const destinations = [
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
    overview: 'Tohoku is a geographical area of Honshu, the largest island of Japan. This region includes the Greater Tokyo Area and encompasses seven prefectures.',
    topDestinations: [
      {
        name: 'Tohoku',
        img: '/images/tokyo.jpg', // Replace with your image path or URL
        description: 'Tokyo, the capital of Japan, is a large city known for its modernity and rich history.',
      },
      {
        name: 'Tohoku',
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
];



export async function GET(request: NextRequest) {

//   const res = await fetch('https://api.example.com/data', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.API_KEY!,
//     },
//   });
//   const data = await res.json();

//   return Response.json({ data });

const { searchParams } = new URL(request.url);
const region = searchParams.get('region');

const destination = destinations.find(dest => dest.region === region);

if (destination) {
  return NextResponse.json(destination);
} else {
  return new NextResponse('Destination not found', { status: 404 });
}
}