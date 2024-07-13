export interface Destination {
    id: number;
    region: string;
    img: string;
    map: string;
    overview: string;
    topDestinations: {
      name: string;
      img: string;
      description: string;
    }[];
    morePhotos: string[];
  }