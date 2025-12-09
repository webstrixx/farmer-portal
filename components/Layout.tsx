import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserRole, User } from '../types';
import { Menu, X, Sprout, User as UserIcon, LogOut, ShoppingCart, Tractor, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<{ user: User | null; onLogout: () => void }> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = (role: UserRole) => {
    navigate(`/auth?role=${role}`);
    setIsOpen(false);
  };

  const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300" />
        )}
      </Link>
    );
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => navigate('/')}>
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Sprout className="h-6 w-6 text-primary" />
            </div>
            <span className={`ml-3 font-heading font-bold text-xl tracking-tight ${scrolled || isOpen ? 'text-gray-900' : 'text-gray-900 lg:text-white lg:drop-shadow-md'}`}>
              AgriConnect
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className={`flex space-x-8 ${!scrolled && location.pathname === '/' ? 'text-white' : ''}`}>
               <Link
                to="/"
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-600 hover:text-primary'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-600 hover:text-primary'}`}
              >
                About
              </Link>
              <Link
                to="/marketplace"
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-600 hover:text-primary'}`}
              >
                Marketplace
              </Link>
            </div>
            
            {user ? (
              <div className="flex items-center space-x-6">
                 {user.role === 'farmer' && (
                   <Link to="/farmer-dashboard" className={`flex items-center font-medium hover:opacity-80 transition-colors ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-primary'}`}>
                     <Tractor className="w-5 h-5 mr-1" /> Dashboard
                   </Link>
                 )}
                 {user.role === 'buyer' && (
                    <Link to="/cart" className={`relative hover:opacity-80 transition-opacity ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-600'}`}>
                      <ShoppingCart className="w-6 h-6" />
                      <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">2</span>
                    </Link>
                 )}
                <div className="flex items-center space-x-3 pl-6 border-l border-gray-200/30">
                  <div className="flex flex-col items-end">
                    <span className={`text-sm font-semibold ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}>{user.name}</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center border border-white/20">
                     <span className="text-accent font-bold text-sm">{user.name.charAt(0)}</span>
                  </div>
                  <button onClick={onLogout} className={`${!scrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-gray-400 hover:text-red-500'} transition-colors`}>
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleAuthClick('farmer')}
                  className={`text-sm font-medium hover:underline ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-primary'}`}
                >
                  Farmer Login
                </button>
                <button 
                  onClick={() => handleAuthClick('buyer')}
                  className="bg-accent text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join Now
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${!scrolled && !isOpen && location.pathname === '/' ? 'text-white' : 'text-gray-600'} hover:text-primary focus:outline-none transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Home</Link>
          <Link to="/marketplace" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Marketplace</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">About</Link>
          
          {user ? (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center px-3 mb-4">
                 <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <UserIcon className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <div className="font-medium text-gray-800">{user.name}</div>
                   <div className="text-sm text-gray-500 capitalize">{user.role}</div>
                 </div>
              </div>
              {user.role === 'farmer' && (
                 <Link to="/farmer-dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary font-medium bg-green-50 rounded-md mb-2">Dashboard</Link>
              )}
              {user.role === 'buyer' && (
                 <Link to="/cart" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-primary font-medium bg-green-50 rounded-md mb-2">My Cart</Link>
              )}
              <button 
                onClick={() => { onLogout(); setIsOpen(false); }}
                className="block w-full text-left px-3 py-2 text-red-600 font-medium hover:bg-red-50 rounded-md"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-3 px-3">
              <button 
                onClick={() => handleAuthClick('farmer')}
                className="w-full text-center border border-primary text-primary py-2.5 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Farmer
              </button>
              <button 
                onClick={() => handleAuthClick('buyer')}
                className="w-full text-center bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-green-800 transition-colors shadow-md"
              >
                Buyer
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-accent/20 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-accent" />
            </div>
            <span className="ml-3 font-heading font-bold text-2xl tracking-tight">AgriConnect</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Revolutionizing agriculture by connecting local farmers directly with conscious consumers. Fresh, fair, and sustainable.
          </p>
          <div className="flex space-x-4 pt-2">
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
              <a key={social} href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current rounded-sm" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Explore</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link to="/marketplace" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Marketplace</Link></li>
            <li><Link to="/farmers" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Our Farmers</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>About Us</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>Blog</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Support</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Shipping Rates</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-heading font-bold text-lg mb-6">Stay Fresh</h3>
          <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for seasonal updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent text-sm placeholder-gray-400 backdrop-blur-sm transition-all"
            />
            <button className="absolute right-1.5 top-1.5 bg-accent text-primary font-bold px-4 py-1.5 rounded-lg hover:bg-yellow-400 transition shadow-lg text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2024 AgriConnect. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar user={user} onLogout={onLogout} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};