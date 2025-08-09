
import React from 'react';

const DemoBookingSection = () => {
  return (
    <section id="demo-booking" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-orange-500">Free Demo Class</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our teaching methodology firsthand. No commitment required!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Demo Class Booking</h3>
              <p className="text-orange-100">Fill out the form below to schedule your free demo class</p>
            </div>
            
            <div className="p-2">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe_example_demo_booking_form/viewform?embedded=true" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-b-2xl"
                title="Demo Class Booking Form"
              >
                Loading demo booking form...
              </iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-bold text-gray-800 mb-2">Flexible Timings</h4>
              <p className="text-gray-600 text-sm">Choose your preferred time slot</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">💯</div>
              <h4 className="font-bold text-gray-800 mb-2">Completely Free</h4>
              <p className="text-gray-600 text-sm">No hidden charges or commitments</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-800 mb-2">Subject Choice</h4>
              <p className="text-gray-600 text-sm">Pick the subject you want to explore</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Having trouble with the form? 
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_example_demo_booking_form/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-semibold ml-2"
              >
                Open in new tab →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingSection;
