import React from 'react';
import { Users, Zap, CheckCircle, Heart } from 'lucide-react';

// About Us Section
const AboutSection = () => {
  const values = [
    { icon: Users, title: 'Customer-Centricity', description: 'Putting our customers first in everything we do' },
    { icon: Zap, title: 'Innovation', description: 'Continuously improving our technology and services' },
    { icon: CheckCircle, title: 'Reliability', description: 'Delivering on our promises, every single time' },
    { icon: Heart, title: 'Community Empowerment', description: 'Supporting local businesses and communities' }
  ];
  const stats = [
    { value: '25,000+', label: 'Local Retailers Connected' },
    { value: '98%', label: 'On-Time Delivery Rate' },
    { value: '1M+', label: 'Monthly Deliveries' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who We Are: Revolutionizing Last-Mile Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At LocalCart Solutions, we're on a mission to empower local retailers and provide customers 
            with fast, reliable, and convenient delivery services.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <value.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Our Journey Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Column */}
            <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/images/journey.svg"
                alt="Our Journey"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Journey</h3>
              <p className="text-gray-600">
                Founded in 2020, LocalCart Solutions has grown from a small startup to a trusted partner 
                for 25,000 retailers across 100 cities, driven by our commitment to excellence and innovation.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by milestones such as reaching 1 million monthly deliveries 
                and achieving a 98% on-time delivery rate. We continue to innovate and expand, bringing 
                convenience and reliability to more communities every day.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid (Mobile Only) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-5 md:hidden">
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
      </div>
    </section>
  );
};

export default AboutSection;