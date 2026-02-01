
export interface Activity {
  id: string;
  title: string;
  description: string;
  uri: string;
  category: 'restaurant' | 'attraction' | 'park' | 'entertainment';
}

export interface MapRegion {
  lat: number;
  lng: number;
  radius: number;
}
