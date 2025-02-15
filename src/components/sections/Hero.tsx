import React from 'react';
import { ArrowRight, Package, Clock, Database, Globe } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: '25,000+', label: 'Local Retailers Connected' },
    { value: '98%', label: 'On-Time Delivery Rate' },
    { value: '1M+', label: 'Monthly Deliveries' }
  ];

  const features = [
    { icon: Clock, title: 'Same-Day Delivery', description: 'Get your orders delivered the same day, every time.' },
    { icon: Database, title: 'Inventory Sync', description: 'Real-time inventory updates for seamless operations.' },
    { icon: Package, title: 'Payment Processing', description: 'Secure, hassle-free payments for retailers and customers.' },
    { icon: Globe, title: 'Wide Reach', description: 'Serving 100 cities and growing.' }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-300 hover:scale-105">
            Empowering Local Retailers, 
            <span className="block text-indigo-600">Delivering Happiness to Your Doorstep</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Your Last-Mile Delivery Partner in 100 Cities. 
            <span className="font-semibold">98% On-Time Delivery, Every Time.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-200 hover:scale-105">
              Join as a Retailer
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;