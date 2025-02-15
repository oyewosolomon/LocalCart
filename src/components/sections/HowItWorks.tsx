import React, { useState } from 'react';
import { 
  ArrowRight, Package, Clock, Database, Globe, Mail, Phone, 
  MapPin, CheckCircle, TrendingUp, Users, Heart, Zap,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

// Define types for the steps
type Step = {
  title: string;
  description: string;
};

type Steps = {
  retailer: Step[];
  customer: Step[];
};

// How It Works Section
const HowItWorksSection = () => {
  const steps: Steps = {
    retailer: [
      { title: 'Sign Up', description: 'Create your account and onboard your store' },
      { title: 'Sync Inventory', description: 'Connect your inventory with our platform' },
      { title: 'Start Selling', description: 'Begin receiving and fulfilling orders' }
    ],
    customer: [
      { title: 'Browse', description: 'Explore local retailers on the LocalCart app' },
      { title: 'Order', description: 'Place your order and choose delivery options' },
      { title: 'Track', description: 'Monitor your delivery in real-time' }
    ]
  };

  const [activeTab, setActiveTab] = useState<'retailer' | 'customer'>('retailer');

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Fast, and Reliable: How LocalCart Works
        </h2>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 bg-white shadow-sm">
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps[activeTab].map((step, index) => (
            <div key={index} className="relative w-full md:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps[activeTab].length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-indigo-600 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;