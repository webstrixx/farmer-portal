export type UserRole = 'farmer' | 'buyer' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  location?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  farmerName: string;
  farmerId: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  isOrganic: boolean;
  harvestDate: string;
}

export interface Order {
  id: string;
  date: string;
  customer: string;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  items: number;
}

export interface DashboardStats {
  revenue: number;
  orders: number;
  products: number;
  rating: number;
}