
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visit us, call us, or connect with us online. We're here to help!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p className="text-gray-300">
                      B9/227, SQUARE ACADEMY<br />
                      Old Police Station, Between Boat Park, Kalyani-741235
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-300">+91 62904 04431</p>
                      <p className="text-gray-300">+91 91261 82375</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-full">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-300">info@squareacademy.com</p>
                      <p className="text-gray-300">admissions@squareacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Office Hours</h4>
                      <p className="text-gray-300">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex space-x-4">
                    <a 
                      href="https://wa.me/916290404431" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-center py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="tel:+916290404431"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-center py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="h-full">
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                
                <div className="bg-gray-700 rounded-lg overflow-hidden h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3673.283960525123!2d88.4383333!3d22.976583299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDU4JzM1LjciTiA4OMKwMjYnMTguMCJF!5e0!3m2!1sen!2sin!4v1754768701252!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Square Academy Location"
                  ></iframe>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Easily accessible via public transport, located in the heart of the city.
                  </p>
                  <a 
                    href="https://goo.gl/maps/example" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Quick Response Guarantee</h3>
            <p className="text-blue-100">
              We respond to all inquiries within 2 hours during business hours. 
              Your success is our priority!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
