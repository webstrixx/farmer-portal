import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { UserRole } from '../types';
import { Sprout, Tractor, ShoppingBag, ArrowRight, Check } from 'lucide-react';

interface AuthProps {
  onLogin: (role: UserRole) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialRole = (searchParams.get('role') as UserRole) || 'buyer';
  
  const [role, setRole] = useState<UserRole>(initialRole);
  const [isLogin, setIsLogin] = useState(true);

  // Update local state if URL param changes
  useEffect(() => {
    const roleParam = searchParams.get('role') as UserRole;
    if (roleParam && (roleParam === 'farmer' || roleParam === 'buyer')) {
      setRole(roleParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      onLogin(role);
      navigate(role === 'farmer' ? '/farmer-dashboard' : '/marketplace');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Image & Marketing */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fresh Farm Produce"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 w-full flex flex-col justify-between p-12 text-white">
          <div className="flex items-center">
            <Sprout className="h-8 w-8 text-accent mr-3" />
            <span className="font-heading font-bold text-2xl tracking-tight">AgriConnect</span>
          </div>
          
          <div className="mb-12">
            <h1 className="text-4xl font-heading font-bold mb-6 leading-tight">
              Join the future of <br/> <span className="text-accent">Sustainable Farming</span>
            </h1>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <div className="bg-accent/20 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-accent" /></div>
                Direct access to fair markets
              </li>
              <li className="flex items-center">
                <div className="bg-accent/20 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-accent" /></div>
                Fresh, organic produce for families
              </li>
              <li className="flex items-center">
                <div className="bg-accent/20 p-1 rounded-full mr-3"><Check className="w-4 h-4 text-accent" /></div>
                Transparent supply chain
              </li>
            </ul>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 AgriConnect. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="lg:hidden mb-10 flex justify-center">
             <Sprout className="h-10 w-10 text-primary" />
          </div>
          
          <div className="mb-10">
            <h2 className="text-3xl font-heading font-bold text-gray-900">
              {isLogin ? 'Welcome back!' : 'Get started'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? 'New to AgriConnect?' : 'Already have an account?'}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="font-medium text-primary hover:text-green-800 ml-1 transition-colors"
              >
                {isLogin ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-8">
            {/* Role Toggle */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setRole('buyer')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                    role === 'buyer' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-100 text-gray-400 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <ShoppingBag className={`w-6 h-6 mb-2 ${role === 'buyer' ? 'fill-current' : ''}`} />
                  <span className="font-bold text-sm">Consumer</span>
                </button>
                <button
                  onClick={() => setRole('farmer')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-200 ${
                    role === 'farmer' 
                    ? 'border-primary bg-primary/5 text-primary' 
                    : 'border-gray-100 text-gray-400 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Tractor className={`w-6 h-6 mb-2 ${role === 'farmer' ? 'fill-current' : ''}`} />
                  <span className="font-bold text-sm">Farmer</span>
                </button>
              </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {!isLogin && role === 'farmer' && (
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Farm Location</label>
                  <div className="mt-1">
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white bg-primary hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95"
                >
                  {isLogin ? 'Sign in' : 'Create Account'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all">
                  Google
                </button>
                <button className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};