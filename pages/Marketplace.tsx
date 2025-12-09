import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Leaf, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';
import { Product } from '../types';

export const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const categories = ['All', 'Grains', 'Vegetables', 'Fruits', 'Pulses'];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.farmerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <div className="bg-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Marketplace</h1>
          <p className="text-green-100 text-lg mb-8 max-w-2xl">Browse thousands of fresh crops directly from farmers. Filter by location, price, and quality to find exactly what you need.</p>
          
          <div className="bg-white p-2 rounded-2xl shadow-xl max-w-3xl flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
               <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
               <input
                type="text"
                placeholder="Search crops (e.g., Wheat, Mango), farmers, or locations..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-none focus:ring-0 text-gray-900 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-accent text-primary font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition shadow-md md:w-auto w-full">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 p-3 rounded-lg text-gray-700 font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters & Categories</span>
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-72 flex-shrink-0 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <span className="font-bold text-gray-900 text-lg flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-primary" /> Filters
                </span>
                <button className="text-xs text-primary font-medium hover:underline">Reset</button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Categories</h3>
                <div className="space-y-3">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center mr-3 transition-colors ${selectedCategory === cat ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                        {selectedCategory === cat && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="category" 
                        className="hidden"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span className={`text-sm ${selectedCategory === cat ? 'text-gray-900 font-semibold' : 'text-gray-600 group-hover:text-primary transition-colors'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Price Range</h3>
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 flex-1">
                    <span className="text-xs text-gray-400 block">Min</span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">₹</span>
                      <input type="number" className="w-full bg-transparent text-sm font-medium focus:outline-none" defaultValue="0" />
                    </div>
                  </div>
                  <div className="text-gray-400">-</div>
                  <div className="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 flex-1">
                    <span className="text-xs text-gray-400 block">Max</span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-1">₹</span>
                      <input type="number" className="w-full bg-transparent text-sm font-medium focus:outline-none" defaultValue="5000" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quality</h3>
                <label className="flex items-center cursor-pointer mb-3 p-3 rounded-xl border border-gray-100 hover:bg-green-50 hover:border-green-200 transition-all">
                  <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-lg mr-3">
                     <Leaf className="w-4 h-4" />
                  </div>
                  <div className="flex-grow">
                    <span className="block text-sm font-bold text-gray-900">Organic</span>
                    <span className="block text-xs text-gray-500">Certified only</span>
                  </div>
                  <input type="checkbox" className="h-5 w-5 text-primary rounded focus:ring-primary border-gray-300" />
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">
                Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> results
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-sm font-bold text-gray-900 hover:text-primary">
                    <span>Relevance</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {/* Dropdown would go here */}
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">No products found</h3>
                 <p className="text-gray-500 text-center max-w-xs mb-6">We couldn't find anything matching your search. Try adjusting filters or search terms.</p>
                 <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="text-primary font-medium hover:underline"
                 >
                   Clear all filters
                 </button>
               </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {product.isOrganic && (
        <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md shadow-md tracking-wider">
          Organic
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
        <Star className="w-3 h-3 text-yellow-500 fill-current" />
        <span className="text-xs font-bold ml-1 text-gray-800">{product.rating}</span>
      </div>
    </div>
    
    <div className="p-5 flex-grow flex flex-col">
      <div className="mb-2">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{product.category}</span>
        <h3 className="font-heading font-bold text-lg text-gray-900 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden mr-2">
          <img src={`https://i.pravatar.cc/100?u=${product.farmerId}`} alt="" className="w-full h-full object-cover"/>
        </div>
        <span className="text-sm text-gray-600 truncate">{product.farmerName}</span>
      </div>
      
      <div className="flex items-center text-xs text-gray-400 mb-4 bg-gray-50 p-2 rounded-lg">
        <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
        <span className="truncate">{product.location}</span>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-400 font-medium">Price per {product.unit}</div>
          <div className="text-primary font-bold text-xl">₹{product.price}</div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-green-800 transition shadow-lg hover:shadow-primary/30 flex items-center transform active:scale-95">
          <span className="text-sm font-bold">Add</span>
        </button>
      </div>
    </div>
  </div>
);