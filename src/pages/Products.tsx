import Footer from '@/components/layout/Footer';
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  retailer: string;
}

const products: Product[] = [
    {
      id: 1,
      name: "Organic Apples",
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "FreshMart"
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      price: "$3.49",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "Bakery Delight"
    },
    {
      id: 3,
      name: "Free-Range Eggs",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "FarmFresh"
    },
    {
      id: 4,
      name: "Almond Milk",
      price: "$5.49",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "HealthyBites"
    },
    {
      id: 5,
      name: "Organic Spinach",
      price: "$2.29",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "GreenGrocer"
    },
    {
      id: 6,
      name: "Greek Yogurt",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      retailer: "DairyGoodness"
    }
  ];

const Products: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the sliding header
  const backgroundImages = [
    "/images/h-1.jpg",
    "/images/h-2.jpg"
  ];

  // Function to switch to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  return (
    <div className="bg-white">
      {/* Sliding Images Header */}
      <div
        className="relative h-96 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Header Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Shop Local, Delivered Fast
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Explore a wide range of products from local retailers and get them delivered to your doorstep with LocalCart.
          </p>
        </div>
      </div>

      {/* Product Listing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Explore Our Products
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Shop from a wide range of products offered by local retailers.
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.retailer}</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">{product.price}</p>

                  {/* Add to Cart Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;