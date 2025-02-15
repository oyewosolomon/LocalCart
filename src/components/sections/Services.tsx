import React, { useState } from 'react';
import { 
  ArrowRight, Package, Clock, Database, Globe, Mail, Phone, 
  MapPin, CheckCircle, TrendingUp, Users, Heart, Zap,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

// Define types for the services
type Service = {
  title: string;
  description: string;
};

type Services = {
  retailer: Service[];
  customer: Service[];
};

// Services Section
const ServicesSection = () => {
  const services: Services = {
    retailer: [
      { title: 'Same-Day Delivery', description: 'Offer your customers the convenience of same-day delivery with our efficient logistics network.' },
      { title: 'Inventory Synchronization', description: 'Keep your inventory updated in real-time, reducing stockouts and overstocking.' },
      { title: 'Payment Processing', description: 'Secure and seamless payment solutions to streamline your operations.' },
      { title: 'Analytics Dashboard', description: 'Gain insights into your sales, delivery performance, and customer behavior.' }
    ],
    customer: [
      { title: 'Fast Delivery', description: 'Get your favorite local products delivered to your doorstep in record time.' },
      { title: 'Wide Selection', description: 'Access thousands of local retailers and their products in one platform.' },
      { title: 'Easy Returns', description: 'Hassle-free return policy for a stress-free shopping experience.' }
    ]
  };

  const [activeTab, setActiveTab] = useState<'retailer' | 'customer'>('retailer');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tailored Solutions for Retailers and Customers
        </h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab('retailer')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'retailer' ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
            >
              For Retailers
            </button>
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'customer' ? 'bg-indigo-600 text-white' : 'text-gray-600'
              }`}
            >
              For Customers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services[activeTab].map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;