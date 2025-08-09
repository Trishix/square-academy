
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseSection = () => {
  const features = [
    {
      title: "Expert Faculty",
      description: "Learn from the best minds who have excelled in competitive exams themselves",
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Regular Tests & Analysis",
      description: "Weekly tests with detailed analysis to track your progress and improvement areas",
      icon: "📊",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Doubt Solving Sessions",
      description: "Dedicated doubt clearing sessions to ensure no concept is left unclear",
      icon: "❓",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Personalized Mentorship",
      description: "Individual attention and customized study plans for each student",
      icon: "👥",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Foundation Building",
      description: "Strong foundation program for Class 6-10 students preparing for future challenges",
      icon: "🏗️",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Study Material",
      description: "Comprehensive study material designed by our expert faculty team",
      icon: "📚",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-orange-500">Square Academy?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in your academic journey
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Success Journey?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Join thousands of students who have achieved their dreams with Square Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
                onClick={() => document.getElementById('demo-booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Demo
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
