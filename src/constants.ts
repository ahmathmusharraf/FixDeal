export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  color: string;
}

export interface CarListing {
  id: string;
  brand: string;
  model: string;
  trim: string;
  year: number;
  mileage: number;
  price: number;
  spec: string;
  image: string;
  logo: string;
  fulfilledByFD: boolean;
  category: 'Mobile Phone' | 'Electronics' | 'Vehicle' | 'Motorcycle';
}

export const SERVICES: Service[] = [
  {
    id: 'buy',
    title: 'Buy Items',
    description: 'Explore the best deals in the island with transparent pricing.',
    icon: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    color: 'emerald'
  },
  {
    id: 'sell',
    title: 'Sell Your Items',
    description: 'Get the best price for your items with our easy evaluation process.',
    icon: 'DollarSign',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    color: 'blue'
  },
  {
    id: 'rent',
    title: 'Rent Anything',
    description: 'Wide range of vehicles and equipment available for short and long term.',
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    color: 'purple'
  },
  {
    id: 'service',
    title: 'Professional Services',
    description: 'Hassle-free maintenance and professional services at your doorstep.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800',
    color: 'orange'
  }
];

export const CAR_LISTINGS: CarListing[] = [
  {
    id: '1',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    trim: '256GB Titanium',
    year: 2023,
    mileage: 98,
    price: 345000,
    spec: 'Sri Lankan ZP/A / Physical Dual SIM',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    fulfilledByFD: true,
    category: 'Mobile Phone'
  },
  {
    id: '2',
    brand: 'Sony',
    model: 'PlayStation 5 Slim',
    trim: '1TB SSD Disc Edition',
    year: 2024,
    mileage: 100,
    price: 185000,
    spec: 'Brand New Sealed with 1 Year Warranty',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
    fulfilledByFD: true,
    category: 'Electronics'
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Land Cruiser Prado',
    trim: 'TX L Package',
    year: 2020,
    mileage: 48000,
    price: 46500000,
    spec: 'Pearl White / Petrol / Leather / Sunroof',
    image: 'https://images.unsplash.com/photo-1594568280292-02f64ff4e819?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Toyota_EU.svg',
    fulfilledByFD: true,
    category: 'Vehicle'
  },
  {
    id: '4',
    brand: 'Yamaha',
    model: 'YZF-R1',
    trim: 'Monster Energy Edition',
    year: 2022,
    mileage: 6500,
    price: 8400000,
    spec: '1000cc / Quickshifter / Akrapovic Exhaust',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Yamaha_logo.svg',
    fulfilledByFD: true,
    category: 'Motorcycle'
  },
  {
    id: '5',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    trim: '512GB Titanium Gray',
    year: 2024,
    mileage: 99,
    price: 325000,
    spec: 'TRCSL Approved with Samsung Care+',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    fulfilledByFD: true,
    category: 'Mobile Phone'
  },
  {
    id: '6',
    brand: 'Sony',
    model: 'WH-1000XM5 ANC',
    trim: 'Wireless Headphones',
    year: 2023,
    mileage: 95,
    price: 110000,
    spec: 'Silver Edition / Noise Canceling Active',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
    fulfilledByFD: true,
    category: 'Electronics'
  }
];

export const BRANDS = [
  'Apple', 'Samsung', 'Sony', 'Toyota', 'Honda', 'Yamaha', 'Suzuki', 'Nissan', 'Xiaomi', 'LG', 'Asus', 'HP'
];
