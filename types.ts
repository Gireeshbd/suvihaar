export interface Car {
  id: string;
  name: string;
  category: string;
  image: string;
  transmission: string;
  drive: string;
  seats: number;
  price: string;
  priceUnit: string;
}

export interface Service {
  title: string;
  description: string;
  icon: 'chauffeur' | 'wedding' | 'airport' | 'corporate';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}