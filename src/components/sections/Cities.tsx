import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const CitiesSection = () => {
  // Example list of cities with their respective country codes
  const cities = [
    { name: 'New York', countryCode: 'us' },
    { name: 'Los Angeles', countryCode: 'us' },
    { name: 'Chicago', countryCode: 'us' },
    { name: 'Toronto', countryCode: 'ca' },
    { name: 'Vancouver', countryCode: 'ca' },
    { name: 'London', countryCode: 'gb' },
    { name: 'Paris', countryCode: 'fr' },
    { name: 'Berlin', countryCode: 'de' },
    { name: 'Sydney', countryCode: 'au' },
    { name: 'Tokyo', countryCode: 'jp' },
    { name: 'Mumbai', countryCode: 'in' },
    { name: 'Dubai', countryCode: 'ae' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Bringing Local Retailers Closer to You
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 text-center mb-12">
          We serve retailers and customers in over 100 cities. Explore the cities we operate in and join our growing network.
        </p>

        {/* Map Placeholder */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-full h-96 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <MapPin className="h-12 w-12 text-indigo-600 mb-4" />
            <span className="text-gray-600 text-lg">Interactive Map Coming Soon</span>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:bg-indigo-50 text-center"
            >
              {/* Country Flag */}
              <img
                src={`https://flagcdn.com/${city.countryCode}.svg`}
                alt={`${city.countryCode} flag`}
                className="w-12 h-8 mx-auto mb-2 object-cover"
              />
              {/* City Name */}
              <span className="text-gray-700 font-medium block mt-2">{city.name}</span>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your city? Join us and bring our services to your area!
          </p>
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 hover:scale-105">
            Request Your City
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;