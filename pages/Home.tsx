import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, Leaf, Truck, ShieldCheck, Heart, 
  Search, ShoppingBag, CreditCard, Star, Quote, Calendar, MapPin, ArrowUpRight 
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../services/mockData';

const Hero = () => (
  <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
    {/* Background Image with Parallax-like fixed attachment */}
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover opacity-60"
        src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        alt="Farm field morning"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
      <div className="max-w-2xl animate-fade-in-up">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-accent bg-accent/10 border border-accent/20 mb-6 backdrop-blur-md">
          <Leaf className="w-4 h-4 mr-2" /> 100% Organic & Direct
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight mb-6">
          Cultivating <span className="text-accent">Connections,</span> <br/>
          Harvesting <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">Trust.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
          Connect directly with local farmers. Get fresh, organic produce delivered from the field to your doorstep within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/marketplace"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-primary bg-accent hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:shadow-[0_0_30px_rgba(255,184,0,0.6)] transform hover:-translate-y-1"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/auth?role=farmer"
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            Become a Seller
          </Link>
        </div>
        
        <div className="mt-12 flex items-center space-x-6 text-sm font-medium text-gray-300">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
               {[1,2,3,4].map(i => (
                 <img key={i} className="w-8 h-8 rounded-full border-2 border-primary" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
               ))}
            </div>
            <span>5k+ Happy Farmers</span>
          </div>
          <div className="h-4 w-px bg-gray-500"></div>
          <div className="flex items-center">
             <div className="flex text-accent mr-2">
               {[1,2,3,4,5].map(i => <Heart key={i} className="w-4 h-4 fill-current" />)}
             </div>
             <span>4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 border border-gray-100">
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-green-50 p-4 rounded-2xl mb-4 text-primary transform transition-transform hover:scale-110 duration-300">
          <Users className="h-8 w-8" />
        </div>
        <div className="text-4xl font-extrabold text-gray-900 mb-2 font-heading">5,000+</div>
        <div className="text-gray-500 font-medium">Registered Farmers</div>
        <p className="text-xs text-gray-400 mt-2">Verified local producers</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-orange-50 p-4 rounded-2xl mb-4 text-orange-600 transform transition-transform hover:scale-110 duration-300">
          <CheckCircle className="h-8 w-8" />
        </div>
        <div className="text-4xl font-extrabold text-gray-900 mb-2 font-heading">12k+</div>
        <div className="text-gray-500 font-medium">Monthly Orders</div>
        <p className="text-xs text-gray-400 mt-2">Delivered fresh & on time</p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <div className="bg-blue-50 p-4 rounded-2xl mb-4 text-blue-600 transform transition-transform hover:scale-110 duration-300">
          <TrendingUp className="h-8 w-8" />
        </div>
        <div className="text-4xl font-extrabold text-gray-900 mb-2 font-heading">₹4.5Cr</div>
        <div className="text-gray-500 font-medium">Farmer Revenue</div>
        <p className="text-xs text-gray-400 mt-2">Direct earnings paid</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Simple Process</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
          From the Field to Your Fork
        </h3>
        <p className="text-lg text-gray-600">
          A seamless digital ecosystem ensuring transparency and speed at every step of the agricultural supply chain.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Search className="w-6 h-6 text-white" />,
              title: "Discover",
              desc: "Browse a wide variety of fresh, locally grown crops and view farmer profiles.",
              color: "bg-blue-500"
            },
            {
              icon: <ShoppingBag className="w-6 h-6 text-white" />,
              title: "Order",
              desc: "Select your desired quantity and place an order directly with the farmer.",
              color: "bg-accent"
            },
            {
              icon: <CreditCard className="w-6 h-6 text-white" />,
              title: "Secure Pay",
              desc: "Payments are held securely in escrow until the produce is ready for dispatch.",
              color: "bg-purple-500"
            },
            {
              icon: <Truck className="w-6 h-6 text-white" />,
              title: "Delivery",
              desc: "Logistics partners ensure your harvest reaches your doorstep within 24 hours.",
              color: "bg-green-500"
            }
          ].map((step, idx) => (
            <div key={idx} className="relative bg-white md:bg-transparent p-6 md:p-0 rounded-2xl shadow-sm md:shadow-none border md:border-none border-gray-100 flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                {React.cloneElement(step.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <div className="absolute top-0 right-0 md:hidden text-6xl font-bold text-gray-50 opacity-50 z-0">{idx + 1}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FarmerSpotlight = () => (
  <div className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="p-10 md:p-16 flex flex-col justify-center relative z-10 text-white">
            <div className="inline-flex items-center space-x-2 text-accent font-bold tracking-wider uppercase text-sm mb-6">
              <div className="w-8 h-0.5 bg-accent"></div>
              <span>Farmer Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Meet Rajesh from <br/> Punjab's Golden Fields
            </h2>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              "AgriConnect transformed how I sell my wheat harvest. I no longer rely on middlemen who cut my profits. Now, I connect directly with families who appreciate the effort I put into growing organic, pesticide-free grains."
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-xs text-green-200 uppercase tracking-wide mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">120</div>
                <div className="text-xs text-green-200 uppercase tracking-wide mt-1">Acres Organic</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">4.9</div>
                <div className="text-xs text-green-200 uppercase tracking-wide mt-1">Customer Rating</div>
              </div>
            </div>

            <Link to="/marketplace" className="inline-flex items-center text-white font-bold group w-max">
              View Rajesh's Crops <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="relative h-96 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Farmer in field" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:bg-gradient-to-l opacity-90 lg:opacity-100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedProducts = () => (
  <div className="bg-background py-24 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-accent font-bold tracking-wide uppercase text-sm">Fresh Harvests</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2">Seasonal Favorites</h2>
        </div>
        <Link to="/marketplace" className="group flex items-center text-primary font-bold mt-4 md:mt-0 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
          View Marketplace <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_PRODUCTS.slice(0, 4).map((product) => (
          <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                 {product.isOrganic && (
                  <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
                    <Leaf className="w-3 h-3 mr-1" /> Organic
                  </span>
                )}
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center shadow-lg">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{product.category}</div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4 flex items-center">
                <span className="w-4 h-4 rounded-full bg-gray-200 mr-2 overflow-hidden flex-shrink-0">
                    <img src={`https://i.pravatar.cc/100?u=${product.farmerId}`} alt="" className="w-full h-full object-cover"/>
                </span>
                {product.farmerName}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-gray-400">Price</span>
                  <div className="text-primary font-bold text-xl">₹{product.price}<span className="text-sm text-gray-400 font-normal">/{product.unit}</span></div>
                </div>
                <button className="h-10 w-10 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Why AgriConnect</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
          Redefining the Food Supply Chain
        </h3>
        <p className="text-lg text-gray-600">
          We bridge the gap between rural farms and urban tables, ensuring transparency, quality, and fair trade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <ShieldCheck className="w-10 h-10 text-white" />,
            title: "Quality Assured",
            desc: "Every farmer is verified and every crop batch is quality checked before listing.",
            color: "bg-emerald-500"
          },
          {
            icon: <Truck className="w-10 h-10 text-white" />,
            title: "Farm to Doorstep",
            desc: "Logistics network optimized for perishables to ensure maximum freshness.",
            color: "bg-blue-500"
          },
          {
            icon: <Leaf className="w-10 h-10 text-white" />,
            title: "Sustainable Practices",
            desc: "We promote and incentivize organic and eco-friendly farming methods.",
            color: "bg-primary"
          }
        ].map((feature, idx) => (
          <div key={idx} className="group relative p-8 bg-gray-50 rounded-3xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-2xl">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Community Stories</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Trusted by Farmers and Families
          </h3>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-green-800 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Priya Sharma",
            role: "Home Chef, Delhi",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quote: "I run a small catering business, and finding consistent quality ingredients was always a struggle. AgriConnect changed that. The freshness is unmatched!",
            stars: 5
          },
          {
            name: "Vikram Singh",
            role: "Farmer, Haryana",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quote: "Finally, a platform that gives power back to the farmers. I set my prices, I talk to my buyers, and I get paid on time. It's dignified farming.",
            stars: 5
          },
          {
            name: "Anita Desai",
            role: "Mother of two, Mumbai",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            quote: "Knowing exactly where my children's food comes from brings me so much peace of mind. The organic wheat we buy here is simply delicious.",
            stars: 5
          }
        ].map((testimonial, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
            <div className="flex text-accent mb-6">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="mb-8 flex-grow">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
            </div>
            <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LatestUpdates = () => (
  <div className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-heading font-bold text-gray-900">Latest from the Field</h2>
        <a href="#" className="text-primary font-bold hover:underline flex items-center">
          View All Posts <ArrowUpRight className="ml-1 w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            category: "Farming Tips",
            date: "Oct 12, 2023",
            title: "Sustainable Irrigation Techniques for Small Farms",
            desc: "Learn how modern drip irrigation can save up to 40% water while increasing yield."
          },
          {
            image: "https://images.unsplash.com/photo-1615811361269-6615249536dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            category: "Market Trends",
            date: "Oct 08, 2023",
            title: "Why Organic Wheat Prices are Rising This Season",
            desc: "An analysis of the current market demand and what it means for consumers."
          },
          {
            image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            category: "Recipes",
            date: "Sep 25, 2023",
            title: "Farm-Fresh Tomato Basil Soup Recipe",
            desc: "A heartwarming recipe using the fresh tomatoes available in the marketplace now."
          }
        ].map((post, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                {post.category}
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {post.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CTA = () => (
  <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
       <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Vegetables market"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto">
          Join the Agricultural Revolution
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto font-light">
          Whether you're a farmer looking for fair prices or a consumer seeking fresh produce, AgriConnect is your platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
             to="/auth?role=buyer" 
             className="bg-accent text-primary font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            I'm a Buyer
          </Link>
          <Link
             to="/auth?role=farmer" 
             className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-4 rounded-full hover:bg-white/30 transition shadow-xl"
          >
            I'm a Farmer
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <HowItWorks />
      <FarmerSpotlight />
      <FeaturedProducts />
      <Features />
      <Testimonials />
      <LatestUpdates />
      <CTA />
    </div>
  );
};