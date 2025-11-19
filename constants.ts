import { Car, Service, SocialLink } from './types';

export const COMPANY_INFO = {
  name: "Suvihaar Luxury Car Rental",
  tagline: "The Suvihaar Standard: A Fleet That Defines Prestige",
  phone: "+91 7892673522",
  email: "info@suvihaarcarrental.com",
  address: "Shop # 313, 9th main, Siddanna Layout, Banashankari stage 2, Bengaluru, Karnataka 560070",
  whatsappLink: "https://wa.me/917892673522",
  logo: "https://framerusercontent.com/images/phKeNAWDcU4w6Hky1h5xWjNug.png"
};

export const CARS: Car[] = [
  {
    id: "bmw-5-series",
    name: "BMW 5 Series 520d",
    category: "Luxury Sedan",
    image: "https://framerusercontent.com/images/RzdqwxyFsqUBRt1bLgDvBIVJk.png?width=1200&height=1600",
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹9,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "merc-e-class",
    name: "Mercedes Benz E Class",
    category: "Luxury Sedan",
    image: "https://framerusercontent.com/images/H9slkcjIrlba7JO3QbpiaLMDho.png?width=1200&height=1600",
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹10,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "audi-a6",
    name: "Audi A6",
    category: "Luxury Sedan",
    image: "https://framerusercontent.com/images/J3ht5pgCRmjLbaYmWshP4Dk0.png?width=1080&height=1209",
    transmission: "Automatic",
    drive: "FWD",
    seats: 5,
    price: "₹10,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "toyota-commuter",
    name: "Toyota Commuter",
    category: "Luxury Van",
    image: "https://framerusercontent.com/images/cJt56ewvbpI7gsykCVbFmSoklA.png?width=960&height=1043",
    transmission: "Automatic",
    drive: "FWD",
    seats: 9,
    price: "₹10,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "bmw-530d",
    name: "BMW 530d Li Msport",
    category: "Sports Sedan",
    image: "https://framerusercontent.com/images/1qRbGvHH9JcOh3lQYCEwPnHsTw8.jpg?width=720&height=532",
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹12,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "bmw-630-gt",
    name: "BMW 630 GT Li Msport",
    category: "Grand Tourer",
    image: "https://framerusercontent.com/images/4iTYdCKK1YCpO0OnLAUB6U6tJcA.png?width=735&height=549",
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹16,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    category: "Premium Sedan",
    image: "https://framerusercontent.com/images/7bl9Shq44OlrG9lPIUXhk7a9ks0.png?width=874&height=590",
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹19,499",
    priceUnit: "8hr 80km"
  },
  {
    id: "merc-s-class",
    name: "Mercedes-Benz S-Class",
    category: "Ultra Luxury",
    image: "https://framerusercontent.com/images/BekdFxuhLKRp0ITibkcPQwOTcU.png?width=640&height=480",
    transmission: "Automatic",
    drive: "AWD",
    seats: 4,
    price: "₹34,999",
    priceUnit: "8hr 80km"
  },
  {
    id: "jaguar-xf",
    name: "Jaguar XF 25t",
    category: "Luxury Sedan",
    image: "https://framerusercontent.com/images/pJJ7dvbMjBmig6cpGWs4ecxzMkI.jpg?scale-down-to=1024&width=1156&height=867", 
    transmission: "Automatic",
    drive: "RWD",
    seats: 5,
    price: "₹15,000",
    priceUnit: "8hr 80km"
  }
];

export const SERVICES: Service[] = [
  {
    title: "Chauffeur Driven",
    description: "Professional, well-trained, and courteous chauffeurs ensure your journey is safe, smooth, and enjoyable.",
    icon: "chauffeur"
  },
  {
    title: "Wedding Events",
    description: "Make your special day unforgettable with our premium fleet of luxury cars for the bride, groom, and guests.",
    icon: "wedding"
  },
  {
    title: "Airport Transfers",
    description: "Punctual and comfortable airport pickups and drops to ensure you never miss a flight or a meeting.",
    icon: "airport"
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and partners with our high-end executive cars for corporate travel and events.",
    icon: "corporate"
  }
];

export const STEPS = [
  {
    id: 1,
    title: "Search for a car",
    description: "Browse through the wide range of Luxury Cars tailored for your specific needs."
  },
  {
    id: 2,
    title: "Contact Us",
    description: "Call or drop a message on WhatsApp to confirm availability and pricing."
  },
  {
    id: 3,
    title: "Book your car",
    description: "Reserve your car by putting down just 50% of the total payment."
  }
];