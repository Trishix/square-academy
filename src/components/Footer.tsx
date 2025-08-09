
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Square Academy
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Empowering students to achieve their dreams through quality education, 
                expert guidance, and personalized attention. Your success is our mission.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/squareacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
              >
                <span className="text-xl">📘</span>
              </a>
              <a 
                href="https://instagram.com/squareacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300"
              >
                <span className="text-xl">📷</span>
              </a>
              <a 
                href="https://linkedin.com/company/squareacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-colors duration-300"
              >
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <div className="space-y-3">
              <a href="#courses" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Our Courses
              </a>
              <a href="#demo-booking" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Book Demo
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Contact Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Results
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300">
                Faculty
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <span className="text-sm">123 Education Street, Knowledge Park, Delhi - 110001</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📞</span>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-400">✉️</span>
                <span className="text-sm">info@squareacademy.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Square Academy. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
