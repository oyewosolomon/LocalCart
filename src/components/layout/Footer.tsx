import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Apple,
  Mail,
  Phone,
  MapPin,
  // PlayStore
} from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">LocalCart</h4>
            <p className="text-gray-400">
              Empowering local retailers, delivering happiness to your doorstep.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#cities" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  Cities We Serve
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-indigo-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@localcartsolutions.com" className="hover:text-indigo-500 transition-colors">
                  hello@localcart-ng.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+1234567890" className="hover:text-indigo-500 transition-colors">
                  +2348067794162
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Lagos Island, Lagos</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex justify-center space-x-6">
          <a
            href="https://facebook.com/localcart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/localcart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/company/localcart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/localcart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LocalCart Solutions. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-indigo-500 transition-colors">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms-of-service" className="hover:text-indigo-500 transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;