import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Package, ShoppingBag, DollarSign, TrendingUp, Plus, Edit2, Trash2, ArrowUpRight, Calendar, Search } from 'lucide-react';
import { MOCK_ORDERS, MOCK_PRODUCTS, MOCK_FARMER_STATS, REVENUE_DATA } from '../services/mockData';

export const FarmerDashboard: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your farm today.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-600 shadow-sm">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Oct 24, 2023</span>
             </div>
             <button className="bg-primary text-white px-5 py-2.5 rounded-xl flex items-center hover:bg-green-800 transition shadow-lg hover:shadow-primary/30">
              <Plus className="w-5 h-5 mr-2" /> Add New Crop
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<DollarSign />} 
            label="Total Revenue" 
            value={`₹${MOCK_FARMER_STATS.revenue.toLocaleString()}`} 
            trend="+12.5%"
            color="bg-emerald-500" 
            textColor="text-emerald-500"
            bgColor="bg-emerald-50"
          />
          <StatCard 
            icon={<ShoppingBag />} 
            label="Total Orders" 
            value={MOCK_FARMER_STATS.orders} 
            trend="+5.2%"
            color="bg-blue-500" 
            textColor="text-blue-500"
            bgColor="bg-blue-50"
          />
          <StatCard 
            icon={<Package />} 
            label="Active Listings" 
            value={MOCK_FARMER_STATS.products} 
            trend="0%"
            color="bg-orange-500" 
            textColor="text-orange-500"
            bgColor="bg-orange-50"
          />
          <StatCard 
            icon={<TrendingUp />} 
            label="Average Rating" 
            value={MOCK_FARMER_STATS.rating} 
            trend="+0.2"
            color="bg-purple-500" 
            textColor="text-purple-500"
            bgColor="bg-purple-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Revenue Overview</h2>
              <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2">
                <option>Last 6 months</option>
                <option>Last year</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2D5F3F" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2D5F3F" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} tickFormatter={(value) => `₹${value}`} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2D5F3F" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              <button className="text-primary text-sm font-medium hover:underline">View All</button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-4 pr-2">
              {MOCK_ORDERS.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-gray-200 text-gray-500 font-bold mr-3 group-hover:border-primary group-hover:text-primary transition-colors">
                      {order.customer.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{order.customer}</div>
                      <div className="text-xs text-gray-500">{order.items} items • {order.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">₹{order.total}</div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inventory Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-bold text-gray-900">Current Inventory</h2>
            <div className="relative w-full md:w-64">
               <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
               <input 
                  placeholder="Search crops..." 
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
               />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Info</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_PRODUCTS.slice(0, 3).map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img className="h-12 w-12 rounded-lg object-cover mr-4 shadow-sm" src={product.image} alt="" />
                        <div>
                           <div className="font-bold text-gray-900">{product.name}</div>
                           <div className="text-xs text-gray-500 mt-0.5 flex items-center">
                              {product.isOrganic && <span className="text-green-600 font-medium mr-1">Organic • </span>} 
                              ID: #{product.id}
                           </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                         {product.category}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{product.quantity} {product.unit}</div>
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                         <div className="bg-primary h-full rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">₹{product.price}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-green-50 rounded-lg transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 flex justify-center">
             <button className="text-sm text-gray-500 hover:text-primary font-medium">Show all inventory</button>
          </div>
        </div>

      </div>
    </div>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string | number; 
  color: string;
  textColor: string;
  bgColor: string;
  trend: string;
}> = ({ icon, label, value, color, textColor, bgColor, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${bgColor} ${textColor}`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
      </div>
      <div className="flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
         <ArrowUpRight className="w-3 h-3 mr-1" />
         {trend}
      </div>
    </div>
    <div>
      <div className="text-sm text-gray-500 font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  </div>
);