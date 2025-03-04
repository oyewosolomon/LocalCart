import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    '/images/bg.jpg',
    '/images/bg-2.jpg',
    // '/images/bg3.jpg',
  ];

  // Function to switch to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  const stats = [
    { value: '25,000+', label: 'Local Retailers Connected' },
    { value: '98%', label: 'On-Time Delivery Rate' },
    { value: '1M+', label: 'Monthly Deliveries' },
  ];

  return (
    <div className="relative bg-white overflow-hidden h-screen">
      {/* Background Slideshow */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      />

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-300 hover:scale-105">
            Empowering Local Retailers,
            <span className="block text-indigo-300">Delivering Happiness to Your Doorstep</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-white mb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 hidden md:grid">
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
      </div>
    </div>
  );
};

export default HeroSection;