import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Package } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Services',
      dropdown: [
        { name: 'For Retailers', href: '#retailer-services' },
        { name: 'For Customers', href: '#customer-services' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      name: 'About',
      dropdown: [
        { name: 'Our Story', href: '#story' },
        { name: 'Team', href: '#team' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    { name: 'Cities', href: '#cities' },
    { name: 'Faqs', href: '#faqs' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href='/' className={`flex-shrink-0 ${isScrolled ?'text-gray-800':'text-white'} flex items-center`}>
            <Package className="h-8 w-8 text-indigo-600" />
            <span className={`ml-2 text-xl font-bold ${isScrolled ?'text-gray-900':'text-white'}`}>LocalCart</span>
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${isScrolled ?'text-gray-900':'text-white'}`}>
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button className={`flex items-center text-gray-600 ${isScrolled ?'text-gray-900':'text-white'} hover:text-indigo-600 transition-colors duration-200`}>
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`${isScrolled ?'text-gray-900':'text-white'} hover:text-indigo-600 transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <button className={`px-4 py-2 ${isScrolled ?'text-gray-900':'text-white'} hover:text-indigo-700 transition-colors duration-200`}>
              Login
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-1">
                  <button className="w-full px-3 py-2 text-left text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">
                    {item.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <button className="w-full px-3 py-2 text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              Login
            </button>
            <button className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;