
import React from 'react';

const FeedbackSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Share Your <span className="text-blue-600">Feedback</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your opinion matters to us. Help us improve our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Feedback Form</h3>
              <p className="text-blue-100">We value your thoughts and suggestions</p>
            </div>
            
            <div className="p-2">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe_example_feedback_form/viewform?embedded=true" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="rounded-b-2xl"
                title="Feedback Form"
              >
                Loading feedback form...
              </iframe>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Can't see the form? 
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_example_feedback_form/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold ml-2"
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

export default FeedbackSection;
