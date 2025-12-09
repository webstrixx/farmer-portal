import { Product, Order, DashboardStats } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organic Wheat',
    category: 'Grains',
    price: 450,
    unit: 'quintal',
    quantity: 50,
    farmerName: 'Ramesh Kumar',
    farmerId: 'f1',
    location: 'Punjab, India',
    image: 'https://picsum.photos/seed/wheat/400/300',
    rating: 4.8,
    reviews: 234,
    isOrganic: true,
    harvestDate: '2023-10-15'
  },
  {
    id: '2',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    quantity: 200,
    farmerName: 'Sunita Devi',
    farmerId: 'f2',
    location: 'Nashik, Maharashtra',
    image: 'https://picsum.photos/seed/tomato/400/300',
    rating: 4.5,
    reviews: 89,
    isOrganic: false,
    harvestDate: '2023-11-01'
  },
  {
    id: '3',
    name: 'Basmati Rice',
    category: 'Grains',
    price: 120,
    unit: 'kg',
    quantity: 500,
    farmerName: 'Vikram Singh',
    farmerId: 'f3',
    location: 'Haryana, India',
    image: 'https://picsum.photos/seed/rice/400/300',
    rating: 4.9,
    reviews: 156,
    isOrganic: true,
    harvestDate: '2023-09-20'
  },
  {
    id: '4',
    name: 'Alphonso Mangoes',
    category: 'Fruits',
    price: 800,
    unit: 'dozen',
    quantity: 100,
    farmerName: 'Ratnagiri Farms',
    farmerId: 'f4',
    location: 'Ratnagiri, Maharashtra',
    image: 'https://picsum.photos/seed/mango/400/300',
    rating: 5.0,
    reviews: 342,
    isOrganic: true,
    harvestDate: '2023-04-10'
  },
  {
    id: '5',
    name: 'Red Onions',
    category: 'Vegetables',
    price: 25,
    unit: 'kg',
    quantity: 1000,
    farmerName: 'Ramesh Kumar',
    farmerId: 'f1',
    location: 'Punjab, India',
    image: 'https://picsum.photos/seed/onion/400/300',
    rating: 4.2,
    reviews: 45,
    isOrganic: false,
    harvestDate: '2023-10-28'
  }
];

export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-001', date: '2023-11-01', customer: 'John Doe', total: 4500, status: 'Pending', items: 3 },
  { id: 'ORD-002', date: '2023-10-29', customer: 'Fresh Mart', total: 12000, status: 'Shipped', items: 15 },
  { id: 'ORD-003', date: '2023-10-25', customer: 'Alice Smith', total: 850, status: 'Delivered', items: 2 },
  { id: 'ORD-004', date: '2023-10-20', customer: 'Green Grocers', total: 25000, status: 'Delivered', items: 50 },
];

export const MOCK_FARMER_STATS: DashboardStats = {
  revenue: 42350,
  orders: 24,
  products: 8,
  rating: 4.8
};

export const REVENUE_DATA = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
  { name: 'Aug', value: 5000 },
  { name: 'Sep', value: 6500 },
  { name: 'Oct', value: 8000 },
];