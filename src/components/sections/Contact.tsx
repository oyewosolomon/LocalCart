import React, { useState } from 'react';
import { 
  ArrowRight, Package, Clock, Database, Globe, Mail, Phone, 
  MapPin, CheckCircle, TrendingUp, Users, Heart, Zap,
  Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Let's Connect: We're Here to Help
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-32"></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">info@localcartsolutions.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-600">123 Business Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  <Facebook className="h-6 w-6 text-indigo-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  <Twitter className="h-6 w-6 text-indigo-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  <Linkedin className="h-6 w-6 text-indigo-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-indigo-100 transition-colors duration-200">
                  <Instagram className="h-6 w-6 text-indigo-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;