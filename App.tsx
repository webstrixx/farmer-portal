import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { FarmerDashboard } from './pages/FarmerDashboard';
import { Auth } from './pages/Auth';
import { User, UserRole } from './types';

// Simple placeholder components for routes not fully implemented in this demo
const About = () => <div className="p-10 text-center text-2xl">About Us Page (Coming Soon)</div>;
const Cart = () => <div className="p-10 text-center text-2xl">Shopping Cart (Coming Soon)</div>;

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (role: UserRole) => {
    // Simulate a successful login with mock user data
    const mockUser: User = {
      id: role === 'farmer' ? 'f1' : 'b1',
      name: role === 'farmer' ? 'Ramesh Kumar' : 'Priya Sharma',
      email: role === 'farmer' ? 'ramesh@farm.com' : 'priya@mail.com',
      role: role,
      location: role === 'farmer' ? 'Punjab' : 'Delhi'
    };
    setUser(mockUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={user?.role === 'buyer' ? <Cart /> : <Navigate to="/auth" />} />
          
          <Route 
            path="/auth" 
            element={!user ? <Auth onLogin={handleLogin} /> : <Navigate to="/" />} 
          />
          
          <Route 
            path="/farmer-dashboard" 
            element={
              user?.role === 'farmer' 
                ? <FarmerDashboard /> 
                : <Navigate to={user ? "/" : "/auth?role=farmer"} />
            } 
          />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;