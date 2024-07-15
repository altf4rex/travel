export type Destination = {
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

export type Region = {
      id: number;
      img: string;
      name: string;
      link: string;
      region: string;
      descriptionHeader: string;
      descriptionText: string;
      prevRegion: string | null;
      nextRegion: string | null;
};